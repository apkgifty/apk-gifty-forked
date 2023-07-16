import Image from "next/image";

interface Props {
  title: string;
  price: string;
  category: string;
  iconUrl: string;
  imageUrl: string;
}

const Product: React.FC<Props> = ({
  title,
  price,
  category,
  iconUrl,
  imageUrl,
}) => {
  return (
    <div className=" ">
      {/* <div
        className="w-[250px] h-[150px] bg-red-700 rounded-lg bg-cover bg-center"
        style={{ background: `url(${imageUrl})` }}
      ></div> */}
      <Image
        src={imageUrl}
        alt="apple card"
        width={250}
        height={0}
        // className="w-[250px] h-auto"
        // style={{ objectFit: "contain" }}
      />
      <div className="flex justify-between border-b border-gray-600 py-3">
        <p className="text-white text-sm">{title}</p>
        <p className="text-green-400 text-xs px-1 py-1 border-2 border-green-400 rounded-sm">
          ${price}
        </p>
      </div>
      <div className="py-2 flex gap-x-2">
        <img src={iconUrl} width={20} />
        <p className="text-xs text-white">{category}</p>
      </div>
    </div>
  );
};

export default Product;
