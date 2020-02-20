import React from 'react';
import './CategoryListElement.scss';
import { Category, Subcategory } from '../../../utils/Types';

export interface CategoryListElementProps {
    category: Category;
    subcategories: Subcategory[];
}

const CategoryListElement: React.FC<CategoryListElementProps> = ({ category, subcategories }) => {

    const renderedSubcategories = subcategories.map((subcategory) => (
        <li key={subcategory.name}
            className='subcategory'>

            {subcategory.name}
        </li>
    ));

    return (
        <ul className='category-element'>
            <li className='category'>{category.name}</li>

            {renderedSubcategories}
        </ul>
    );
};

export default CategoryListElement;
