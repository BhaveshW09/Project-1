import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";

export const Products = (item) => {
  return (
    <div>
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12">
        <div
          key={item.id}
          className="  flex flex-col gap-6 bg-white pt-4 shadow-md shadow-gray-400 hover:scale-105 transition-all ease-in-out 1s w-[270px] m-auto "
        >
          <img
            src={item.thumbnail}
            alt="Laptop"
            className=" bg-white w-auto m-auto rounded-md md:aspect-auto h-[150px] md:h-[300px] lg:h-[170px]"
          />
          <div className="p-4 flex flex-col gap-3">
            <h1 className="inline-flex items-center  text-base font-semibold">
              {item.title.slice(0, 15)}
            </h1>
            <p className=" text-xs">{item.description.slice(0, 45) + "..."}</p>
            <div className=" flex justify-between gap-3 ">
              <div className=" flex gap-2 text-base items-center font-semibold">
                <p>
                  Rs.<strike>{item.price}</strike>
                </p>
                <p>{item.price}</p>
              </div>
              <div className=" flex items-center gap-2 px-2 py-1 justify-center rounded-xl bg-green-700">
                <p className=" text-white text-xs">{item.rating}</p>
                <FaStarHalfStroke className=" text-yellow-400" />
              </div>
            </div>

            <button
              type="button"
              className="mt-2  bg-black px-2 py-3 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
