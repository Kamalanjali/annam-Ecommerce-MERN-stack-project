import React from 'react';
import { categories } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory | 'all';
  onCategoryChange: (category: ProductCategory | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const allCategories = [{ id: 'all', name: 'All Products', description: 'View everything' }, ...categories];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {allCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id as ProductCategory | 'all')}
            className={`p-4 rounded-xl border transition-all duration-200 text-left group hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-green-600 dark:bg-green-700 text-white border-green-600 dark:border-green-700 shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
            }`}
          >
            <p className={`font-semibold text-sm ${
              selectedCategory === category.id ? 'text-white' : 'text-gray-900 group-hover:text-green-700'
              selectedCategory === category.id ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400'
            }`}>
              {category.name}
            </p>
            <p className={`text-xs mt-1 ${
              selectedCategory === category.id ? 'text-green-100 dark:text-green-200' : 'text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400'
            }`}>
              {category.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};