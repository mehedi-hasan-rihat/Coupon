import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function BrandsMarquee() {
  const [Brands, setBrands] = useState([]);

  const fetchData = async () => {
    const res = await fetch("couponData.json");
    const data = await res.json();
    setBrands(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-auto container my-5 sm:my-12">
      <h2 className="text-xl mb-5 sm:mb-10 bg-gray-100 p-2 rounded-md">
        Top Brands
      </h2>
      <div className="my-5 py-3 rounded-md border border-gray-100 transition duration-300">
        <Marquee pauseOnHover={true} speed={20}>
          {Brands?.map((brand) => (
            <Link key={brand._id} to={`/brand/${brand._id}`}>
              <img
                className="w-16 h-16 p-2 mr-20 rounded-full border border-gray-200"
                data-aos="fade-left"
                src={brand.brand_logo}
                alt="image not found"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
