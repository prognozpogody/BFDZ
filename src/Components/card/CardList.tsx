import { useActions } from "../../hooks/useActions";
import { CardListProps } from "../../types/products.interface";
import React from "react";

export const CardList = ({ products }: CardListProps) => {
  const { addToCart, changeModalCardQuickviewsState, addProductQuickviews } =
    useActions();

  const handleAddToCart = (id: string) => {
    addToCart({ id });
  };

  return (
    <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div>
            <div key={product._id} className="group">
              <div className=" relative flex justify-center max-h-xs max-w-xs aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.pictures}
                  alt={product.name}
                  onClick={() => {
                    addProductQuickviews(product);
                    changeModalCardQuickviewsState(true);
                  }}
                  className="h-full w-full max-w-[320px] max-h-[320px] min-w-[320px] min-h-[320px] rounded-[20px] object-contain object-center group-hover:opacity-75"
                />

                <button>
                  <p className="absolute  top-1 right-1 rounded-full px-2 bg-grassIntense">
                    {product.likes.length}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 30"
                    strokeWidth={2}
                    stroke="#CEFC85"
                    className="w-1/6 h-1/6  absolute  top-2 right-6 hover:stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
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
  );
};
