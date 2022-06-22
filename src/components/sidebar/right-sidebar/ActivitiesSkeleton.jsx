import React from "react";

export const ActivitiesSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {[...Array(count)].map(() => (
        <div
          className={`
          bg-purple-700
          text-white
          text-sm
            mb-4
            cursor-pointer
            font-semibold
            py-2
            px-4
            rounded-full
            shadow-md
            hover:bg-purple-800
            hover:shadow-lg
            hover:text-white
            hover:bg-opacity-75
            `}
        >
          <section className='flex items-center'>
            <div className='mr-4'>
              <div className='w-3 h-3 bg-purple-500 rounded-md animate-pulse'></div>
            </div>
            <div className='flex items-center'>
              <div className='w-16 h-5 mr-3 bg-purple-500 rounded-md 2xl:w-32 animate-pulse'></div>
              <div className='w-3 h-3 mr-3 bg-purple-500 rounded-md animate-pulse'></div>
              <div className='w-20 h-3 mr-1 bg-purple-500 rounded-md 2xl:w-32 animate-pulse'></div>
            </div>
          </section>
        </div>
      ))}
    </React.Fragment>
  );
};
