import { BrandedProducts } from "../Components/BrandedProducts";
import { Swipers } from "../Components/Swiper/Swiper";
import { MainCategory } from "../Components/MainCategory";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category";

export const Home = () => {
  return (
    <>
      {/* Lists */}

      <div>
        <Link to="/">
          {/* HeroSection */}
          <div className="  flex justify-center h-[300px] md:h-[550px] lg:max-h-[600px]">
            <Swipers />
          </div>

          {/* Category */}
          <Category />

          {/* Branded Products */}
          <BrandedProducts />

          {/* HeroSection 2 */}

          <MainCategory />
        </Link>
      </div>
    </>
  );
};
