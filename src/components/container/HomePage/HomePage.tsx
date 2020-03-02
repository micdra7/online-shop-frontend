import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { getDiscounts, currentLink, getLastPurchasedProducts } from '../../../utils/ApiCalls';
import ImageSlider from '../ImageSlider/ImageSlider';
import LoadingSpinner from '../../presentational/LoadingSpinner/LoadingSpinner';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Discount, Product } from '../../../utils/Types';
import ProductList from '../ProductList/ProductList';

export interface HomePageProps {
    addToCart: (productId: number, quantity: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {

    const [discounts, setDiscounts] = useState<Discount[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [imageLinks, setImageLinks] = useState(['']);
    const [productHrefs, setProductHrefs] = useState(['']);

    const HomePageContent: React.FC = () => (
        <div>
            <ImageSlider imageLinks={imageLinks} hrefs={productHrefs} />
            <ProductList products={products} message='Recently bought' addToCart={addToCart} />
        </div>
    );

    // fetching current discounts and last purchased products
    useEffect(() => {
        const fetchDiscounts = async () => {
            const response: Discount[] = await getDiscounts();

            setDiscounts(response);
        };

        const fetchProducts = async () => {
            const response: Product[] = await getLastPurchasedProducts();

            setProducts(response);
        };

        fetchDiscounts();
        fetchProducts();
    }, []);

    // populating arrays for image slider based on json response
    useEffect(() => {
        setImageLinks(discounts.map((d) => `${currentLink}/images/${d.productID}.png`));
        setProductHrefs(discounts.map((d) => `/product/${d.productID}`));
    }, [discounts]);

    return (
        <div className='home-page'>
            <TransitionGroup className='transition-group'>
                <CSSTransition key={(discounts.length + products.length)} classNames='fade' timeout={300}>
                    {discounts.length > 0 && products.length > 0 ? <HomePageContent /> : <LoadingSpinner />}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default HomePage;
