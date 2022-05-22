import { Plus, X, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import BlogAPI from "../../../services/BlogAPI";
import AdminNavbar from "./AdminNavbar"

export default function AdminBlogManagementModule() {

  const [showModalCreateCategory, setShowModalCreateCategory] = useState(false);
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  
  // Form states
  const [formPostTitle, setFormPostTitle] = useState();
  const [formPostContent, setFormPostContent] = useState();
  const [formPostCategory, setFormPostCategory] = useState();
  const [formCategoryTitle, setFormCategoryTitle] = useState();

  const [postsList, setPostsList] = useState(<LoadingSpinner/>);

  // Form handlers
  const handlePostTitleChange = (e) => {
    setFormPostTitle(e.target.value);
  }

  const handlePostContentChange = (e) => {
    setFormPostContent(e.target.value);
  }

  const handlePostSubmit = (e) => {
    e.preventDefault();
    BlogAPI.createBlogPost(formPostTitle, formPostContent);
    setFormPostTitle();
    setFormPostContent();
  }

  useEffect(() => {
    BlogAPI.getAllBlogPosts().then((postsList) => {
      let completePostsList = [];
  
      postsList.forEach((postItem) => {
        completePostsList.push(
          <div key={`post-unique-${postItem.id}`} className="flex items-center justify-between w-full px-4 py-2 border rounded-lg">
            <div className="flex items-center justify-between">
              <Pencil size={24}/>
              <p className="ml-4 text-lg font-medium leading-tight text-ellipsis">{postItem.title}</p>
            </div>

            <div className="flex items-center">
              <span onClick={() => 'handleDeletePost(postItem.id)'} className="p-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900">Delete post</span>
            </div>

          </div>
        );
      });
  
      setPostsList(completePostsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])});

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>

      {/* New Category modal */}
      { showModalCreateCategory ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
          <div className="bg-white border rounded-lg">
            <div className="flex items-center justify-between p-2 border-b">
              <p className="text-lg font-bold leading-none">New category</p>
              <X className="cursor-pointer" onClick={() => setShowModalCreateCategory(false)} size={24}/>
            </div>
            <div className="p-2">
              <form className="flex space-x-2">
                <input placeholder="Category name..." className="px-2 rounded-lg"/>
                <input type='submit' className="px-2 py-1 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      ) : null }

      {/* New Post modal */}
      { showModalCreatePost ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/50">
          <div className="w-2/5 bg-white border rounded-lg">
            <div className="flex items-center justify-between p-2 border-b">
              <p className="text-lg font-bold leading-none">New post</p>
              <X className="cursor-pointer" onClick={() => setShowModalCreatePost(false)} size={24}/>
            </div>
            <div className="p-2">
              <form onSubmit={handlePostSubmit} className="flex flex-col space-y-4">
                <input onChange={handlePostTitleChange} value={formPostTitle} placeholder="Post title..." className="px-2 py-1 border rounded-lg"/>
                <textarea onChange={handlePostContentChange} value={formPostContent} placeholder="Post content..." className="p-2 border rounded-lg" type='text'/>
                <input type='submit' className="px-2 py-1 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      ) : null }
      
      <div className="flex-grow p-4">
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>WIP: Blog Management</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-2 italic font-light">Blog posts</p>
            <div className="grid grid-cols-1 gap-4">
              {/* posts list */}
              <div className="flex flex-col items-start justify-start px-4 py-2 space-y-2 border rounded-lg">
                { postsList }
                
                <div onClick={() => setShowModalCreatePost(true)} className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
                  <Plus/>
                  <p>Create new</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 italic font-light">Blog categories</p>
            <div className="grid grid-cols-1 gap-4">
              {/* categories list */}
              <div className="flex items-center justify-start px-4 py-2 border rounded-lg">
                <div onClick={() => setShowModalCreateCategory(true)} className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
                  <Plus/>
                  <p>Create new</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}