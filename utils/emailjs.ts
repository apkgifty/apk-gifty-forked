import emailjs from "@emailjs/browser";

const options = {
  publicKey: "BsC6-jVxcNvsZrtBU",
  // Do not allow headless browsers
  blockHeadless: true,
};

emailjs.init(options);

const sendAdminEmail = (orderDetails: any) => {
  const userInfo = localStorage.getItem("userInfo");
  const name = JSON.parse(userInfo as string).firstname;

  const templateParams = {
    from_name: name,
    message: `Order details: ${orderDetails?.quantity} x ${
      orderDetails?.name
    }. \nOrder ID: ${orderDetails?.id}\n Order total: ${
      orderDetails?.product.currency.symbol + orderDetails?.price
    }`,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      templateParams
    )
    .then((response: any) => {
      console.log("SUCCESS!", response.status, response.text);
    }),
    (error: any) => {
      console.log("FAILED...", error);
    };
};

export { sendAdminEmail };
