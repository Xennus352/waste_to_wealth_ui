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
          To create a sustainable future, we must reimagine waste as a valuable
          resource, fostering a circular economy that benefits both people and
          the planet. By designing products for durability, reuse, and
          recyclability, we can minimize waste and reduce our reliance on finite
          resources. Embracing innovative technologies and collaborative
          partnerships, we can transform discarded materials into new products,
          generating economic opportunities and reducing environmental impact.
          Education and community engagement are essential to drive behavioral
          change and support sustainable practices. Together, we can build a
          resilient, regenerative system where resources circulate continuously,
          ensuring a healthier, more prosperous future for generations to come.
        </TabsContent>
        <TabsContent value="mission">
          We aim to create a unique space where communities are empowered to
          take action, public awareness about sustainability is elevated, and
          discarded or second-hand items are given new life. By fostering
          collaboration, providing educational opportunities, and encouraging
          creative reuse, we transform waste into valuable resources. This
          approach not only reduces environmental impact but also strengthens
          community bonds and inspires a culture of responsibility and
          innovation. Through hands-on workshops, awareness campaigns, and
          accessible recycling initiatives, we enable individuals to actively
          participate in building a more sustainable and resourceful future for
          everyone.
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
