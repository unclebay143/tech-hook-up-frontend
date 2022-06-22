import React from "react";
import { TrendingHookStatSkeleton } from "./TrendingHookStatSkeleton";

export const TrendingHookStat = ({ isFetchingHookStat, data }) => {
  return (
    <section className='mt-16'>
      <article className=''>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>Trending Hooks</h3>
          <button className='px-4 py-2 text-xs font-semibold text-white bg-purple-700 rounded-full shadow-md xl:text-sm hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75 whitespace-nowrap'>
            Show all
          </button>
        </div>

        {isFetchingHookStat ? (
          <TrendingHookStatSkeleton count={3} />
        ) : (
          <React.Fragment>
            {data
              ?.slice(0, 3)
              ?.sort((a, b) => b.hooksIn5Days - a.hooksIn5Days)
              ?.map((hook, index) => {
                return (
                  <div
                    className='flex items-center justify-between p-2 mb-5 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
                    key={index}
                  >
                    <div className='flex items-center'>
                      <span className='mr-1 xl:mr-3'>{hook.icon}</span>
                      <span className='text-xs text-gray-700 lowercase xl:text-sm dark:text-gray-400'>
                        #{hook.hashTag.replace(/\s+/g, "")}
                      </span>
                    </div>
                    <span className='text-xs text-gray-700 dark:text-gray-300 xl:text-sm'>
                      {hook.hooksIn5Days}
                    </span>
                  </div>
                );
              })}
          </React.Fragment>
        )}
      </article>
    </section>
  );
};
