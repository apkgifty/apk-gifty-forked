import React from "react";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import RegionsSvg from "../UI/SvgIcons/RegionsSvg";
import DollarSvg from "../UI/SvgIcons/DollarSvg";
import AppLayout from "../Layout/AppLayout";

const Filterbar = () => {
  return (
    <div className="w-full px-12 py-6 bg-secondary text-white border-b border-tertiary ">
      <AppLayout>
        <div className="flex gap-x-4 justify-center">
          <FilterInput label="Amount" />
          <FilterSelect
            label="Fiat"
            options={["USD", "EURO", "POUNDS", "CAD", "GHS"]}
            icon={<DollarSvg />}
          />
          <FilterSelect
            label="Payment"
            options={["MTN Mobile Money", "Vodafone Cash", "Bank Transfer"]}
          />
          <FilterSelect
            label="Available Region(s)"
            options={[
              "All Regions",
              "China",
              "Nigeria",
              "Macedonia",
              "Turkey",
              "Ghana",
              "Ecuador",
            ]}
            icon={<RegionsSvg />}
          />
          <FilterInput label="Filter " />
        </div>
      </AppLayout>
    </div>
  );
};

export default Filterbar;
