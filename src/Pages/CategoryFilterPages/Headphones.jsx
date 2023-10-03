import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadphonesAsync } from "../../Redux/CategoryFilter/FilterCategorySlice";
import { Products } from "../../Components/Products";
import { Link } from "react-router-dom";

export const Headphones = () => {
  const dispatch = useDispatch();
  const Headphones = useSelector(
    (state) => state.category.filterCategory.Headphones
  );

  useEffect(() => {
    dispatch(fetchHeadphonesAsync());
  }, [dispatch]);
  return (
    <>
      <div className="mx-auto flex flex-col max-w-[1280px]  items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
        <div>
          <h1 className=" text-4xl font-semibold font-sans py-4">Headphones</h1>
        </div>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12">
          {Headphones?.map((item) => (
            <Link to={`/productDetails/${item.id}`}>
              <Products key={item.id} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
