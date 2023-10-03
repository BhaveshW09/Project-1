import React from "react";

export const MagaSale = () => {
  return (
    <>
      <div className=" mx-auto flex-col md:max-lg:flex-row max-w-[1280px] mt-10 items-center space-y-4 px-2 py-10  md:gap-6 md:space-y-0">
        <div className=" flex justify-center w-72 m-auto mb-6 ">
          <h1 className="font-bold text-3xl px-3 py-2  border-b-2 border-black text-center w-full ">
            Maga Sale
          </h1>
        </div>

        {/* Main Images */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 justify-center items-center ">
          <div className=" h-60 w-72   lg:h-80 lg:w-96 ">
            <img
              className=" h-60 w-72   lg:h-80 lg:w-96"
              src="https://img.freepik.com/free-vector/lovely-cyber-monday-composition-with-flat-design_23-2147950950.jpg?size=626&ext=jpg&ga=GA1.2.77913099.1694320724&semt=ais"
              alt=""
            />
          </div>
          <div className="  h-60 w-72   lg:h-80 lg:w-96 ">
            <img
              className=" h-60 w-72   lg:h-80 lg:w-96"
              src="https://img.freepik.com/free-vector/sale-instagram-stories-template-collection_23-2148205720.jpg?size=626&ext=jpg&ga=GA1.2.77913099.1694320724&semt=ais"
              alt=""
            />
          </div>
          <div className=" h-60 w-72    lg:h-80 lg:w-96 ">
            <img
              className=" h-60 w-72  lg:h-80 lg:w-96"
              src="https://img.freepik.com/free-vector/flat-design-sale-label_23-2147714379.jpg?size=626&ext=jpg&ga=GA1.1.77913099.1694320724&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
