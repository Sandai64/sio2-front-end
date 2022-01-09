import { useEffect, useState } from 'react';
import '../styles/output.css';
import ProductAPI from '../services/ProductAPI.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { useParams } from 'react-router';
import { Euro, Paperclip, BookOpen } from 'lucide-react';

// Show a 404 if product doesn't exist
import { Link, Navigate } from 'react-router-dom';

export default function SingleProductView() {
  /* Fetch individual product information */
  const { id } = useParams();
  
  /* Fetch all products */
  let [pageHeadingDOM, setPageHeadingDOM] = useState();
  let [productInfoView, setProductInfoView] = useState(<LoadingSpinner/>);

  useEffect(() => {
    async function fetchData() {
      /* Fetch product info via API */
      const productInfo = await ProductAPI.getProductByID(id);

      // Check if there's an API error
      if (productInfo.status === 500 || productInfo.status === 404) {
        setProductInfoView(<Navigate to='/404'/>);
        return
      }

      setPageHeadingDOM(
        <span className='font-medium'>› {productInfo.name}</span>
      );
      
      setProductInfoView(
        <div className='flex mt-8 space-x-6'>
          {/* Left pane : img + order btn */}
          <div className=''>
            <img src={`/img/${productInfo.image_path}`} className='w-64 shadow-lg rounded-xl' alt={productInfo.name}/>
            <div className='w-64 p-2 mt-2 transition-all bg-black shadow-lg cursor-pointer rounded-xl hover:scale-105'>
              <p className='text-lg font-bold text-center text-white'>Order now</p>
            </div>
          </div>
          {/* Right pane : full description, price, category */}
          <div className='w-full grid-cols-2 gap-8'>

            <div className='flex w-7/12 space-x-8'>
              <div className='flex-1'>
                <div className='flex items-center mb-1 space-x-1 border-b border-gray-800 w-max'>
                  <BookOpen size={18}/>
                  <p className='text-xl font-semibold'>Description</p>
                </div>
                <p>{productInfo.description}</p>
              </div>
              <div className='flex-1'>
                <div className='flex items-center mb-1 space-x-1 border-b border-gray-800 w-max'>
                  <Paperclip size={18}/>
                  <p className='text-xl font-semibold'>Category</p>
                </div>
                <p>{productInfo.id_category.name}</p>
              </div>
            </div>

            <div className='flex w-7/12 mt-4 space-x-8'>
              <div className='flex-1'>
                <div className='flex items-center mb-1 space-x-1 border-b border-gray-800 w-max'>
                  <Euro size={18}/>
                  <p className='text-xl font-semibold'>Price</p>
                </div>
                <p>{productInfo.price_tax_free} € (tax-free)</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <div className='container px-4 mt-16 sm:px-0 sm:mx-auto'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'><Link to='/products'>Products</Link> {pageHeadingDOM}</p>
        {productInfoView}
      </div>
    </div>
  );
}