import React, { useContext } from "react";
import UserContext from "../../context/user-context/userContext";

export const ImageRing = ({ id, path, alt, data, top }) => {
  const {
    first_name,
    last_name,
    following,
    followersCount,
    followingCount,
    hooksCount,
    rate,
    verified,
  } = data || [];
  // hover id
  const [hoverId, setHoverId] = React.useState(null);
  const { unfollowUser, followUser } = useContext(UserContext);

  // ! Rending rate might be too high

  return (
    <>
      <section
        className=''
        onMouseOver={() => setHoverId(id)}
        onMouseLeave={() => {
          setHoverId(null);
        }}
      >
        <div className='ring-1 cursor-pointer rindg-purple-700 rounded-full h-14 w-14 relative bg-prple-700 flex-shrink-0'>
          <img
            src={path}
            alt={alt}
            className='rounded-full h-auto w-full object-cover'
          />
          <span className='bg-red-500 text-sm h-5 font-semibold w-5 right-0 top-9 text-center absolute rounded-full text-white'>
            {rate}
          </span>
        </div>

        {/* Hover profile */}
        {hoverId === id ? (
          <div
            className={`absolute ${top} hidden bg-gray-100 md:block ring-1 rounded-sm dark:bg-gray-900 ring-purple-700 shadow-lg z-50 w-64 h-auto p-3`}
          >
            <div className='flex justify-between items-center'>
              <img
                src={path}
                alt={alt}
                className='rounded-full object-cover w-20 h-20'
              />

              {
                // ! Following
                following ? (
                  <button
                    onClick={() => unfollowUser(id)}
                    className='ring-1 font-semibold ring-purple-400 px-5 py-2 text-sm rounded-md bg-purple-700 text-white hover:bg-purple-800'
                  >
                    ✔ Following
                  </button>
                ) : (
                  <button
                    onClick={() => followUser(id)}
                    className='ring-1 font-semibold ring-purple-400 px-5 py-2 text-sm rounded-md bg-purple-700 text-white hover:bg-purple-800'
                  >
                    + Follow
                  </button>
                )
              }
            </div>

            <section>
              <h3 className='mt-5 dark:text-gray-300'>
                {first_name} {last_name} {verified && <span>✔</span>}
                {verified && (
                  <span className='ml-2 text-xs text-purple-500'>Verified</span>
                )}
              </h3>
              <span className='text-gray-500 dark:text-gray-400 text-sm'>
                Backend Developer
              </span>
              <div className='text-xs'>
                <span className='text-purple-500'>{hooksCount} Hooks</span>
                {"﹒"}
                <span className=' text-purple-500'>
                  {followersCount} followers
                </span>
                {"﹒"}
                <span className=' text-purple-500'>
                  {followingCount} following
                </span>
              </div>

              {/* send hook request */}
              <button className='mt-3 w-full ring-1 font-semibold ring-purple-400 px-5 py-2 text-sm rounded-md bg-purple-700 text-white hover:bg-purple-800'>
                Send Hook Request
              </button>
            </section>
          </div>
        ) : null}
      </section>
    </>
  );
};
