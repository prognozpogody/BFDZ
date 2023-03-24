import { useActions } from "../../hooks/useActions";
import { CardListProps } from "../../types/products.interface";
import React from "react";


export const CardList = ({ products }: CardListProps) => {
  const { addToCart } = useActions();

  const handleAddToCart = (id: string) => {
    addToCart({ id});
  };

  return (
    <div>
      <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div>
              <a key={product._id} href={product._id} className="group">
                <div className=" max-h-xs max-w-xs aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.pictures}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={() => handleAddToCart(product._id)}
              >
                В корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};