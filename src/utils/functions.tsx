export const totalPrice = (count: number, price: number, discount: number) => {
  return count * price * (1 - discount / 100);
};


