import { useEffect, useState } from 'react';
import '../styles/output.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import ProductCard from '../components/ProductCard';
import CategoryAPI from '../services/CategoryAPI';
import { Link, useParams } from 'react-router-dom';
import { Quote, List } from 'lucide-react';

export default function SingleCategoryView() {
  /* Fetch all products from category ID */
  const { id } = useParams();
  let [pageHeadingDOM, setPageHeadingDOM] = useState();
  let [productsList, setProductsList] = useState(<LoadingSpinner/>);
  let [categoryMetaInfoPane, setCategoryMetaInfoPane] = useState();

  useEffect(() => {
    async function fetchData() {
      /* Fetch products via API */
      let filledProductsList = [];

      const productsListFromCategoryRaw = await CategoryAPI.getAllProductsFromCategoryID(id);
      const categoryMeta = await CategoryAPI.getCategoryByID(id);

      productsListFromCategoryRaw.forEach((productItemRaw) => {
          // Loop over inidividual products
          filledProductsList.push(
            <ProductCard
              title={productItemRaw.name}
              excerpt={productItemRaw.description}
              price={productItemRaw.price_tax_free}
              imageURL={productItemRaw.image_path}
              linkID={productItemRaw.id}
              key={productItemRaw.slug}
            />
          );
        });

        setPageHeadingDOM(
          <span className='font-medium'>› {categoryMeta.name}</span>
        );
        setCategoryMetaInfoPane(
          <div>
            <div className='flex items-center px-2 mt-8 space-x-2'>
              <List />
              <p>{productsListFromCategoryRaw.length} products in this category.</p>
            </div>
            <div className='flex items-start px-2 mt-4 space-x-2'>
              <Quote className='flex-shrink-0'/>
              <p className='leading-tight'>{categoryMeta.description}</p>
            </div>
          </div>
        );
        setProductsList(filledProductsList);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <div className='container px-4 mt-16 sm:px-0 sm:mx-auto'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'><Link to='/categories'>Categories</Link> {pageHeadingDOM}</p>
        {categoryMetaInfoPane}
        <div className='grid grid-cols-4 gap-8 mt-8'>
          {productsList}
        </div>
      </div>
    </div>
  );
}