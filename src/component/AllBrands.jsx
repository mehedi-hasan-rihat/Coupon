import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
export default function AllBrands() {
  const navigate = useNavigate();
  const handleCouponClick = (brand) => {
    navigate(`/brand/${brand?._id}`, { state: { id: brand?._id } });
  };

  // const brandsData = useLoaderData()
  // const [brands, setBrands] = useState(brandsData)
  // const [brands, setBrands] = useState([]);

  const {
    isPending,
    error,
    data: brands,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("couponData.json").then((data) => data.data),
  });

  // if (isPending) return <div className="min-h-screen bg-red-900"></div>;

  // if (error) return "An error has occurred: " + error.message;

  // useEffect(() => {
  //   fetch("couponData.json").then(res => res.json()).then(data => setBrands(data))
  // },[])

  // useEffect(() => {
  //   axios("couponData.json").then((data) => setBrands(data.data));
  // }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-xl mx-auto">
        <p className="text-center my-5 font-semibold text-2xl">
          Today's Top Coupons, Deals & Offers
        </p>
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full focus:outline-none"
        />
      </div>

      <div className="">
        <div className="container mx-auto p-4 max-w-7xl">
          {brands?.map((brand) => (
            <div
              key={brand?._id}
              className="border rounded-lg shadow-md p-4 mb-6 flex flex-col bg-white py-10 px-10"
            >
              <div className="flex justify-center">
                <img
                  src={brand?.brand_logo}
                  alt={brand?.brand_name}
                  className="w-24 h-24 mb-4 object-contain border border-gray-100 p-2 rounded-md "
                />
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold">{brand?.brand_name}</h2>
                <p className="text-gray-600 my-4">{brand?.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex mt-4 items-center my-2">
                  <span className="text-lg font-medium">Rating : </span>
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-md font-semibold">
                    {" "}
                    {brand?.rating}
                  </span>
                </div>

                {brand?.isSaleOn && (
                  <p className="text-red-500 font-bold mt-2 animate-bounce">
                    Sale is on!
                  </p>
                )}
              </div>
              <button
                onClick={() => handleCouponClick(brand)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-700"
              >
                View Coupons
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
