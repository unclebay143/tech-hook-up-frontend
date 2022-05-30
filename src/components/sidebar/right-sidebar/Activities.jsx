import React from "react";

export const Activities = ({ data }) => {
  return (
    <React.Fragment>
      <section className='mt-16'>
        <div className='flex items-center justify-between mb-7'>
          <h3 className='dark:text-gray-200 md:mr-3 xl:mr-0'>
            Recent Activities
          </h3>
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
            View All
          </button>
        </div>

        {/* hooking real time status */}
        {data?.slice(0, 3)?.map((hook) => (
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
                <span>{hook.icon}</span>
              </div>
              <div className='flex flex-col 2xl:flex-row'>
                <span className='text-xs xl:text-sm mr-3'>{hook.hashTag}</span>
                <span
                  className={`text-xs ${
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
