interface Props {
  label: string;
}

const FilterInput: React.FC<Props> = ({ label }) => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-light">{label}</label>
      <div className="w-full px-3 py-2 bg-tertiary flex gap-x-2 rounded-sm ">
        <input
          type="number"
          placeholder="Enter Amount"
          className=" w-full bg-transparent text-xs"
        />
        <span className="text-gray-600 text-xs">USD</span>
      </div>
    </div>
  );
};

export default FilterInput;
