import React, { useEffect, useState } from "react";
export default function AllTabs() {
  const [brands, setBrands] = useState([]);
  const fetchData = async () => {
    const res = await fetch("partnerData.json");
    const data = await res.json();
    setBrands(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      data-aos="fade-down-right"
      className="mx-auto container my-10 sm:my-12 md:my-20 lg:my-24  p-3 rounded"
    >
      <h1 className="text-xl mb-5 sm:mb-10 bg-gray-100 p-2 rounded-md">
        OUR PARTNERS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white shadow-sm p-2 border border-gray-100 rounded-md py-3 hover:scale-105  transition hover:shadow-md duration-300"
          >
            <img
              src={brand.brand_logo}
              alt={`${brand.brand_name} logo`}
              className="w-full pb-5 md:h-20 lg:h-26 rounded-sm object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
