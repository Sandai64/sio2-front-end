import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogAPI from '../services/BlogAPI';
import '../styles/output.css';
import { Hash, Paperclip } from 'lucide-react';

export default function SingleBlogCategoryView() {
  const { id } = useParams();

  let [postsList, setPostsList] = useState(<LoadingSpinner/>);
  let [pageHeadingDOM, setPageHeadingDOM] = useState();

  useEffect(() => {
    
    BlogAPI.getBlogCategoryByID(id).then((blogCategoryData) => {
      const completedPostsList = [];

      blogCategoryData.blogPages.forEach(blogPostElement => {
        completedPostsList.push(
          <Link to={`/blog/post/${blogPostElement.id}`} key={blogPostElement.slug} className='flex items-center p-2 space-x-2 transition-all border rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100'>
            <Paperclip/>
            <p>{blogPostElement.title}</p>
          </Link>
        );
      });

      setPostsList(completedPostsList);
      console.log(blogCategoryData);
      setPageHeadingDOM(
        <span className='font-medium'>› {blogCategoryData.name}</span>
      );
    });

  }, []);

  return (
    <div className='container flex mx-auto mt-16 space-x-8'>
      <div>
        <div>
          <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'><Link to='/blog'>Blog category</Link> {pageHeadingDOM}</p>
        </div>
        <div className='container flex flex-col justify-center mx-auto mt-4 space-y-2'>
          {postsList}
        </div>
      </div>
    </div>
  );
}