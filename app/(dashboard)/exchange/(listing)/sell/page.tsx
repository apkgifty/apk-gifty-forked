import Product from "@/components/Product/Product";

const products = [
  {
    title: "Amazon Gift Card",
    price: "399.00",
    category: "Amazon product",
    imageUrl: "/images/amazon.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Walmart Gift Card",
    price: "399.00",
    category: "Walmart product",
    imageUrl: "/images/walmart.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "ITunes Gift Card",
    price: "399.00",
    category: "Apple product",
    imageUrl: "/images/image 15.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Flipkart Gift Card",
    price: "399.00",
    category: "Flipkart product",
    imageUrl: "/images/Flipkart.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Vanilla Gift Card",
    price: "399.00",
    category: "Vanilla product",
    imageUrl: "/images/vanilla.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Walmart Gift Card",
    price: "399.00",
    category: "Walmart product",
    imageUrl: "/images/walmart.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "ITunes Gift Card",
    price: "399.00",
    category: "Apple product",
    imageUrl: "/images/image 15.png",
    iconUrl: "/apple.svg",
  },
  {
    title: "Amazon Gift Card",
    price: "399.00",
    category: "Amazon product",
    imageUrl: "/images/amazon.png",
    iconUrl: "/apple.svg",
  },
];

const SellPage = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-12 gap-y-12 justify-center mx-auto mt-12 xl:max-w-[1700px]">
      {products.map((product) => (
        <Product
          key={product.imageUrl}
          title={product.title}
          price={product.price}
          category={product.category}
          imageUrl={product.imageUrl}
          iconUrl={product.iconUrl}
        />
      ))}
    </div>
  );
};

export default SellPage;
