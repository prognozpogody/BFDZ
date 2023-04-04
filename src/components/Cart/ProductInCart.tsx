import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { getCartSelector } from "../../redux/slices/cartSlice";
import { CardProducts } from "../../types/products.interface";
import { totalPrice } from "../../utils/functions";

export const ProductInCart = ({ product }: { product: CardProducts }) => {
  const { removeToCart, incrementProduct, dicrementProduct } = useActions();
  const productsInCart = useSelector(getCartSelector);

  const productFromCart = productsInCart.find(
    (el) => el.id === product._id
  ) || { count: 0 };

  return (
    <li key={product._id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.pictures}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-col">
        <div>
          <div className="flex items-center text-base font-medium text-gray-900">
            <h3>
              <a href={product._id}>{product.name}</a>
            </h3>
            <button
              type="button"
              className="w-10 h-10 font-medium rounded-md border border-transparent bg-primary"
              onClick={() => {
                dicrementProduct(product._id);
              }}
            >
              -
            </button>
            <p>
              {totalPrice(
                productFromCart.count,
                product.price,
                product.discount
              )}
              р.
            </p>
            <button
              type="button"
              disabled={productFromCart.count === product.stock}
              className="w-10 h-10 font-medium rounded-md border border-transparent bg-primary"
              onClick={() => incrementProduct(product._id)}
            >
              +
            </button>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            В наличии {product.stock}шт.
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Вес {product.wight}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => {
                removeToCart(product);
              }}
            >
              Убрать
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
