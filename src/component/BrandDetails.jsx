import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function BrandDetails() {
  const location = useLocation();
  const notify = () => toast.success("Successfully Copied");
  const brandId = location.pathname.split("/")[2]
  const [brands, setBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch("/couponData.json");
    const data = await res.json();
    setBrands(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const brandData = brands?.find((brand) => brand?._id === brandId);

  return (
    <div>
      <div className="container mx-auto p-4 rounded-md my-20  border border-gray-200 bg-gray-100/30">
        <div className="text-center mb-6">
          <img
            src={brandData?.brand_logo}
            alt={brandData?.brand_name}
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <h1 className="text-3xl font-bold">{brandData?.brand_name}</h1>
          <div className="flex items-center justify-center mt-2">
            <span className="text-lg font-medium">Rating:</span>
            <span className="text-yellow-500 ml-2">★</span>
            <span className="text-md font-semibold ml-1">
              {brandData?.rating}
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Available Coupons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            {brandData?.coupons.map((coupon, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 bg-white hover:scale-105 transition duration-300 "
              >
                <h3 className="text-lg font-bold mb-2">{coupon.coupon_code}</h3>
                <p className="text-gray-600">{coupon.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Expiry:</span>{" "}
                  {coupon.expiry_date}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Condition:</span>{" "}
                  {coupon.condition}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <CopyToClipboard
                    text={coupon?.coupon_code}
                    onCopy={() => {
                      setCopied(true);
                      setCopiedCode(coupon.coupon_code);
                      notify()
                    }}
                  >
                    <button className="btn btn-outline">
                      {copied && copiedCode === coupon.coupon_code
                        ? "Copied!"
                        : "Copy Code"}
                    </button>
                  </CopyToClipboard>

                  <Link
                  onClick={()=> {
                    console.log(coupon?.shop_Link)
                  }}
                    target="_blank"
                    to={coupon?.shop_Link}
                    className="btn btn-primary"
                  >
                 
                    Use Now
                  </Link>
                 {
                  console.log(coupon?.shop_Link)
                 }
                </div>
              </div>
            ))}
          </div>
   
      </div>
    </div>
  );
}
