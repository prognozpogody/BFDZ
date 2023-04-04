import { getAllProductByID } from "../api/productsApi";
import { useActions } from "../hooks/useActions";
import { getFavoritesSelector } from "../redux/slices/favoritesSlice";
import { CardProducts } from "../types/products.interface";
import { XMarkIcon, StarIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

const Rating = ({ count }: { count: number }) => {
  return (
    <div className="flex items-center">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon
            key={index}
            fill={index + 1 < count ? "red" : "black"}
            className={"h-5 w-5 flex-shrink-0"}
            aria-hidden="true"
          />
        ))}
    </div>
  );
};

export const Favorits = () => {
  const { addDelFavoritesProduct, addToCart } = useActions();
  const productsInFavorites = useSelector(getFavoritesSelector);
  const idFavorites = productsInFavorites.map((value) => value.id);

  const {
    data: products,
    isError,
    error,
  } = useQuery<CardProducts[], Error>({
    queryKey: ["getFavoritesProducts", idFavorites],
    queryFn: async () => {
      return await getAllProductByID(idFavorites);
    },
  });

  if (isError) return <p>Error happend: {error.message}</p>;

  return (
    <>
      {products?.length !== 0 ? (
        products?.map((product) => (
          <div
            key={product._id}
            className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => {
                addDelFavoritesProduct({ id: product._id });
              }}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
              <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img
                  src={product.pictures}
                  alt={product.description}
                  className="object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {product.name}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <p className="text-2xl text-gray-900">{product.price}</p>

                  {/* Reviews */}
                  <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      <Rating count={3} />
                      <p className="sr-only">
                        {product.likes.length} out of 5 stars
                      </p>

                      <a
                        href="/"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {/* {product.reviews} reviews */}
                      </a>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                  <h3 id="options-heading" className="sr-only">
                    Product options
                  </h3>
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={() => addToCart({ id: product._id })}
                  >
                    В корзину
                  </button>
                </section>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="ml-10 pt-10 text-lg">В избранном пусто, милорд.</p>
      )}
    </>
  );
};
