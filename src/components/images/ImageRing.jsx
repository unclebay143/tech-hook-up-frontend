import React, { useContext } from "react";
import UserContext from "../../helper/context/user-context/userContext";

export const ImageRing = ({ id, path, alt, data, top, showRating = true }) => {
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
  // isCheckingProfile
  const [isCheckingProfile, setIsCheckingProfile] = React.useState(false);

  // ! Rending rate might be too high

  return (
    <React.Fragment>
      <section
        onMouseOver={() => setHoverId(id)}
        onMouseLeave={() => {
          setHoverId(null);
        }}
      >
        {/* You can add - ring-purple-700 bg-purple-700 */}
        <div
          className='relative flex-shrink-0 p-1 rounded-full cursor-pointer ring-2 ring-purple-700 h-14 w-14'
          // onClick={() => {
          //   setIsCheckingProfile(!isCheckingProfile);
          // }}
        >
          <img
            src={path}
            alt={alt}
            className='object-cover w-full h-auto rounded-full'
          />

          {showRating && (
            <span className='absolute right-0 w-5 h-5 text-sm font-semibold text-center text-white bg-red-500 rounded-full top-9'>
              {rate}
            </span>
          )}
        </div>

        {/* Hover profile */}
        {hoverId === id || isCheckingProfile ? (
          <div
            className={`absolute ${top} hidden bg-gray-100 md:block ring-1 rounded-sm dark:bg-gray-900 ring-purple-700 shadow-lg z-50 w-64 h-auto p-3`}
          >
            <div className='flex items-center justify-between'>
              <img
                src={path}
                alt={alt}
                className='object-cover w-20 h-20 rounded-full'
              />

              {
                // ! Following
                following ? (
                  <button
                    onClick={() => unfollowUser(id)}
                    className='px-5 py-2 text-sm font-semibold text-white bg-purple-700 rounded-md dark:text-white ring-1 dark:bg-transparent ring-purple-400 hover:bg-purple-800'
                  >
                    ✔ Following
                  </button>
                ) : (
                  <button
                    onClick={() => followUser(id)}
                    className='px-5 py-2 text-sm font-semibold text-white bg-purple-700 rounded-md dark:text-white ring-1 dark:bg-transparent ring-purple-400 hover:bg-purple-800'
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
              <span className='text-sm text-gray-500 dark:text-gray-400'>
                Backend Developer
              </span>
              <div className='text-xs'>
                <span className='text-purple-500'>{hooksCount} Hooks</span>
                {"﹒"}
                <span className='text-purple-500 '>
                  {followersCount} followers
                </span>
                {"﹒"}
                <span className='text-purple-500 '>
                  {followingCount} following
                </span>
              </div>

              {/* send hook request */}
              <button className='w-full px-5 py-2 mt-3 text-sm font-semibold text-white bg-purple-700 rounded-md ring-1 ring-purple-400 hover:bg-purple-800'>
                Send Hook Request
              </button>
            </section>
          </div>
        ) : null}
      </section>
    </React.Fragment>
  );
};
