import { useActions } from "../../hooks/useActions";
import React from "react";

interface CardListProps {
  products: {
    name: string;
    _id: string;
    description: string;
    pictures: string;
  }[];
}

export const CardList = ({ products }: CardListProps) => {
  const { addToCart } = useActions();

  const handleAddToCart = (id: string) => {
    addToCart({ id, isAdded: false, count: 1 });
  };

  return (
    <div className=" flex flex-wrap justify-center ">
      {products &&
        products.map((product) => {
          return (
            <div className="flex justify-center p-2 ">
              <div className="block max-w-sm rounded-lg shadow-lg bg-grassIntense/70">
                <a href="#!">
                  <img className="p-3" src={product.pictures} alt={product.name} />
                </a>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {product.name}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {product.description}
                  </p>
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={() => handleAddToCart(product._id)}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
