import { TabsBtn, TabsContent, TabsProvider } from "@/components/tab";

const Information = () => {
  return (
    <div>
     
      <TabsProvider defaultValue={"sequa"} wobbly={true}>
        <div className="flex justify-evenly">
          <div className="flex items-center w-fit dark:bg-[#1a1c20] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn value="sequa">
              <span className="relative z-[2]  flex gap-1 text-black font-bold tracking-widest uppercase">
                sequa
                <span className="hidden md:block lg:block xl:block">gGmbH</span>
              </span>
            </TabsBtn>
            <TabsBtn value="thant">
              <span className="relative z-[2] flex gap-1 text-black font-bold tracking-widest uppercase">
                thant{" "}
                <span className="hidden md:block lg:block xl:block">
                  myanmar
                </span>
              </span>
            </TabsBtn>
            <TabsBtn value="CMHL">
              <span className="relative flex gap-1 z-[2] text-black font-bold tracking-widest uppercase">
                <span className="hidden md:block lg:block xl:block">
                  City Mart Holding Company Limited
                </span>{" "}
                (CMHL)
              </span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="sequa">
          <div className="p-2 border rounded-md m-3 lg:h-96 xl:h-96 min-h-72">
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3 border-sky-500 text-sky-500 font-semibold">
              sequa gGmbH
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              sequa gGmbH is the EU’s leading agency for strengthening business
              membership organisations. Its shareholders are Germany‘s top
              business membership organizations (DIHK, ZDH, BDA, BDI) and GIZ.
              sequa has managed around 1,000 projects in more than 100
              developing countries in the areas of business membership
              organization capacity building, vocational training, private
              sector promotion and social dialogue. In addition, sequa has
              designed and implemented more than 90 EU financed projects such as
              SMART Myanmar 1,2 and SMART Textile & Garments.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="thant">
          <div className="p-2 border lg:h-96 xl:h-96 min-h-72  rounded-md m-3">
            {" "}
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3 border-sky-500 text-sky-500 font-semibold">
              Thant Myanmar
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              Thant Myanmar is a Myanmar organisation born out of a movement to
              fight plastic pollution. It registered in February 2019 as a
              non-profit company continuing its campaigns and public
              awareness-raising but also doing contractual work around the topic
              of waste management, surveys and research, development of toolkits
              and guides for the private sector. Now our clients range from the
              World Bank to UN programs, NGOs and private sector industries
              developing waste reduction efforts in their specific industry.
              Community SWM is at the heart of our mission to reduce waste.
              Combine grass-roots initiatives with a structured method for
              sustained waste collection and community funding. Building on this
              basic structure and work on more challenging topics like plastic
              reduction, waste segregation and composting. Since October 2019
              Thant Myanmar set up these structures in the largest city of
              Myanmar, Yangon creating a better waste management system for over
              100.000 people.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="CMHL">
          <div className="p-2 border rounded-md m-3 lg:h-96 xl:h-96 min-h-72">
            {" "}
            <h2 className="border-s-2 space-x-1.5 uppercase m-2 text-2xl pl-3  border-sky-500 text-sky-500 font-semibold">
              City Mart Holding Company Limited (CMHL)
            </h2>
            <p className=" first-letter:uppercase indent-20 space-y-8 p-1.5 text-lg">
              City Mart Holding Company Limited (CMHL), Myanmar’s leading
              consumer business and retail chain, has engaged in plastic
              reduction messaging and campaigns with their consumers for several
              years. As an Associate Partner, CMHL will collaborate in tandem to
              promote Environmental Awareness & Plastic Reduction ‘Behavioral
              Switch’ to consumers in Myanmar. CMHL in partnership with Prevent
              Plastics Myanmar, will also develop trainings, procedures &
              methods towards a Sustainable Retail Chain.
            </p>
          </div>
        </TabsContent>
      </TabsProvider>
    </div>
  );
};

export default Information;
