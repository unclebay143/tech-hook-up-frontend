import React from "react";

export const TrendingHookStatSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {[...Array(count)]?.map((_, index) => (
        <div className='flex items-center justify-between p-2 mb-5 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
          <div className='flex items-center'>
            <span className='w-3 h-3 mr-1 bg-gray-300 bg-opacity-50 rounded-full xl:mr-3 dark:bg-gray-700 animate-pulse'></span>
            <span className='w-24 h-5 bg-gray-300 bg-opacity-50 rounded-full dark:bg-gray-700 animate-pulse '></span>
          </div>
          <span className='w-10 h-5 bg-gray-300 bg-opacity-50 rounded-full dark:bg-gray-700 animate-pulse'></span>
        </div>
      ))}
    </React.Fragment>
  );
};
