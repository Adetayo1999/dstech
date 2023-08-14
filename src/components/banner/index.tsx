import bannerImage from "../../assets/banner.jpg";
import { Container } from "../container";

export const Banner = () => {
  return (
    <Container>
      <section className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row justify-between  items-center ">
        <div className="flex-[0.45] flex-col flex gap-y-6 md:gap-y-8">
          <h1 className="text-[#1A191C] font-semibold text-5xl md:text-[3.625rem] leading-[1.15]">
            We Design, Build Brands & Digital Projects
          </h1>
          <p className="md:text-lg">
            DS Tech is a leading web design and development company, dedicated
            to providing businesses of all sizes with high-quality, custom-built
            websites that help them succeed online.
            <br />
            <br />
            Our team of experienced designers, developers, and…
          </p>
          <div className="">
            <button className="text-[#39353D] rounded-full px-8 py-3 font-medium bg-[#12B98E]">
              Read More
            </button>
          </div>
        </div>
        <div className="flex-[0.5]">
          <img
            src={bannerImage}
            alt="Banner"
            className="rounded-full rounded-tr-none"
          />
        </div>
      </section>
    </Container>
  );
};
