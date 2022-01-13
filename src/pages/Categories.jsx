import { useEffect, useState } from 'react';
import '../styles/output.css';
import CategoryAPI from '../services/CategoryAPI.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  /* Fetch all categories */
  let [categoriesList, setCategoriesList] = useState(<LoadingSpinner/>);

  useEffect(() => {
    async function fetchData() {
      /* Fetch categories via API */
      let filledCategoriesList = [];

      const categoriesListRaw = await CategoryAPI.getAllCategories();

      categoriesListRaw.forEach((categoryItemRaw) => {
          // Loop over inidividual category
          let productsCount = categoryItemRaw.products.length;

          filledCategoriesList.push(
            <CategoryCard
              title={categoryItemRaw.name}
              excerpt={categoryItemRaw.description}
              linkID={categoryItemRaw.id}
              key={categoryItemRaw.slug}
              productCount={productsCount}
            />
          );
        });

        setCategoriesList(filledCategoriesList);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <div className='container px-4 mt-16 sm:px-0 sm:mx-auto'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>Categories</p>
        <div className='grid grid-cols-3 gap-8 mt-8 xl:grid-cols-4'>
          {categoriesList}
        </div>
      </div>
    </div>
  );
}