import React, { useId } from "react";
import { TopHookCategorySkeleton } from "./TopHookCategorySkeleton";

export const TopHookCategory = ({ isFetchingHookStat, data }) => {
  const keyId = useId();
  return (
    <React.Fragment>
      <section className=''>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>Top Hooks</h3>
          <button className='px-4 py-2 text-xs font-semibold text-white bg-purple-700 rounded-full shadow-md xl:text-sm hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75 whitespace-nowrap'>
            Explore more
          </button>
        </div>

        {isFetchingHookStat && <TopHookCategorySkeleton count={3} />}

        {isFetchingHookStat ||
          data?.slice(0, 3)?.map(({ hashTag, icon, iconStyle }) => (
            <section
              className='flex items-center mb-5 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
              key={keyId + hashTag}
            >
              <div className={`${iconStyle} p-5 rounded-md mr-5`}> {icon} </div>
              <div>
                <h4 className='text-xs dark:text-gray-300 xl:text-sm'>
                  {hashTag}
                </h4>
                <span className='text-xs text-gray-500 xl:text-sm'>
                  {Math.floor(Math.random() * 20 + 1)} Hook-ups in 5 days
                </span>
              </div>
            </section>
          ))}
      </section>
    </React.Fragment>
  );
};
