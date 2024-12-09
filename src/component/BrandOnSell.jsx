import React, { useEffect, useState } from "react";
import Logo from "../assets/Img/EML-logo.png";
import { useNavigate } from "react-router-dom";
export default function BrandOnSell() {
  const [saleOnBrands, setSaleOnBrands] = useState([]);
  const fetchData = async () => {
    const res = await fetch("couponData.json");
    const data = await res.json();
    const saleOn = data.filter((brand) => brand.isSaleOn);
    setSaleOnBrands(saleOn);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleCouponClick = (brand) => {
    navigate(`/brand/${brand?._id}`);
  };

  return (
    <div
      data-aos="fade-up-right"
      data-aos-offset="200"
      className="p-2 md:p-6 my-10 sm:my-12 md:my-20 lg:my-24 mx-auto container"
    >
      <h1 className="text-xl mb-5 sm:mb-10 bg-gray-100 p-2 rounded-md">Brands on Sale </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {saleOnBrands.map((brand) => (
          <div
            onClick={() => handleCouponClick(brand)}
            key={brand._id}
            className="bg-white px-3 shadow-md p-2 border border-gray-100 rounded-lg py-3 hover:scale-105  transition duration-300"
          >
            <img
              src={brand.brand_logo}
              alt={`${brand.brand_name} logo`}
              className="w-full border-b border-gray-300 pb-5 md:h-32 lg:h-44 rounded-sm object-contain mb-4"
            />
            <div className="-top-10 left-2 bg-white text-black relative py-3 border border-gray-200 rounded-md w-24">
              <img
                src={brand.brand_logo}
                className="w-28 h-8 object-contain"
                alt=""
              />
            </div>
            <div className="flex justify-between items-end">
              <div className="">
                <h2 className="text-xl  font-semibold  mb-2">
                  {brand.brand_name}
                </h2>
                <p className="text-gray-800 font-medium mb-2">
                  Category : {brand.category}
                </p>
                <p className="text-gray-700 font-medium">
                  Total Coupons: {brand.coupons.length}
                </p>
              </div>

              <button className="btn btn-outline">Show Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
