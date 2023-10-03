import { BrandedProducts } from "../Components/BrandedProducts";
import { Swipers } from "../Components/Swiper/Swiper";
import { MainCategory } from "../Components/MainCategory";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category";

export const Home = () => {
  return (
    <>
      {/* Lists */}
      <Link to="/home">
        <div>
          {/* HeroSection */}
          <div className="flex justify-center w-full max-h-[220px] md:max-h-[350px] lg:max-h-[600px]">
            <Swipers />
          </div>

          {/* Category */}
          <Category />

          {/* Branded Products */}
          <BrandedProducts />

          {/* HeroSection 2 */}

          <MainCategory />
        </div>
      </Link>
    </>
  );
};
