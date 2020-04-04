import React, { useState, useEffect } from 'react';
import './CategoryPage.scss';
import { Category, Subcategory } from '../../../utils/Types';
import { getCategories, getSubcategories } from '../../../utils/ApiCalls';
import LoadingSpinner from '../../presentational/LoadingSpinner/LoadingSpinner';
import CategoryList from '../../presentational/CategoryList/CategoryList';

const CategoryPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response: Category[] = await getCategories();

            setCategories(response);
        };

        const fetchSubcategories = async () => {
            const response: Subcategory[] = await getSubcategories();

            setSubcategories(response);
        };

        fetchCategories();
        fetchSubcategories();
    }, []);

    return (
        <div className='category-page'>
            {categories.length > 0 && subcategories.length > 0 ? (
                <CategoryList
                    categories={categories}
                    subcategories={subcategories}
                />
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
};

export default CategoryPage;
