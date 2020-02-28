import React, { useState, useEffect } from 'react';
import './CategoryPage.scss';
import { Category, Subcategory } from '../../../utils/Types';
import { getCategories, getSubcategories } from '../../../utils/ApiCalls';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
            <TransitionGroup className='transition-group'>
                <CSSTransition key={(categories.length + subcategories.length)} classNames='fade' timeout={300}>
                    {
                        categories.length > 0 && subcategories.length > 0 ?
                        <CategoryList categories={categories} subcategories={subcategories} /> :
                        <LoadingSpinner />
                    }
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default CategoryPage;
