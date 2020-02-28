import React, { useState, useEffect } from 'react';
import { currentLink, getProduct } from '../../../utils/ApiCalls';
import { Product } from '../../../utils/Types';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {

    const { productId } = useParams();
    const [itemCount, setItemCount] = useState(1);
    const [product, setProduct] = useState<Product>(null);
    const [price, setPrice] = useState(0);

    const addToCart = () => {
        return 1;
    };

    const adjustItemCount = (event: any) => {
        setItemCount(
            Number(event.target.value));
    };

    useEffect(() => {
        const fetchProduct = async () => {
            const response: Product = await getProduct(Number(productId));

            setProduct(response);
        };

        fetchProduct();
    }, []);

    useEffect(() => {
        if (product?.discounts?.length > 0) {
            const maxDiscount = Math.max.apply(Math, product.discounts.map((d) => d.percentage));

            setPrice(product.price - product.price * (maxDiscount / 100));
        }
    }, [product]);

    const PageContent: React.FC = () => (
        <div className='product-page'>
            <img src={`${currentLink}/images/${productId}.png`} alt={`Image for product: ${product.name}`} />

            <aside className='info'>
                <p>{product.producer.name} {product.name}</p>

                <p>
                    <input type='number' className='quantity' value={itemCount}
                        onChange={adjustItemCount} min='1' max={product.availableQuantity} />
                </p>

                <p>
                    <span className='price'>
                        {price}$
                    </span>

                    <button className='add-to-cart' onClick={addToCart}>
                        Add to cart
                    </button>
                </p>
            </aside>
        </div>
    );

    return (
        product !== null ?
        <PageContent /> :
        <></>
    );
};

export default ProductPage;
