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
      url: `/api/cart`,
      data: {
        productId: productId,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { updateCart, removeCartItem };
