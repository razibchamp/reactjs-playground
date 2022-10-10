import React from 'react';
import Product from './product';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/Cart/action';
import { decrementProduct } from '../../redux/Product/action';
import { calculatePrice } from '../../redux/Price/action';

function ProductList(props) {

    const products = useSelector( (state) => state.product );
    const cart_products = useSelector( (state) => state.cart);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(decrementProduct(product));
        dispatch(calculatePrice(product))
    }

    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
        >
            {products.map( (product) => {
                return <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                >
                <div class="flex justify-between px-4 items-center">
                    <div class="text-lg font-semibold">
                        <p>{product.name} {`(${product.quantity})`}</p>
                        <p class="text-gray-400 text-base">Tk {product.price}</p>
                    </div>
                    <div class="text-lg font-semibold">
                        <button
                            class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                            onClick={() => addToCartHandler(product)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            })}
        </div>
    );
}

export default ProductList;