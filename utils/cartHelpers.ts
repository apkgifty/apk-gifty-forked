import axios from "axios";

const updateCart = async (productId: string, quantity: number) => {
  try {
    const config = {
      method: "POST",
      url: `/api/cart`,
      data: {
        products: [{ product_id: productId, product_quantity: quantity }],
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const removeCartItem = async (productId: string) => {
  try {
    const config = {
      method: "DELETE",
      url: `/api/cart?productId=${productId}`,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const checkoutCart = async () => {
  try {
    const checkoutConfig = {
      method: "POST",
      url: `/api/checkout-cart`,
    };

    const checkoutResponse = await axios(checkoutConfig);

    // Only fetch cart after transaction is created
    if (checkoutResponse?.data?.data?.id) {
      const getCartConfig = {
        method: "GET",
        url: `/api/cart`,
      };
      const getCartResponse = await axios(getCartConfig);
      return { checkoutResponse, getCartResponse };
    }

    return { checkoutResponse };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export { updateCart, removeCartItem, checkoutCart };
