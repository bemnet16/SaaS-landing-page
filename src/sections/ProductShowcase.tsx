import Image from "next/image";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <h2 className="tag">Boost your productivity</h2>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn you ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product img" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid img"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
