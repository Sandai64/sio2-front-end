import '../styles/output.css';
import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ title, excerpt, price, imageURL, linkID }) {
  return (
    <Link to={`/product/${linkID}`} className={'default overflow-hidden border rounded-lg shadow transition-all transform hover:scale-105'}>
      <p className='flex items-center px-2 py-1 text-lg font-bold border-b'><span className='flex-grow'>{title}</span><ExternalLink size={20}/></p>
      <img src={`/img/${imageURL}`} alt={`Image of ${title}`}/>
      <p className='px-2 pt-2 text-sm border-t line-clamp-1'>{excerpt}</p>
      <p className='flex items-center justify-end flex-grow p-2 text-right'>
        <span className='px-2 py-1 text-white bg-black rounded-lg'>{`${price} €`}</span>
      </p>
    </Link>
  );
}