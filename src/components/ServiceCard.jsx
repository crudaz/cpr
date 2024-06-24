export const ServiceCard = ({ name, description, imageUrl }) => {
  return (
    <div
      className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600"
      // style={{ backgroundColor: "#f7b71e" }}  
    >
      <div className="block">
        <img src={imageUrl} alt={`${name} section`} className="w-full" />
      </div>
      <div className="p-9">
        <h4 className="mb-5 text-xl text-white text-center font-semibold">
          {name}
        </h4>
        <p className="text-sm text-white font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white">
          {description}
        </p>
        {/* <a
          href="javascript:;"
          className="flex items-center gap-2 justify-center text-xs font-semibold text-white"
        >
          Learn More{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L8.58579 9.41421C9.25245 8.74755 9.58579 8.41421 9.58579 8C9.58579 7.58579 9.25245 7.25245 8.58579 6.58579L6 4"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};
