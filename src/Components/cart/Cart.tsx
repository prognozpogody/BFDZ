import { getCartSelector } from "../../Redux/slices/cartSlice";
import { getModalSelectorCart } from "../../Redux/slices/modalSlice";
import { getProductsInCart } from "../../api/productsApi";
import { useActions } from "../../hooks/useActions";
import { CardProducts } from "../../types/products.interface";
import { totalPrice } from "../../utils/functions";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Cart: FC = () => {
  const {
    changeModalCartState,
    removeToCart,
    clearCart,
    incrementProduct,
    dicrementProduct,
  } = useActions();
  const modalCartonOpen = useSelector(getModalSelectorCart);
  const productsInCart = useSelector(getCartSelector);

  const {
    data: products,
    isError,
    error,
  } = useQuery<CardProducts[], Error>({
    queryKey: ["getCartProducts", productsInCart],
    queryFn: async () => {
      return await getProductsInCart(productsInCart);
    },
  });

  let totalPriceOfAll = 0;
  products?.forEach(({ count, price, discount }) => {
    totalPriceOfAll += totalPrice(count, price, discount);
  });

  if (isError) return <p>Error happend: {error.message}</p>;

  return (
    <Transition.Root show={modalCartonOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={changeModalCartState}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Ваши товары
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => changeModalCartState(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {products?.length !== 0 ? (
                              products?.map((product: CardProducts) => (
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
                                          <a href={product._id}>
                                            {product.name}
                                          </a>
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
                                        <p className="">
                                          {totalPrice(
                                            product.count,
                                            product.price,
                                            product.discount
                                          )}
                                          р.
                                        </p>
                                        <button
                                          type="button"
                                          disabled={
                                            product.count === product.stock
                                          }
                                          className="w-10 h-10 font-medium rounded-md border border-transparent bg-primary"
                                          onClick={() =>
                                            incrementProduct(product._id)
                                          }
                                        >
                                          +
                                        </button>
                                      </div>

                                      <p className="mt-1 text-sm text-gray-500">
                                        В наличии {product.stock}шт.
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Вес {product.wight}
                                      </p>

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
                              ))
                            ) : (
                              <p className="pt-10 text-lg">
                                Ваша корзина пуста, милорд.
                              </p>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Итого</p>
                        <p>{totalPriceOfAll}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Оформить заказ
                      </p>
                      <div className="mt-6">
                        <a
                          href="!#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-indigo-700"
                        >
                          Заказ
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <button
                          type="button"
                          className="font-medium pl-2 text-black hover:text-indigo-500"
                          onClick={() => {
                            clearCart();
                          }}
                        >
                          Очистить корзину
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
