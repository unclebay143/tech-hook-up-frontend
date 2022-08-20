import React from "react";

export const HookCategoryCardWidgetSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {[...Array(count)].map(() => (
          <div className='flex items-center justify-between mb-2 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 dark:bg-gray-800'>
            <section className='flex items-center'>
              <div className='object-cover w-16 h-16 bg-gray-300 rounded-tl-lg rounded-bl-lg dark:bg-gray-700 animate-pulse'></div>
              <div className='ml-3'>
                <span className='inline-block w-32 h-4 bg-gray-300 rounded-md dark:bg-gray-700 animate-pulse'></span>
              </div>
            </section>

            <div className='p-1 mr-5 text-white bg-gray-300 rounded-full dark:bg-gray-700 hover:bg-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};
