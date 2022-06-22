import React from "react";
import { ActivitiesSkeleton } from "./ActivitiesSkeleton";

export const Activities = ({ isFetchingHookStat, data }) => {
  return (
    <React.Fragment>
      <section className='mt-16'>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>
            Recent Activities
          </h3>
          <button className='px-4 py-2 text-xs font-semibold text-white bg-purple-700 rounded-full shadow-md xl:text-sm hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75 whitespace-nowrap'>
            View All
          </button>
        </div>

        {isFetchingHookStat && <ActivitiesSkeleton count={3} />}

        {/* hooking real time status */}
        {isFetchingHookStat ||
          data?.slice(0, 3)?.map((hook) => (
            <div
              key={hook.hashTag}
              className={`
                mb-4
                cursor-pointer
                ${hook.isTrending ? "bg-purple-700" : "bg-gray-200"}
                ${hook.isTrending ? "text-white" : "text-gray-700"}
                ${hook.isTrending ? "text-sm" : "text-xs"}
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
              <div className='flex items-center xl:items-start'>
                <div className='mr-4'>
                  <span className='md:text-lg 2xl:text-sm'>{hook.icon}</span>
                </div>
                <div className='flex flex-col items-center 2xl:flex-row'>
                  <span className='mr-3 text-xs xl:text-sm'>
                    {hook.hashTag}
                  </span>
                  <span
                    className={`text-xs text-left w-full ${
                      hook.isTrending ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {hook.hooksIn5Days} hooks in 5 days
                  </span>
                </div>
              </div>
            </div>
          ))}
      </section>
    </React.Fragment>
  );
};
