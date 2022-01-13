import '../styles/output.css';
import { Link } from 'react-router-dom';
import { ExternalLink, FolderOpen } from 'lucide-react';

export default function CategoryCard({ title, excerpt, linkID, productCount }) {
  return (
    <Link to={`/category/${linkID}`} className={'default overflow-hidden border rounded-lg shadow transition-all transform hover:scale-105'}>
      <p className='flex items-center px-2 py-1 text-lg font-bold border-b'><FolderOpen size={20} className='mr-2'/><span className='flex-grow'>{title}</span><ExternalLink size={20}/></p>
      <p className='px-2 pt-1 text-sm border-t line-clamp-1'>{excerpt}</p>
      <p className='px-2 pb-1 text-xs italic'>{productCount} products in this category...</p>
    </Link>
  );
}