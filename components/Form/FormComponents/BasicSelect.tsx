"use client";

interface Props {
  options: any[];
  handleSelect: any;
}

const BasicSelect: React.FC<Props> = ({ options, handleSelect }) => {
  return (
    <div>
      <label htmlFor="quantity" className="block mb-2  font-light text-white">
        Quantity
      </label>
      <select
        id="countries"
        onChange={(e) => {
          handleSelect(e);
        }}
        className="bg-[#23262F] border text-white text-center text-sm rounded-lg  block w-full p-2.5 "
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default BasicSelect;
