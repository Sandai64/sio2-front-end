import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogAPI from '../services/BlogAPI';
import '../styles/output.css';
import { Hash, Paperclip } from 'lucide-react';

export default function Blog() {
  let [postsList, setPostsList] = useState(<LoadingSpinner/>);
  let [categoriesList, setCategoriesList] = useState(<LoadingSpinner/>);

  useEffect(() => {
    
    BlogAPI.getAllBlogPosts().then((blogPostArray) => {
      const completedPostsList = [];

      blogPostArray.forEach(blogPostElement => {
        completedPostsList.push(
          <Link to={`/blog/post/${blogPostElement.id}`} key={blogPostElement.slug} className='flex items-center p-2 space-x-2 transition-all border rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100'>
            <Paperclip/>
            <p>{blogPostElement.title}</p>
          </Link>
        );
      });

      setPostsList(completedPostsList);
    });


    BlogAPI.getAllBlogCategories().then((blogCategoriesArray) => {
      const completedCategoriesList = [];

      blogCategoriesArray.forEach((blogCategoryElement) => {
        const blogPostsCount = blogCategoryElement.blogPages.length;

        completedCategoriesList.push(
          <Link to={`/blog/category/${blogCategoryElement.id}`} key={blogCategoryElement.slug} className='flex items-center p-2 space-x-4 transition-all border rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-gray-100'>
            <Hash/>
            <div>
              <p className='font-semibold'>{blogCategoryElement.name}</p>
              <p className='text-xs'>{blogPostsCount} post(s) in this category...</p>
            </div>
          </Link>
        );
      });

      setCategoriesList(completedCategoriesList);
    })

  }, []);

  return (
    <div className='container flex justify-between mx-auto mt-16 space-x-8'>
      <div>
        <div>
          <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>Blog posts</p>
        </div>
        <div className='container flex flex-col justify-center mx-auto mt-4 space-y-2'>
          {postsList}
        </div>
      </div>
      <div>
        <div>
          <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>Blog categories</p>
        </div>
        <div className='container flex flex-col justify-center mx-auto mt-4 space-y-2'>
          {categoriesList}
        </div>
      </div>
    </div>
  );
}