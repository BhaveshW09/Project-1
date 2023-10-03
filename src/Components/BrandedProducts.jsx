import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchTrendingProductsAsync } from "../Redux/Products/ProductSlice";

export const BrandedProducts = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.products.category.trending);
  console.log("popular", BrandedProducts);

  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(fetchTrendingProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto grid w-full max-w-[1280px] mt-32">
        <h1 className="font-bold text-4xl my-10 text-center">
          Most Popular Products
        </h1>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12">
          {trending.map((item) => (
            <Link to={`/productDetails/${item.id}`}>
              <div
                key={item.id}
                className="  flex flex-col gap-6 bg-white  p-4 shadow-md shadow-gray-400 hover:scale-105 transition-all ease-in-out 1s w-[270px] m-auto "
              >
                <img
                  src={item.thumbnail}
                  alt="Laptop"
                  className=" bg-white w-auto m-auto rounded-md md:aspect-auto h-[150px] md:h-[300px] lg:h-[170px]"
                />
                <div className="p-4 flex flex-col gap-1">
                  <h1 className="inline-flex items-center text-base font-medium">
                    {item.title.slice(0, 15) + "..."}
                  </h1>
                  <div className=" flex gap-2">
                    <p>
                      Rs.<strike>{item.price}</strike>
                    </p>
                    <p>{item.price}</p>
                  </div>

                  <button
                    type="button"
                    className="mt-2  bg-black px-2 py-3 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
