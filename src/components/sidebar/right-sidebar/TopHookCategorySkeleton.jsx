import React from "react";

export const TopHookCategorySkeleton = ({ count = 1 }) => {
  return (
    <div>
      {[...Array(count)].map(() => (
        <section className='flex items-center mb-5 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
          <div
            className={`p-5 rounded-md mr-5 flex items-center h-14 w-14 bg-gray-300 dark:bg-gray-700 `}
          >
            <span className='inline-block w-5 h-3 mr-1 bg-gray-400 rounded-sm'></span>
          </div>
          <div>
            <h4 className='h-3 mr-1 bg-gray-300 rounded-md dark:bg-gray-700 w-44 animate-pulse'></h4>
            <span className='inline-block w-32 h-3 mr-1 bg-gray-300 rounded-md dark:bg-gray-700 animate-pulse'></span>
          </div>
        </section>
      ))}
    </div>
  );
};
