import React from 'react';
import './CategoryList.scss';
import { Category, Subcategory } from '../../../utils/Types';
import CategoryListElement from '../CategoryListElement/CategoryListElement';

export interface CategoryListProps {
    categories: Category[];
    subcategories: Subcategory[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, subcategories }) => {

    const renderedCategories = categories.map((category) => (
        <CategoryListElement
            key={category.name}
            category={category}
            // tslint:disable-next-line: triple-equals
            subcategories={subcategories.filter((s) => s.categoryID == category.id)} />
    ));

    return (
        <div className='category-list'>
            {renderedCategories}
        </div>
    )
};

export default CategoryList;
