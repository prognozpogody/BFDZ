import { CardProducts, CardType } from "../types/products.interface";


export const totalPrice = (count: number, price: number, discount: number) => {
  return count * price * (1 - discount / 100);
};

export const totalPriceOfAll = (
  products: CardProducts[],
  productsInCart: CardType[]
) => {
  let count = 0;
  products.forEach(({ _id, price, discount }) => {
    const productFromCart = productsInCart.find((el) => el.id === _id) || {
      count: 0,
    };
    count += totalPrice(productFromCart.count, price, discount);
  });
  return count;
};