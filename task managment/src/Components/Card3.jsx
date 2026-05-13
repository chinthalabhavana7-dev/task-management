// Components/Card3.jsx
import React from "react";
const Card3 = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        h-[37px]
        rounded-[8px]
        border
        px-[8px]
        text-[14px]
        leading-[20px]
        tracking-[-0.15px]
        font-medium
        transition-all
        duration-300
        ${ active ? `bg-white
              text-[#155DFC]
              border-[#D6E4FF]
              shadow-sm`: `
              bg-transparent
              text-[#62748E]
              border-transparent`}`} >
      {title}
    </button>
  );
};
export default Card3;