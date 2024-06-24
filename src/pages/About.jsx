import { Stat } from "../components/Stat";
import missionImage from "../assets/mission.jpg";
import vissionImage from "../assets/vission.png";
import aboutImage from "../assets/about.png";

import { TeamSection } from "../components/TeamSection";

export const About = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center w-full h-auto py-12"
        style={{ backgroundImage: `url(${aboutImage})` }}
        // style="background-image: url(https://pagedone.io/asset/uploads/1702103796.png);"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal">
            Crafting Excellence <br />
            {/* <span className="text-white"> */}
            <span style={{ color: "#f7b71e" }}>
              Creating dreams, constructing realities
            </span>
          </h1>
          {/* <h2 className="max-w-[150px] lg:max-w-xs text-white font-manrope font-extrabold text-5xl leading-tight lg:text-7xl text-right ml-auto lg:leading-[1.4]">
            It’s all about the people
          </h2> */}
        </div>
      </div>

      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          {/* <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Crafting Excellence <br />
            <span className="text-indigo-600">
              Creating dreams, constructing realities
            </span>
          </h1> */}
          <p className="mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            At our core, we're dedicated to making a meaningful impact through
            every project we undertake. Our mission is to empower our clients to
            realize their visions, leaving behind a legacy of positive change.
            From revitalizing economies and enhancing infrastructure resilience
            to fostering community connectivity and driving progress towards
            sustainability goals, we're committed to creating a cleaner,
            greener, and safer world for generations to come.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src={missionImage}
                alt="Our Mission"
                className="rounded-md max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  Mission{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  We are a company specialized in providing immediate solutions
                  in construction, remodeling, and projects involving plumbing,
                  electrical, thermal, acoustic, welding, HVAC, cold, and heat,
                  achieving customer satisfaction in an environment of
                  continuous improvement in quality and service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src={vissionImage}
                  alt="Our Vission"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Vission
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  CPR Construction and Remodeling projects itself to 2033 as one
                  of the best companies offering plumbing, electrical, HVAC, and
                  welding solutions, as well as thermal and acoustic insulation,
                  recognized for its excellence and quality of service.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src={vissionImage}
                alt="Our Vission"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-gray-900 font-bold text-center mb-16">
            Our Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-md mx-auto md:max-w-3xl xl:max-w-full">
            <Stat
              title="Customer Focused"
              description="Absolutely, being customer-focused refers to prioritizing and centering all business efforts, strategies."
              icon={
                <svg
                  className="stroke-indigo-800 transition-all duration-500 group-hover:stroke-black"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0007 19.8333C15.2383 19.8333 16.4253 19.3417 17.3005 18.4665C18.1757 17.5913 18.6673 16.4043 18.6673 15.1667C18.6673 13.929 18.1757 12.742 17.3005 11.8668C16.4253 10.9917 15.2383 10.5 14.0007 10.5C12.763 10.5 11.576 10.9917 10.7008 11.8668C9.82565 12.742 9.33398 13.929 9.33398 15.1667C9.33398 16.4043 9.82565 17.5913 10.7008 18.4665C11.576 19.3417 12.763 19.8333 14.0007 19.8333Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6673 19.8333V11.2778C25.6673 10.5545 25.6673 10.1928 25.5878 9.89609C25.3721 9.09087 24.7431 8.46193 23.9379 8.24617C23.6412 8.16667 23.2795 8.16667 22.5562 8.16667C22.1765 8.16667 21.9866 8.16667 21.8081 8.13886C21.3292 8.06425 20.8854 7.84235 20.5384 7.50399C20.4091 7.37787 20.2951 7.22599 20.0673 6.92222L18.9007 5.36667C18.2137 4.45067 17.8702 3.99267 17.3775 3.74634C16.8848 3.5 16.3123 3.5 15.1673 3.5H12.834C11.689 3.5 11.1165 3.5 10.6238 3.74634C10.1311 3.99267 9.78765 4.45067 9.10065 5.36667L7.93398 6.92222C7.70617 7.22598 7.59225 7.37787 7.46289 7.50399C7.11586 7.84235 6.67207 8.06425 6.19317 8.13886C6.01465 8.16667 5.8248 8.16667 5.4451 8.16667C4.72178 8.16667 4.36013 8.16667 4.06341 8.24617C3.25819 8.46193 2.62925 9.09087 2.41349 9.89609C2.33398 10.1928 2.33398 10.5545 2.33398 11.2778V19.8333C2.33398 22.0332 2.33398 23.1332 3.0174 23.8166C3.70082 24.5 4.80076 24.5 7.00065 24.5H21.0007C23.2005 24.5 24.3005 24.5 24.9839 23.8166C25.6673 23.1332 25.6673 22.0332 25.6673 19.8333Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <Stat
              title="Excellence"
              description="Excellence isn't merely achieving a single pinnacle but rather an ongoing journey marked."
              icon={
                <svg
                  className="stroke-indigo-800 transition-all duration-500 group-hover:stroke-black"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4938 5.65193C12.5858 3.43932 13.1318 2.33301 14.0007 2.33301C14.8695 2.33301 15.4155 3.43932 16.5075 5.65193L17.4582 7.57816C17.7768 8.22375 17.9361 8.54654 18.2153 8.74935C18.4944 8.95216 18.8506 9.00392 19.5631 9.10745L21.6888 9.41633C24.1306 9.77114 25.3514 9.94855 25.6199 10.7749C25.8884 11.6013 25.005 12.4624 23.2381 14.1847L21.6999 15.6841C21.1844 16.1866 20.9266 16.4379 20.82 16.766C20.7134 17.0942 20.7742 17.4489 20.8959 18.1585L21.2591 20.2756C21.6762 22.7075 21.8847 23.9235 21.1818 24.4342C20.4788 24.9449 19.3868 24.3708 17.2028 23.2227L15.3015 22.2231C14.6643 21.8881 14.3457 21.7206 14.0007 21.7206C13.6556 21.7206 13.337 21.8881 12.6998 22.2231L10.7985 23.2227C8.61448 24.3708 7.52249 24.9449 6.81953 24.4342C6.11658 23.9235 6.32513 22.7075 6.74223 20.2756L7.10535 18.1585C7.22705 17.4489 7.2879 17.0942 7.18128 16.766C7.07466 16.4379 6.81689 16.1866 6.30136 15.6841L4.76317 14.1847C2.99629 12.4624 2.11285 11.6013 2.38136 10.7749C2.64986 9.94855 3.87074 9.77114 6.31251 9.41633L8.43823 9.10745C9.15068 9.00392 9.5069 8.95216 9.78605 8.74935C10.0652 8.54654 10.2245 8.22375 10.5431 7.57816L11.4938 5.65193Z"
                    stroke=""
                    strokeWidth="2"
                  />
                </svg>
              }
            />

            <Stat
              title="Professional"
              description="Professionalism embodies a set of qualities and behaviors that reflect competence, integrity, and respect."
              icon={
                <svg
                  className="stroke-black transition-all duration-500 group-hover:stroke-indigo-800"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7594 4.9256C17.7594 4.9256 16.3196 3.57857 15.8334 3.09236C15.3472 2.60616 14.6877 2.33301 14.0001 2.33301C13.3125 2.33301 12.6531 2.60616 12.1669 3.09236C11.6807 3.57857 10.2409 4.9256 10.2409 4.9256M10.1321 8.81449H17.6993C20.1126 8.81449 21.3192 8.81449 22.1566 9.5194C22.994 10.2243 23.1998 11.4133 23.6114 13.7912L24.4511 18.6431C25.015 21.9012 25.297 23.5303 24.3979 24.5983C23.4989 25.6663 21.8456 25.6663 18.539 25.6663H9.12431C5.7151 25.6663 4.0105 25.6663 3.11011 24.5597C2.20971 23.4531 2.55637 21.7841 3.2497 18.4461L4.25747 13.5943C4.73296 11.305 4.97071 10.1604 5.79781 9.48744C6.6249 8.81449 7.79396 8.81449 10.1321 8.81449Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <Stat
              title="Honesty & Integrity"
              description="Honesty and integrity form the cornerstone of personal and professional relationships."
              icon={
                <svg
                  className="stroke-black transition-all duration-500 group-hover:stroke-indigo-800"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55332 25.4431V10.829H7.13577C4.87219 10.829 3.7404 10.829 3.03719 11.5322C2.33398 12.2354 2.33398 13.3672 2.33398 15.6308V20.6413C2.33398 22.9049 2.33398 24.0367 3.03719 24.7399C3.7404 25.4431 4.87219 25.4431 7.13577 25.4431H7.55332ZM7.55332 25.4431L7.55332 11.6508L11.5914 3.19353C12.0169 2.30233 13.1688 2.05199 13.9258 2.68619C15.0399 3.61948 15.6834 4.99818 15.6834 6.45149V7.54533C15.6834 8.77826 16.6829 9.77774 17.9158 9.77774H22.1824C23.1658 9.77774 23.6574 9.77774 24.0261 9.90025C24.944 10.2053 25.5893 11.0314 25.6629 11.9959C25.6924 12.3833 25.5734 12.8603 25.3352 13.8143L23.3404 21.8045C22.9041 23.5519 22.686 24.4257 22.0346 24.9344C21.3833 25.4432 20.4827 25.4432 18.6816 25.4432L7.55332 25.4431Z"
                    stroke=""
                    strokeWidth="2"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
};
