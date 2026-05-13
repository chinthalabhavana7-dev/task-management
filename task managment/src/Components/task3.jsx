import React, { useState } from "react";
import CardButton from "./Components/Card3";
const App = () => {
  const [openCard, setOpenCard] = useState(null);
  const buttonData = [
    {
      id: 1,
      title: "Active Ticket History",
    },
    {
      id: 2,
      title: "Past Complaints",
    },
    {
      id: 3,
      title: "Product History",
    },
  ];
  const handleCard = (title) => {
    if (openCard === title) {
      setOpenCard(null);
    } else {
      setOpenCard(title);
    }
  };
  return (
    <div className="min-h-screen bg-white  flex flex-col items-center justify-center px-4">
      <div
        className="
          w-[527px]
          h-[46px]
          bg-[#F1F5F9]
          rounded-[10px]
          grid
          grid-cols-3
          p-[4px]
        "
      >
        {buttonData.map((item) => (
          <CardButton
            key={item.id}
            title={item.title}
            active={openCard === item.title}
            onClick={() => handleCard(item.title)}
          />
        ))}
      </div>
      <div className="mt-6 w-[527px]">
        <div
          className="
            h-[180px]
            bg-white
            rounded-[12px]
            border
           border-[#E2E8F0]
            shadow-sm
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
        >
          {openCard && (
            <h1
              className="
                text-[20px]
                font-semibold
                text-[#155DFC]
                text-center
              "
            >
              {openCard}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;