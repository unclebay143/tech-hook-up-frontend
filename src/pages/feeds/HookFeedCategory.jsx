import React from "react";

export const HookFeedCategory = () => {
  const HookCategory = [
    {
      id: 1,
      name: "Front-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      name: "Back-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "Product Management",
      coverImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      name: "Block-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
  ];
  return (
    <div>
      <div className='flex items-center justify-between my-7'>
        <h3 className='text-lg dark:text-gray-300 dark:font-semibold'>
          Good Morning 🔆
        </h3>
        <button
          className='
            bg-purple-700
            text-white
            text-sm
            font-semibold
            py-2
            px-4
            rounded-full
            shadow-md
            hover:bg-purple-800
            hover:shadow-lg
            hover:text-white
            hover:bg-opacity-75
            hidden
      '
        >
          Create +
        </button>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {HookCategory.map(({ id, name, coverImage }) => {
          return (
            <div
              key={id}
              className='dark:hover:animate-pulse flex rounded-md shadow-sm hover:bg-gray-200 items-center justify-between dark:bg-gray-700 mb-2 cursor-pointer'
            >
              <section className='flex items-center'>
                <img
                  src={coverImage}
                  alt='author'
                  className='h-16 w-16 rounded-tl-lg rounded-bl-lg object-cover'
                />
                <div className='ml-3'>
                  <h3 className='text-xs text-gray-800 dark:text-gray-100 font-semibold'>
                    {name}
                  </h3>
                </div>
              </section>

              <div className='bg-gray-300 p-1 rounded-full mr-5 hover:bg-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
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
          );
        })}
      </section>
    </div>
  );
};
