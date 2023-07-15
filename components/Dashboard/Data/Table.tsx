import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="w-full bg-secondary">
      {/* Table Head  */}
      <div className="w-full flex text-gray-500 text-xs justify-between px-20 py-3 border-b border-tertiary">
        <div>Advertiser</div>
        <div>Price</div>
        <div>Available</div>
        <div>Payment</div>
        <div>Trade</div>
      </div>

      {/* Table Body  */}

      {/* Table Data Row  */}
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

export default Table;
