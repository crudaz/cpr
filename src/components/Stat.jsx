export const Stat = ({ title, description, icon }) => {
  return (
    <div className="w-full mx-auto group bg-indigo-600 about-sh-2 py-9 px-7 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50 cursor-pointer">
      <span className="w-[60px] h-[60px] max-lg:mx-auto rounded-xl p-4 bg-gray-50 flex items-center justify-center">
        {icon}
      </span>
      <p className="font-normal text-xl leading-8 text-white my-5 text-center lg:text-left transition-all duration-500 group-hover:text-gray-900">
        {title}
      </p>
      <p className="font-normal text-sm text-gray-300 text-center lg:text-left transition-all duration-500 group-hover:text-gray-500">
        {description}
      </p>
    </div>
  );
};
