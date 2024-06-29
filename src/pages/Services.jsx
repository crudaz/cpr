import { ServiceCard } from "../components/ServiceCard";

// import constructionImage from "../assets/services/construction.png";
// import electricityImage from "../assets/services/electricity.png";
import constructionImage from "../assets/services/construction.jpeg";
import remodelingImage from "../assets/services/remodeling.jpg";
import plumbingImage from "../assets/services/plumbing.jpeg";
import hvacImage from "../assets/services/airconditioner.jpeg";
import weldingImage from "../assets/services/welding.jpeg";
import electricityImage from "../assets/services/electricity.jpeg";

export const Services = () => {
  return (
    <>
      <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
        <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">
          Let us bring your vision to life
        </h1>
        <p className="text-gray-900 text-center text-lg font-normal leading-7">
          We pour our heart and soul into every building we create. <br /> Count on the
          team of talented architects at CPR CONSTRUCTION AND REMODELING to
          exceed your expectations.
        </p>
      </div>

      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl text-center font-bold text-white mb-7">
              Explore our diverse services
            </h2>
            <p className="text-base text-center text-gray-400 font-normal lg:max-w-2xl mx-auto">
              Discover our selection below to streamline and elevate your
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-2xl mx-auto lg:max-w-full">
            <ServiceCard
              name="Construction"
              description="We offer construction services for residential, commercial, and industrial projects, ranging from new builds to expansions and renovations."
              imageUrl={constructionImage}
            />

            <ServiceCard
              name="Remodeling"
              description="We transform existing spaces into modern and functional designs, enhancing the xaesthetics and functionality of any property."
              imageUrl={remodelingImage}
            />

            <ServiceCard
              name="Plumbing"
              description="We address plumbing issues, from basic repairs to complex installations, ensuring efficient operation of pipes and fixtures."
              imageUrl={plumbingImage}
            />

            <ServiceCard
              name="Electricity"
              description="We provide comprehensive electrical services, including installation, repair, and maintenance of electrical systems for homes and businesses."
              imageUrl={electricityImage}
            />

            <ServiceCard
              name="HVAC"
              description="We install and maintain heating, ventilation, and air conditioning systems to ensure a comfortable indoor environment year-round."
              imageUrl={hvacImage}
            />

            <ServiceCard
              name="Welding"
              description="We offer welding services for a variety of applications, from simple repairs to custom manufacturing projects."
              imageUrl={weldingImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};
