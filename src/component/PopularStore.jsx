import React, { useEffect, useState } from "react";
export default function TopStore() {
  const [brands, setBrands] = useState([]);
  const fetchData = async () => {
    const res = await fetch("popularStoresData.json");
    const data = await res.json();
    setBrands(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="mx-auto px-3 my-10 sm:my-12 md:my-20 lg:my-24 container"
    >
      <h1 className="text-xl mb-5 sm:mb-10 bg-gray-100 p-2 rounded-md">
        Popular Stores
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white px-3 shadow-sm p-2 border border-gray-100 rounded-lg py-3 hover:scale-105  transition duration-300 hover:shadow-md "
          >
            <img
              src={brand.brand_logo}
              alt={`${brand.brand_name} logo`}
              className="w-full border-b border-gray-300 pb-5 md:h-20 lg:h-26 rounded-sm object-contain mb-4"
            />
            <div className="flex justify-between items-end">
              <h2 className="text-xl  font-semibold  mb-2">
                {brand.brand_name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
