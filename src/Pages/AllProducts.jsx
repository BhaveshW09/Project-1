import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../Redux/Products/ProductSlice";
import { Link } from "react-router-dom";
import { Products } from "../Components/Products";
import { Spinner } from "../Components/Spinner";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const [spinners, setSpinner] = useState(true);

  useEffect(() => {
    setSpinner(true);
    dispatch(fetchAllProductsAsync());
    setSpinner(false);
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto flex flex-col max-w-[1280px]  items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
        <div>
          <h1 className=" text-4xl font-semibold font-sans py-4">
            All Products
          </h1>
        </div>

        <div>
          {spinners ? (
            <Spinner />
          ) : (
            <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12">
              {product.map((item) => (
                <Link to={`/productDetails/${item.id}`}>
                  <Products key={item.id} {...item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
