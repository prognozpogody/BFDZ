import { getProductsInCart } from "../../api/productsApi";
import { useActions } from "../../hooks/useActions";
import { getCartSelector } from "../../redux/slices/cartSlice";
import { getModalSelectorCart } from "../../redux/slices/modalSlice";
import { CardProducts } from "../../types/products.interface";
import { totalPriceOfAll } from "../../utils/functions";
import { ProductInCart } from "./ProductInCart";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Cart: FC = () => {
  const { changeModalCartState, clearCart } = useActions();
  const modalCartonOpen = useSelector(getModalSelectorCart);
  const productsInCart = useSelector(getCartSelector);

  const {
    data: products,
    isError,
    error,
  } = useQuery<CardProducts[], Error>({
    queryKey: ["getCartProducts", productsInCart.length],
    initialData: [],
    queryFn: async () => {
      return await getProductsInCart(productsInCart);
    },
  });

  const totalPrice = totalPriceOfAll(products, productsInCart);

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
                                <ProductInCart
                                  key={product._id}
                                  product={product}
                                />
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
                        <p>{totalPrice}</p>
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
