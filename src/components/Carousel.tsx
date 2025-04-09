import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/context/Progress-Carousel";
import logo1 from "../assets/homepage/1.jpg";
import logo2 from "../assets/homepage/2.jpg";
import logo3 from "../assets/homepage/3.jpg";
import logo4 from "../assets/homepage/4.jpg";

const items = [
  {
    img: logo1,
    title: "Bridge",
    desc: "A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.",
    sliderName: "bridge",
  },
  {
    img: logo2,
    title: "Mountains View",
    desc: "A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.",
    sliderName: "mountains",
  },
  {
    img: logo3,
    title: "Autumn",
    desc: "A picturesque path winding through a dense forest adorned with vibrant autumn foliage.",
    sliderName: "autumn",
  },
  {
    img: logo4,
    title: "Foggy",
    sliderName: "foggy",
    desc: "A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ",
  },
];
export default function Carousel() {
  return (
    <>
      <ProgressSlider vertical={false} activeSlider="bridge">
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className="rounded-xl 2xl:h-[500px] h-[350px] object-cover"
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className="absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md">
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className="text-left  p-3 border-r"
              progressBarClass="dark:bg-black bg-white h-full"
            >
              <h2 className="relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm font-medium  line-clamp-2">{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </>
  );
}
