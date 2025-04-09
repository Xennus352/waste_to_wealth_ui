import about from "../../assets/about.jpg";

const Information = () => {
  return (
    <div>
      {" "}
    
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-around">
        <div className="p-4  rounded-lg shadow-lg">
          <h2 className="text-2xl text-center m-2 font-semibold">
            This is a description about the title
          </h2>
          <p className="text-center mb-4">
            Our B2B waste management service is designed to help businesses
            reduce their environmental footprint while improving their bottom
            line. We provide waste audit and assessment services to identify
            areas where waste reduction and recycling efforts can be
            implemented. Our team of experts will work with your business to
            create a customized waste management plan tailored to your specific
            needs.
          </p>

          <p className="text-center mb-4">
            Our services include secure destruction and recycling of various
            materials, including paper, plastic, glass, and metal. We also
            provide confidential paper recycling services to ensure that
            sensitive information is securely disposed of. In addition, we offer
            on-demand waste collection services to businesses of all sizes. At
            our recycling business, we are committed to promoting sustainability
            and reducing waste.
          </p>

          <p className="text-center mb-4">
            Our team is trained to identify opportunities for waste reduction
            and implement solutions that can help businesses save money while
            reducing their environmental impact. By partnering with us for your
            B2B waste management needs, you can rest assured that your waste is
            being handled responsibly and sustainably.
          </p>
        </div>
        <div className="m-2 flex items-center justify-center">
          <img
            src={about}
            alt="A visual representation of waste management services"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Information;
