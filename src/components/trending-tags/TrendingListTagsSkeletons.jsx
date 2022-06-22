import React from "react";

export const TrendingListTagsSkeletons = ({ count = 1 }) => {
  return (
    <section className='mt-10'>
      <ul className='mt-5'>
        {[...Array(count)]?.map((_, index) => (
          <li className='flex justify-between p-2 rounded cursor-pointer'>
            <span className='w-20 h-5 text-sm bg-gray-300 bg-opacity-50 rounded-md 2xl:w-24 dark:bg-gray-700 animate-pulse dark:text-gray-600'></span>
            <span className='w-10 h-5 p-1 bg-gray-300 bg-opacity-50 rounded-full dark:bg-gray-700 animate-pulse'></span>
          </li>
        ))}
        <span className='p-2 text-sm font-bold text-blue-500 dark:text-blue-400'>
          Show More
        </span>
      </ul>
    </section>
  );
};
