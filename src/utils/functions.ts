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

export const sortingProducts = (products: CardProducts[], sort: string) => {
  switch (sort) {
    case "priceSortUp":
      return [...products].sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });
    case "priceSortDown":
      return [...products].sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
    case "discountSortUp":
      return [...products].sort((a, b) => {
        if (a.discount > b.discount) return -1;
        if (a.discount < b.discount) return 1;
        return 0;
      });
    case "discountSortDown":
      return [...products].sort((a, b) => {
        if (a.discount > b.discount) return 1;
        if (a.discount < b.discount) return -1;
        return 0;
      });
    case "likeSortUp":
      return [...products].sort((a, b) => {
        if (a.likes.length > b.likes.length) return -1;
        if (a.likes.length < b.likes.length) return 0;
        return 0;
      });
    case "likeSortDown":
      return [...products].sort((a, b) => {
        if (a.likes.length > b.likes.length) return 1;
        if (a.likes.length < b.likes.length) return -1;
        return 0;
      });
    default:
      return products;
  }
};
