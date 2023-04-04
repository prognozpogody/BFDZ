import { deleteLike, getSearchProduct, setLike } from "../api/productsApi";
import { Spinner } from "../components/ui/spinner/Spinner";
import { useActions } from "../hooks/useActions";
import { getSearchSelector } from "../redux/slices/filterSlice";
import { getUserIdSelector } from "../redux/slices/userSlice";
import { CardProducts } from "../types/products.interface";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

export const Products = () => {
  const searchState = useSelector(getSearchSelector);
  const userID = useSelector(getUserIdSelector);

  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<any, Error>({
    queryKey: ["getSearch", searchState],
    queryFn: async () => {
      return await getSearchProduct(searchState);
    },
  });

  const {
    changeModalCardQuickviewsState,
    addProductQuickviews,
    addToCart,
    addDelFavoritesProduct,
  } = useActions();

  const handleLike = async (product: CardProducts) => {
    product.likes.includes(userID)
      ? await deleteLike(product._id)
      : await setLike(product._id);
    refetch();
  };

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error happend: {error.message}</p>;
  return (
    <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.data.map((product: CardProducts) => (
          <div key={product._id}>
            <div className="group">
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

                <button onClick={() => handleLike(product)}>
                  <p className="absolute  top-1 right-1 rounded-full px-2 bg-grassIntense fill-black">
                    {product.likes.length}
                  </p>
                  {product.likes.includes(userID) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 30"
                      fill="#CEFC85"
                      className="w-1/6 h-1/6  absolute top-2 right-6 hover:fill-primary"
                    >
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 30"
                      strokeWidth={2}
                      stroke="#CEFC85"
                      className="w-1/6 h-1/6  absolute top-2 right-6 hover:stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>

              <button
                type="button"
                className="rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={() => addToCart({ id: product._id })}
              >
                В корзину
              </button>

              <button
                type="button"
                className="rounded bg-primary ml-[20px] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={() => addDelFavoritesProduct({ id: product._id })}
              >
                В избранное
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
