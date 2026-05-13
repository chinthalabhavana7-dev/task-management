import React from "react";

const Card = ({ title, value, color }) => {
  return (
    <div
      className="
        bg-white
        w-[165px]
        h-[73px]
        rounded-[14px]
        border
        border-[#E2E8F0]
        pl-4
        py-2
        flex
        flex-col
        justify-center
        shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)]">
      {/* Title */}
      <h2
        className="
          text-[#90A1B9]
          text-[10px]
          font-bold
          uppercase
          tracking-[0.62px]
          leading-[15px]
        "
      >
        {title}
      </h2>
      {/* Value */}
      <h1
        className={`
          mt-1
          text-[14px]
          font-bold
          leading-[32px]
          ${color}
        `}
      >
        {value}
      </h1>
    </div>
  );
};
export default Card;