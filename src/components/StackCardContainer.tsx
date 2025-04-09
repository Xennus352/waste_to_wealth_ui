import { ReactLenis } from "lenis/react";
import { JSX } from "react";
import Carousel from "./Carousel";
import Contact from "@/pages/website/Contact";

export default function StackCardContainer(): JSX.Element {
  return (
    <ReactLenis root>
      <main>
        <article>
          {/* image  */}
          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <Carousel />
          </section>
          {/* Feedback */}
          <section className="bg-gray-300 text-black grid pt-[10%] h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="z-10">
              <Contact />
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
