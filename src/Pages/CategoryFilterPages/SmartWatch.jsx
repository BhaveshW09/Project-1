import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmartWatchAsync } from "../../Redux/CategoryFilter/FilterCategorySlice";
import { Link } from "react-router-dom";
import { Products } from "../../Components/Products";

export const SmartWatch = () => {
  const dispatch = useDispatch();
  const SmartWatch = useSelector(
    (state) => state.category.filterCategory.SmartWatch
  );

  useEffect(() => {
    dispatch(fetchSmartWatchAsync());
  }, [dispatch]);
  return (
    <>
      <div className="mx-auto flex flex-col max-w-[1280px]  items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
        <div>
          <h1 className=" text-4xl font-semibold font-sans py-4">
            Smart Watches
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12">
          {SmartWatch?.map((item) => (
            <Link to={`/productDetails/${item.id}`}>
              <Products key={item.id} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
