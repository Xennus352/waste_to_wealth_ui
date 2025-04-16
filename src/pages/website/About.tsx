import { TabsBtn, TabsContent, TabsProvider } from "@/components/tab";

const About = () => {
  return (
    <div>
     

      <TabsProvider defaultValue={"vision"} wobbly={true}>
        <div className="flex justify-evenly">
          <div className="flex items-center w-fit dark:bg-[#1a1c20] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn value="vision">
              <span className="relative z-[2] text-black font-bold tracking-widest uppercase">
                Our Vision
              </span>
            </TabsBtn>
            <TabsBtn value="mission">
              <span className="relative z-[2]  text-black font-bold tracking-widest uppercase">
               Our Mission
              </span>
            </TabsBtn>
            <TabsBtn value="about">
              <span className="relative  z-[2] text-black font-bold tracking-widest uppercase">
               About
              </span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="vision">
          <div className="p-2 border rounded-md m-3 lg:h-96 xl:h-96 min-h-72">
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3 border-sky-500 text-sky-500 font-semibold">
              sequa gGmbH
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              To create a sustainable future, we must reimagine waste as a
              valuable resource, fostering a circular economy that benefits both
              people and the planet. By designing products for durability,
              reuse, and recyclability, we can minimize waste and reduce our
              reliance on finite resources. Embracing innovative technologies
              and collaborative partnerships, we can transform discarded
              materials into new products, generating economic opportunities and
              reducing environmental impact. Education and community engagement
              are essential to drive behavioral change and support sustainable
              practices. Together, we can build a resilient, regenerative system
              where resources circulate continuously, ensuring a healthier, more
              prosperous future for generations to come.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="mission">
          <div className="p-2 border lg:h-96 xl:h-96 min-h-72  rounded-md m-3">
            {" "}
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3 border-sky-500 text-sky-500 font-semibold">
              Mission
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              To create a sustainable future, we must reimagine waste as a
              valuable resource, fostering a circular economy that benefits both
              people and the planet. By designing products for durability,
              reuse, and recyclability, we can minimize waste and reduce our
              reliance on finite resources. Embracing innovative technologies
              and collaborative partnerships, we can transform discarded
              materials into new products, generating economic opportunities and
              reducing environmental impact. Education and community engagement
              are essential to drive behavioral change and support sustainable
              practices. Together, we can build a resilient, regenerative system
              where resources circulate continuously, ensuring a healthier, more
              prosperous future for generations to come.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="about">
          <div className="p-2 border rounded-md m-3 lg:h-96 xl:h-96 min-h-72">
            {" "}
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3  border-sky-500 text-sky-500 font-semibold">
             about
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              Transforming waste into resources tackles environmental issues and
              creates economic opportunities. A comprehensive approach includes
              a marketplace for upcycled products, an educational blog, and a
              guide for crafting handmade items from waste. The marketplace
              fosters a circular economy by enabling trade in recycled goods.
              The blog shares success stories, DIY tutorials, and expert
              insights to promote sustainability. The crafting guide inspires
              creativity, encouraging people to repurpose materials. Combined
              with planning, public engagement, and innovation, this initiative
              drives environmental impact and unlocks the economic potential of
              waste transformation.
            </p>
          </div>
        </TabsContent>
      </TabsProvider>
    </div>
  );
};

export default About;
