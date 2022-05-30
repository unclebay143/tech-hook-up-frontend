import React, { useId } from "react";

export const PublicHookStat = ({ data }) => {
  const keyId = useId();
  return (
    <React.Fragment>
      <section className=''>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>Top Hooks</h3>
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
            Explore more
          </button>
        </div>

        {data?.slice(0, 3)?.map(({ hashTag, icon, iconStyle }) => (
          <section
            className='flex mb-5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer items-center'
            key={keyId + hashTag}
          >
            <div className={`${iconStyle} p-5 rounded-md mr-5`}> {icon} </div>
            <div>
              <h4 className='dark:text-gray-300 text-xs xl:text-sm'>
                {hashTag}
              </h4>
              <span className='text-gray-500 text-xs xl:text-sm'>
                {Math.floor(Math.random() * 20 + 1)} Hook-ups in 5 days
              </span>
            </div>
          </section>
        ))}
      </section>
    </React.Fragment>
  );
};
