import React from "react";

export const TrendingHookStat = ({ data }) => {
  return (
    <section className='mt-16'>
      <article className=''>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>Trending Hooks</h3>
          <button
            className='
            bg-purple-700
            text-white
            text-xs
            xl:text-sm
            font-semibold
            py-2
            px-4
            rounded-full
            shadow-md
            hover:bg-purple-800
            hover:shadow-lg
            hover:text-white
            hover:bg-opacity-75
            whitespace-nowrap

      '
          >
            Show all
          </button>
        </div>

        {data
          ?.slice(0, 3)
          ?.sort((a, b) => b.hooksIn5Days - a.hooksIn5Days)
          .map((hook, index) => {
            return (
              <div
                className='flex items-center justify-between mb-5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded p-2 cursor-pointer'
                key={index}
              >
                <div className='flex items-center'>
                  <span className='mr-1 xl:mr-3'>{hook.icon}</span>
                  <span className='text-gray-700 text-xs xl:text-sm lowercase dark:text-gray-400'>
                    #{hook.hashTag.replace(/\s+/g, "")}
                  </span>
                </div>
                <span className='text-gray-700 dark:text-gray-300 text-xs xl:text-sm'>
                  {hook.hooksIn5Days}
                </span>
              </div>
            );
          })}
      </article>
    </section>
  );
};
