import React from "react";

interface Props {
  status: any;
  openDialog: any;
}

const CancelButton: React.FC<Props> = ({ status, openDialog }) => {
  if (status === "") {
    return null;
  }
  return (
    <>
      {Number(status) === -1 ? null : Number(status) === 2 ? null : (
        <button
          className="w-full text-sm px-4 py-2 lg:w-auto"
          onClick={() => openDialog(true)}
        >
          Cancel Transfer
        </button>
      )}
    </>
  );
};

export default CancelButton;
