import React from "react";
import daytimegreeting from "../../util/day-time-greeting";

export const HookFeedCategory = () => {
  const [HookCategory, setHookCategory] = React.useState([
    {
      id: "101",
      name: "Front-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: true,
    },
    {
      id: "102",
      name: "Back-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: false,
    },
    {
      id: "103",
      name: "Product Management",
      coverImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: true,
    },
    {
      id: "104",
      name: "Block-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      isFollowing: false,
    },
  ]);

  const handleFollow = (id) => {
    const newHookCategory = [...HookCategory];
    const index = newHookCategory.findIndex((i) => i.id === id);
    newHookCategory[index].isFollowing = !newHookCategory[index].isFollowing;
    setHookCategory(newHookCategory);
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-between my-7'>
        <h3 className='text-lg dark:text-gray-300 dark:font-semibold'>
          {daytimegreeting()}
        </h3>
        <button className='hidden px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
          Create +
        </button>
      </div>

      <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {HookCategory.map(({ id, name, coverImage, isFollowing }) => {
          return (
            <div
              key={id}
              // dark:hover:animate-pulse
              className='flex items-center justify-between mb-2 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 dark:bg-gray-700'
            >
              <section className='flex items-center'>
                <img
                  src={coverImage}
                  alt='author'
                  className='object-cover w-16 h-16 rounded-tl-lg rounded-bl-lg'
                />
                <div className='ml-3'>
                  <h3 className='text-xs font-semibold text-gray-800 dark:text-gray-100'>
                    {name}
                  </h3>
                </div>
              </section>

              <div
                className='p-1 mr-5 bg-gray-300 rounded-full hover:bg-gray-400'
                onClick={() => handleFollow(id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`w-5 h-5 ${isFollowing && "text-purple-700"}`}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  {isFollowing ? (
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  ) : (
                    <path
                      fillRule='evenodd'
                      d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                      clipRule='evenodd'
                    />
                  )}
                </svg>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};
