import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div className="m-4">
      <Tabs defaultValue="vision" className="w-full mx-auto">
        <TabsList className="w-full">
          <TabsTrigger
            value="vision"
            className="flex-1 text-center hover:cursor-pointer"
          >
            Our Vision
          </TabsTrigger>
          <TabsTrigger
            value="mission"
            className="flex-1 text-center hover:cursor-pointer"
          >
            Our Mission
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="flex-1 text-center hover:cursor-pointer"
          >
            About us
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vision">
          To create a sustainable future where waste is transformed into
          valuable resources, fostering a circular economy that benefits both
          people and the planet.
        </TabsContent>
        <TabsContent value="mission">
          We aim to create a special place where we empower communities, raise
          public awareness and give trash or second-hand objects a new purpose.
        </TabsContent>
        <TabsContent value="about">
          Transforming waste into resources tackles environmental issues and
          creates economic opportunities. A comprehensive approach includes a
          marketplace for upcycled products, an educational blog, and a guide
          for crafting handmade items from waste. The marketplace fosters a
          circular economy by enabling trade in recycled goods. The blog shares
          success stories, DIY tutorials, and expert insights to promote
          sustainability. The crafting guide inspires creativity, encouraging
          people to repurpose materials. Combined with planning, public
          engagement, and innovation, this initiative drives environmental
          impact and unlocks the economic potential of waste transformation.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
