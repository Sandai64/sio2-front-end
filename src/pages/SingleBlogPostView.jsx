import { useEffect, useState } from 'react';
import '../styles/output.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { useParams } from 'react-router';
import { Timer, Hash, User, Quote } from 'lucide-react';
import parse from 'html-react-parser';
import showdown from 'showdown';

// Show a 404 if product doesn't exist
import { Link, Navigate } from 'react-router-dom';
import BlogAPI from '../services/BlogAPI';

export default function SingleBlogPostView() {
  /* Fetch individual product information */
  const { id } = useParams();
  
  /* Fetch all products */
  let [pageHeadingDOM, setPageHeadingDOM] = useState();
  let [postView, setPostView] = useState(<LoadingSpinner/>);

  useEffect(() => {
    function fetchData() {
      /* Fetch product info via API */
      BlogAPI.getBlogPostByID(id).then((post_data) => {
        const written_at = new Date(post_data.updated_at).toDateString();

        // const converter = new showdown.Converter();
        // const formattedHTMLPostContent = parse(converter.makeHtml(post_data.description));

        setPostView(
          <div>
            <div className='flex flex-col space-y-2 font-sm'>
              <div className='flex items-center space-x-2'>
                <Timer/>
                <p><span className='font-light'>Written at :</span> {written_at}</p>
              </div>
              <div className='flex items-center space-x-2'>
                <User/>
                <p><span className='font-light'>Written by :</span> {post_data.username.username}</p>
              </div>
              <div className='flex items-center mb-4 space-x-2'>
                <Hash/>
                <p><span className='font-light'>Category :</span> {post_data.id_blog_category.name}</p>
              </div>
            </div>
            <div className='flex p-4 mt-4 border rounded-lg'>
              <Quote className='flex-shrink-0 mr-2'/><p>{post_data.description}</p>
            </div>
          </div>
        );

        setPageHeadingDOM(
          <span className='font-medium'>› {post_data.title}</span>
        );

      }).catch((e) => {
        setPostView(<Navigate to='/404'/>);
      });
    };

    fetchData();
  }, [id]);
  
  return (
    <div>
      <div className='container px-4 mt-16 sm:px-0 sm:mx-auto'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'><Link to='/blog'>Blog</Link> {pageHeadingDOM}</p>
        <div className='mt-8'>
          {postView}
        </div>
      </div>
    </div>
  );
}