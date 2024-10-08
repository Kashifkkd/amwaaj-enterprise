import Image from "next/image";
import { Container } from "./Container";
import MojoReoGlass from "../../public/img/products/mojo-reo-glass.png";
import CocaColaPlastic from "../../public/img/products/coca-cola-plastic.png";
import BigColaProduct from "../../public/img/products/big-cola-product.png";
import CampaProduct from "../../public/img/products/campa-product.png";

const TopProducts = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white">
          Our top selling <span className="text-indigo-600">Products</span>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <Image
            src={MojoReoGlass}
            width="300"
            height="300"
            className={"object-contain"}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={CocaColaPlastic}
            width="350"
            height="300"
            className={"object-contain"}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={BigColaProduct}
            width="140"
            height="80"
            className={"object-contain"}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
           <Image
            src={CampaProduct}
            width="340"
            height="340"
            className={"object-contain"}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default TopProducts;
