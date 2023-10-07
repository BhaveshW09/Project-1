import { PopularProducts } from "../Components/PopularProducts";
import { Swipers } from "../Components/Swiper/Swiper";
import { MagaSale } from "../Components/MagaSale";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category Products/Category";

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
          <PopularProducts />

          {/* HeroSection 2 */}

          <MagaSale />
        </Link>
      </div>
    </>
  );
};
