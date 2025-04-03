import React from "react";

export default function HorizontalInfiniteScroll() {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
      <div className="flex animate-scroll h-full select-none">
        {/* Clone the items to create infinite scroll effect */}
        {[...items, ...items,  ...items,  ...items,  ...items,  ...items].map((item, index) => (
          <div key={index} className="flex-none w-60 h-auto bg-stone-500 text-white flex items-center justify-center rounded-xl m-4 hover:scale-110 hover:bg-stone-400 transition-all ease-in-out duration-600" >
            {item}
          </div>
        ))}
      </div>
  );
}