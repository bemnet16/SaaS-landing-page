import ArrowIcon from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <Image
            src={StarImage}
            alt="Star img"
            width={360}
            className="absolute -left-[350px] - top-[137px]"
          />

          <Image
            src={SpringImage}
            alt="Star img"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />

          <div className="flex justify-center items-center gap-6 mt-10">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text">
              Learn more
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
