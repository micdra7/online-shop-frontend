import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { getDiscounts, currentLink, Discount } from '../../../utils/ApiCalls';
import ImageSlider from '../ImageSlider/ImageSlider';
import LoadingSpinner from '../../presentational/LoadingSpinner/LoadingSpinner';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const HomePage: React.FC = () => {

    const [discounts, setDiscounts] = useState<Discount[]>([]);
    const [imageLinks, setImageLinks] = useState(['']);
    const [productHrefs, setProductHrefs] = useState(['']);

    useEffect(() => {
        const fetchDiscounts = async () => {
            const response: Discount[] = await getDiscounts();

            setDiscounts(response);
        };

        fetchDiscounts();
    }, []);

    useEffect(() => {
        setImageLinks(discounts.map((d) => `${currentLink}/images/${d.productID}.png`));
        setProductHrefs(discounts.map((d) => `/product/${d.productID}`));
    }, [discounts]);

    return (
        <div className='home-page'>
            <TransitionGroup className='transition-group'>
                <CSSTransition key={discounts.length} classNames='fade' timeout={300}>
                    {discounts.length > 0 ? <ImageSlider imageLinks={imageLinks} hrefs={productHrefs} /> : <LoadingSpinner />}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default HomePage;
