import React from "react";
import daytimegreeting from "../../helper/util/day-time-greeting";

export const DayTimeGreetings = () => {
  return (
    <div>
      <div className='flex items-center justify-between my-7'>
        <h3 className='text-lg dark:text-gray-300 font-semibold'>
          {daytimegreeting()}
        </h3>
        <button className='hidden px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
          Create +
        </button>
      </div>
    </div>
  );
};
