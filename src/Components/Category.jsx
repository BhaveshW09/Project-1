import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
export const Category = () => {
  return (
    <>
      <div className=" flex flex-col lg:flex  max-w-[500px] lg:max-w-[1280px]  cursor-default justify-between m-auto my-16 ">
        <h1 className=" font-bold text-4xl my-10 text-center">Categories</h1>
        <div className="  m-auto gap-2 lg:gap-10 flex flex-col lg:flex-row justify-between  ">
          <div className="   h-[400px] w-[360px] lg:h-[600px] lg:w-[500px]   cursor-pointer flex  gap-2 group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            {/* first Image */}
            <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                className="h-[400px] w-[360px] lg:h-[600px] lg:w-[500px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-801.jpg?w=996&t=st=1696207754~exp=1696208354~hmac=4248ef4dbbdf31d6bae7f3a4f097160e1c5127b1e26af57f8e5dc5bc5dcef43c"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 gap-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif mt-12 text-2xl lg:text-4xl font-bold text-white">
                  Smart Phones
                </h1>
                <Link to="/smartphones">
                  <button className="rounded-full text-base lg:text-xl bg-black py-2 px-5 font-com  capitalize text-white shadow shadow-black/60">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" h-[400px] w-[360px] lg:h-[600px] lg:w-[500px]  flex flex-col justify-between gap-2">
            <div className="  h-[400px] w-[360px] lg:h-[290px] lg:w-[500px] border-2  cursor-pointer flex flex-col items-center gap-2">
              {/* Secound Image */}
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <img
                  className="h-[200px] w-[360px] lg:h-[290px] lg:w-[500px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?size=626&ext=jpg&ga=GA1.2.77913099.1694320724&semt=sph"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 gap-3 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif mt-12 text-2xl lg:text-4xl font-bold text-white">
                    Laptops
                  </h1>
                  <Link to="/laptops">
                    <button className="rounded-full text-base lg:text-xl bg-black py-2 px-5 font-com  capitalize text-white shadow shadow-black/60">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="  h-[200px] w-[175px] lg:h-[290px] lg:w-[240px]  cursor-pointer flex items-center gap-2">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <img
                    className="h-[200px] w-[175px] lg:h-[290px] lg:w-[240px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://img.freepik.com/free-photo/red-gold-headphones-digital-device_53876-97303.jpg?size=626&ext=jpg&ga=GA1.1.77913099.1694320724&semt=sph"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 gap-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif mt-12 text-base lg:text-2xl font-bold text-white">
                      Headphones
                    </h1>
                    <Link to="/headphones">
                      <button className="rounded-full text-sm lg:text-xl bg-black py-1 px-2 font-com  capitalize text-white shadow shadow-black/60">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="  bg-emerald-600 h-[200px] w-[175px] lg:h-[290px] lg:w-[240px]  cursor-pointer flex items-center gap-2">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <img
                    className="h-[200px] w-[175px] lg:h-[290px] lg:w-[240px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?size=626&ext=jpg&ga=GA1.2.77913099.1694320724&semt=ais"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 gap-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif mt-12 text-base lg:text-2xl font-bold text-white">
                      Smart Watch
                    </h1>
                    <Link to="/smartwatch">
                      <button className="rounded-full text-sm lg:text-xl bg-black py-1 px-2 font-com  capitalize text-white shadow shadow-black/60">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
