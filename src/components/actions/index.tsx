import cardOne from "../../assets/design1.png";
import cardTwo from "../../assets/design2.png";
import cardThree from "../../assets/design3.png";
import { Container } from "../container";

type DSTechActionCardProps = {
  title: string;
  body: string;
  url: string;
};

const DSTechActionCard = ({ body, title, url }: DSTechActionCardProps) => {
  return (
    <div className="shadow-[0_0_20px_0_#EAE5EE] md:w-[31.5%] p-6 h-[21rem]  rounded-2xl flex flex-col items-center justify-center cursor-pointer">
      <div className="mb-4">
        <img src={url} alt={title} className="h-20" />
      </div>
      <div className="text-center">
        <h4 className="text-[#12B98E] text-2xl font-semibold mb-3">{title}</h4>
        <p className="leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

const CARDS_DATA = [
  {
    id: 1,
    title: "Creative Design",
    body: "we specialize in creating visually stunning designs that not only capture the attention of your customers, but also convey your brand message effectively.",
    url: cardOne,
  },
  {
    id: 2,
    title: "Super Ideas",
    body: "Whether you need a new marketing strategy, a unique website feature, or any other out-of-the-box solution, we're here to help.",
    url: cardTwo,
  },
  {
    id: 3,
    title: "Smart Planning",
    body: "Whether you're looking to launch a new product, revamp your website, or create a marketing campaign, we're here to help.",
    url: cardThree,
  },
];

export const DSTechActions = () => {
  return (
    <Container>
      <div className="flex justify-between flex-col gap-y-8 md:flex-row ">
        {CARDS_DATA.map((item) => (
          <DSTechActionCard {...item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};
