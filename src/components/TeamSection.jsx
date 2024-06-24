import { TeamBlock } from "./TeamBlock";

export const TeamSection = () => {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-normal pb-5">
            Our Exceptional Team{" "}
          </h2>
          <p className="text-center text-gray-500 text-lg font-medium leading-7">
            Meet our outstanding team - a synergy of talent, creativity, <br />
            and dedication, crafting success together.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full gap-8 md:max-w-3xl">
          <TeamBlock
            name="William Foster"
            position="Co-Founder & CEO"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225389.png"
                alt="William image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            }
          />

          <TeamBlock
            name="Emily Jonson"
            position="CEO"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225484.png"
                alt="Emily image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0 "
              />
            }
          />

          <TeamBlock
            name="Harshita Patel"
            position="HR"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225621.png"
                alt="Harshita image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            }
          />

          <TeamBlock
            name="Eleanor Morales"
            position="HR"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225668.png"
                alt="Eleanor image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            }
          />

          <TeamBlock
            name="Sophia Monic"
            position="Product Manager"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225714.png"
                alt="Sophia image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            }
          />

          <TeamBlock
            name="James Miller"
            position="Marketing Lead"
            avatar={
              <img
                src="https://pagedone.io/asset/uploads/1710225753.png"
                alt="James image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};
