import { useEffect, useState } from 'react';
import '../styles/output.css';
import ProductAPI from '../services/ProductAPI.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import ProductCard from '../components/ProductCard';

export default function Products() {
  /* Fetch all products */
  let [productsList, setProductsList] = useState(<LoadingSpinner/>);

  useEffect(() => {
    async function fetchData() {
      /* Fetch products via API */
      let filledProductsList = [];

      const productsListRaw = await ProductAPI.getAllProducts();

      productsListRaw.forEach((productItemRaw) => {
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

        setProductsList(filledProductsList);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <div className='container px-4 mt-16 sm:px-0 sm:mx-auto'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>Products</p>
        <div className='grid grid-cols-4 gap-8 mt-8'>
          {productsList}
        </div>
      </div>
    </div>
  );
}