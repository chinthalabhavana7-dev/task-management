import React from "react";
import Card from "./Components/Card2";
// Sample Data
  const sampleData = [
    {
      id: 1,
      title: "Ticket ID",
      value: "CT7234",
      color: "text-[#314158]",
    },
    {
      id: 2,
      title: "Total Points",
      value: "5",
      color: "text-[#FE9A00]",
    },
    {
      id: 3,
      title: "Status",
      value: "Pending",
      color: "text-[#FE9A00]",
    },
  ];
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16px p-16px w-[527px] h-[73px]">

        {sampleData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};
export default App;