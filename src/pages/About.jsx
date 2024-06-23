import { Stat } from "../components/Stat";
import missionImage from "../assets/mission.jpg";
import vissionImage from "../assets/vission.png";

export const About = () => {
  return (
    <div>
      {/* <style>
        .swiper-wrapper {
            height: max-content !important;

            width: max-content;
        }

        .swiper-button-next,
        .swiper-button-prev {
            top: 25%;
            z-index: 1000;
        }

        .swiper-button-next {
            right: -0px !important;
        }

        .swiper-button-prev {
            left: 0px !important;
        }

        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
            content: "" !important;
        }

        .mySwiper {
            max-width: 320px !important;
            margin: 0 auto !important;
        }

        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
            content: "" !important;
        }

        .mySwiper .swiper-slide.swiper-slide-thumb-active>.swiper-slide\:w-16 {
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .mySwiper .swiper-slide.swiper-slide-thumb-active>.swiper-slide\:border-indigo-600 {
            --tw-border-opacity: 1;
            border-color: rgb(79 70 229 / var(--tw-border-opacity));
        }

        .teamswiper .swiper-wrapper {
            height: max-content !important;
            padding-bottom: 64px !important;
        }

        .teamswiper .swiper-horizontal>.swiper-scrollbar,
        .teamswiper .swiper-scrollbar.swiper-scrollbar-horizontal {
            max-width: 140px !important;
            height: 3px !important;
            bottom: 25px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
        }

        .teamswiper .swiper-pagination-fraction {
            bottom: 0 !important;
            padding-top: 16px !important;
        }

        .teamswiper .swiper-slide.swiper-slide-active>.slide\:border-indigo-600 {
            --tw-border-opacity: 1;
            border-color: rgb(79 70 229 / var(--tw-border-opacity));
        }

        .teamswiper .swiper-pagination-total {
            color: rgb(156 163 175) !important;
        }

        .teamswiper .swiper-scrollbar-drag {
            background: rgb(79 70 229);
        }

        .teamswiper .swiper-pagination-fraction {
            bottom: 0 !important;
        }

        .teamswiper .swiper-button-prev:after,
        .teamswiper .swiper-rtl .swiper-button-next:after {
            content: '' !important;
        }

        .teamswiper .swiper-button-prev {
            top: 93% !important;
            left: 35% !important;
            z-index: 100 !important;
        }

        .teamswiper .swiper-button-next {
            top: 93% !important;
            right: 35% !important;
            z-index: 100 !important;
        }

        .teamswiper .swiper-button-next:after,
        .teamswiper .swiper-rtl .swiper-button-prev:after {
            content: '' !important;
        }

        .teamswiper .swiper-button-next svg,
        .teamswiper .swiper-button-prev svg {
            width: 24px !important;
            height: 24px !important;
        }
    </style> */}

      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Crafting Excellence <br />
            <span className="text-indigo-600">
              Creating dreams, constructing realities
            </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
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

      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-500 text-center">
              We provide all the advantage that can simplify all your financial
              and banking support without any further issues
            </p>
          </div>

          {/* <!--Slider Wrapper--> */}
          <div className="swiper teamswiper pb-10">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder & CEO
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start max-sm:bottom-0 relative">
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5 "
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder & CEO
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className=" w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start max-sm:bottom-0 relative">
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33716 11.9002C8.33716 9.85475 10.0192 8.19617 12.0947 8.19617C14.1702 8.19617 15.8531 9.85475 15.8531 11.9002C15.8531 13.9456 14.1702 15.6042 12.0947 15.6042C10.0192 15.6042 8.33716 13.9456 8.33716 11.9002ZM6.30543 11.9002C6.30543 15.0513 8.89727 17.6056 12.0947 17.6056C15.2921 17.6056 17.8839 15.0513 17.8839 11.9002C17.8839 8.74906 15.2921 6.19475 12.0947 6.19475C8.89727 6.19475 6.30543 8.74906 6.30543 11.9002ZM16.7602 5.96853C16.7601 6.23224 16.8393 6.49005 16.9879 6.70938C17.1365 6.9287 17.3477 7.09968 17.5949 7.2007C17.842 7.30171 18.1141 7.32822 18.3765 7.27688C18.639 7.22554 18.8801 7.09864 19.0694 6.91225C19.2587 6.72585 19.3876 6.48833 19.4399 6.22971C19.4922 5.97108 19.4656 5.70299 19.3633 5.45931C19.261 5.21563 19.0876 5.00733 18.8652 4.86073C18.6428 4.71414 18.3812 4.63583 18.1137 4.63573H18.1131C17.7544 4.63589 17.4105 4.77635 17.1568 5.02625C16.9032 5.27614 16.7605 5.61505 16.7602 5.96853ZM7.53983 20.9443C6.44063 20.895 5.84318 20.7146 5.44614 20.5621C4.91976 20.3602 4.54419 20.1196 4.14932 19.731C3.75444 19.3424 3.51002 18.9726 3.30599 18.4539C3.15122 18.0627 2.96812 17.4738 2.91816 16.3905C2.8635 15.2193 2.85258 14.8675 2.85258 11.9003C2.85258 8.93306 2.8644 8.58222 2.91816 7.41004C2.96821 6.32675 3.15266 5.73893 3.30599 5.34666C3.51092 4.82791 3.75498 4.45777 4.14932 4.06862C4.54365 3.67946 4.91886 3.43857 5.44614 3.23751C5.843 3.08497 6.44063 2.90453 7.53983 2.85528C8.72824 2.80142 9.08523 2.79066 12.0947 2.79066C15.1041 2.79066 15.4615 2.80231 16.6509 2.85528C17.7501 2.90462 18.3465 3.0864 18.7446 3.23751C19.2709 3.43857 19.6465 3.68 20.0414 4.06862C20.4363 4.45724 20.6798 4.82791 20.8847 5.34666C21.0395 5.73777 21.2226 6.32675 21.2726 7.41004C21.3272 8.58222 21.3381 8.93306 21.3381 11.9003C21.3381 14.8675 21.3272 15.2183 21.2726 16.3905C21.2225 17.4738 21.0385 18.0626 20.8847 18.4539C20.6798 18.9726 20.4357 19.3428 20.0414 19.731C19.6471 20.1193 19.2709 20.3602 18.7446 20.5621C18.3477 20.7147 17.7501 20.8951 16.6509 20.9443C15.4625 20.9982 15.1055 21.009 12.0947 21.009C9.08388 21.009 8.72788 20.9982 7.53983 20.9443ZM7.44648 0.856351C6.24626 0.910218 5.42612 1.09777 4.70988 1.37244C3.96812 1.65608 3.34018 2.03662 2.71269 2.65404C2.08521 3.27146 1.70007 3.89128 1.41226 4.62231C1.13356 5.32862 0.943248 6.13644 0.88859 7.31928C0.83303 8.504 0.820312 8.88275 0.820312 11.9002C0.820312 14.9176 0.83303 15.2964 0.88859 16.4811C0.943248 17.664 1.13356 18.4717 1.41226 19.178C1.70007 19.9086 2.0853 20.5292 2.71269 21.1463C3.34009 21.7635 3.96812 22.1435 4.70988 22.4279C5.42747 22.7026 6.24626 22.8901 7.44648 22.944C8.64923 22.9979 9.03292 23.0113 12.0947 23.0113C15.1564 23.0113 15.5408 22.9987 16.7429 22.944C17.9432 22.8901 18.7628 22.7026 19.4795 22.4279C20.2208 22.1435 20.8492 21.7637 21.4767 21.1463C22.1041 20.5289 22.4885 19.9086 22.7771 19.178C23.0558 18.4717 23.247 17.6639 23.3008 16.4811C23.3554 15.2955 23.3681 14.9176 23.3681 11.9002C23.3681 8.88275 23.3554 8.504 23.3008 7.31928C23.2461 6.13635 23.0558 5.32817 22.7771 4.62231C22.4885 3.89173 22.1032 3.27244 21.4767 2.65404C20.8502 2.03564 20.2208 1.65608 19.4804 1.37244C18.7628 1.09777 17.9431 0.909329 16.7438 0.856351C15.5417 0.802485 15.1573 0.789062 12.0956 0.789062C9.03382 0.789062 8.64923 0.801596 7.44648 0.856351Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                      <p className="cursor-pointer  text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00626 18.8859V6.59092H0.909448V18.8859H5.00669H5.00626ZM2.95871 4.91254C4.38705 4.91254 5.27629 3.96844 5.27629 2.78857C5.24956 1.58182 4.38705 0.664062 2.98587 0.664062C1.58373 0.664062 0.667969 1.58182 0.667969 2.78846C0.667969 3.96833 1.55689 4.91244 2.93187 4.91244H2.95839L2.95871 4.91254ZM7.2739 18.8859H11.3704V12.0205C11.3704 11.6536 11.3971 11.2856 11.5054 11.0235C11.8014 10.289 12.4754 9.52875 13.6074 9.52875C15.0895 9.52875 15.6827 10.6561 15.6827 12.3091V18.8859H19.7791V11.8363C19.7791 8.05999 17.7583 6.30267 15.063 6.30267C12.8532 6.30267 11.8827 7.53471 11.3434 8.37384H11.3707V6.59135H7.27412C7.32759 7.74476 7.27379 18.8863 7.27379 18.8863L7.2739 18.8859Z"
                            fill="currentColor"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="slider-button-left"
              className="swiper-button-prev p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
              data-carousel-prev
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.38413 15.1022L3.33301 10.0511M3.33301 10.0511L8.38413 5M3.33301 10.0511L18.3329 10.0511"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
              data-carousel-next
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.6158 5L16.6669 10.0511M16.6669 10.0511L11.6158 15.1022M16.6669 10.0511L1.66699 10.0511"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>
      </section>

      {/* <script src="https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/js/pagedone.js"></script> */}

      {/* <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script> */}
      {/* <script>
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: -10,
            slidesPerView: 3,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 32,
            thumbs: {
                swiper: swiper,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script> */}
      {/* <script>
        var swiper = new Swiper(".teamswiper", {
            slidesPerView: 1,
            spaceBetween: 32,
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            grabCursor: true,
            loop: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });
    </script> */}
    </div>
  );
};
