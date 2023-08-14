import serviceOne from "../../assets/service1.svg";
import serviceTwo from "../../assets/service2.svg";
import serviceThree from "../../assets/service3.svg";
import serviceFour from "../../assets/service4.svg";
import { Container } from "../container";

type ServiceCardProps = {
  title: string;
  image: string;
  isActive?: boolean;
};

export const ServiceCard = ({ title, image, isActive }: ServiceCardProps) => {
  return (
    <div
      className={`${
        isActive
          ? "bg-[#12B98E] shadow-[0px_0px_20px_0px_rgba(18.000000000000004,_185.00000000000003,_141.99999999999997,_0.79)] text-white"
          : "shadow-[0px_0px_20px_0px_#EAE5EE] bg-white text-[#12B98E]"
      }  w-full h-[12rem]  rounded-2xl py-6 px-8 flex justify-center font-semibold flex-col gap-y-6 cursor-pointer`}
    >
      <div className="">
        <img src={image} alt={title} className="h-16" />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

const SERVICES_DATA = [
  {
    id: 1,
    title: "Branding",
    image: serviceOne,
  },
  {
    id: 2,
    title: "App Development",
    image: serviceTwo,
    isActive: true,
  },
  {
    id: 3,
    title: "Web Design",
    image: serviceThree,
  },
  {
    id: 4,
    title: "Graphic Design",
    image: serviceFour,
  },
];

export const Services = () => {
  return (
    <section className=" bg-[#F6F7FC] py-28">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between">
          <div className="flex-[0.65] flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between">
            <div className="flex-[0.48] flex gap-y-8 flex-col">
              {SERVICES_DATA.slice(0, 2).map((item) => (
                <ServiceCard {...item} key={item.id} />
              ))}
            </div>
            <div className="flex-[0.48] md:h-[30rem] flex flex-col justify-end gap-y-8">
              {SERVICES_DATA.slice(2, SERVICES_DATA.length).map((item) => (
                <ServiceCard {...item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="flex-[0.3] flex-shrink-0 flex flex-col gap-y-8">
            <h2 className="text-[2.5rem] text-[#1A191C] font-semibold leading-[2.75rem]  ">
              Empowering Your Online Presence with Expert Services
            </h2>
            <p className="text-lg">
              We&apos;re here to help you bring your business to life online
              with everything from beautiful site design and development to
              effective digital marketing solutions. Our skilled staff works
              arduously to develop specialized solutions catered to your
              particular requirements, making sure that your brand stands out
              and achieves its full potential in the digital world. Read More
            </p>
            <div className="">
              <button className="text-[#39353D] rounded-full px-8 py-3 font-medium bg-[#12B98E]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
