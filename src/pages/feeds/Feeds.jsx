import React, { useContext, useEffect, useId } from "react";
import { ImageRing } from "../../components/images/ImageRing";
import FeedContext from "../../context/feedContext/feedContext";
import UserContext from "../../context/user-context/userContext";
import FeedService from "../../service/feeds.service";
import UserService from "../../service/user.service";
import { FeedImageRings } from "./FeedImageRings";
import { HookFeedCategory } from "./HookFeedCategory";

export const Feeds = () => {
  const keyId = useId();
  const { users, loadUsers } = useContext(UserContext);
  const { feeds, loadFeeds } = useContext(FeedContext);

  useEffect(() => {
    // Self invoking function to load users on page load
    (async function () {
      const res = await Promise.all([
        UserService.fetchUsers("1"), // page 1
        UserService.fetchUsers("2"), // page 2
      ]);

      loadUsers([...res[0], ...res[1]]);
    })();

    // loadUsers cause infinite loop
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Self invoking function to load feeds on page load
    (async function () {
      const res = await FeedService.usersFeed();
      loadFeeds(res);
    })();
    // eslint-disable-next-line
  }, []);

  console.log(feeds);

  return (
    <div className='text-custom-light-white pt-7 col-span-full lg:col-span-3 overflow-y-scroll scrollbar-hide h-screen dark:bg-gray-900 border-x dark:border-gray-800 border-gray-200'>
      <FeedImageRings users={users} />
      {/* Hooks feed */}
      <section className='px-5'>
        <HookFeedCategory />
        <div className='flex items-center justify-between my-7'>
          <h3 className='text-md dark:text-gray-300 dark:font-semibold'>
            My Feeds
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
      '
          >
            Create +
          </button>
        </div>
        <section className='my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
          {[...feeds, ...feeds]?.map((feed, index) => {
            const { description, author, authorBrief, image, bg, id, data } =
              feed;

            return (
              //   <article
              //   className={`h-56 w-62 bg-gray-200 shadow-sm hover:shadow-md cursor-pointer  rounded-md p-4`}
              //   key={index}
              // >
              //   <section className='flex relative'>
              //     <img
              //       src={category.coverImage}
              //       alt={category.name}
              //       className='h-10 w-10 rounded-full object-cover'
              //     />
              //     <div className='ml-3'>
              //       <h3 className='text-sm text-gray-800 font-semibold'>
              //         {category.name}
              //       </h3>
              //     </div>
              //   </section>
              // </article>
              <article
                className={`h-56 w-62 ${bg} hover:bg-gray-200 shadow-sm hover:shadow-md cursor-pointer  rounded-md p-4 dark:hover:shadow-lg dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}
                key={keyId + "3" + index}
              >
                <section className='flex relative'>
                  {/* <img
                    src={image}
                    alt={author}
                    className='h-10 w-10 rounded-full object-cover'
                  /> */}

                  <ImageRing
                    path={image}
                    alt={author}
                    id={id}
                    top='top-16'
                    data={data}
                  />
                  <div className='ml-3'>
                    <h3 className='text-sm text-gray-800 dark:text-gray-100 font-semibold'>
                      {author}
                    </h3>
                    <p className='text-xs text-gray-600 dark:text-gray-300'>
                      {authorBrief}{" "}
                    </p>
                  </div>
                </section>

                <section className='mt-5 pl-3'>
                  <p className='text-sm text-gray-800 dark:text-gray-300'>
                    {description}
                  </p>
                </section>

                <section className='pl-3 mt-5 mx-auto'>
                  <button className='bg-gray-900 text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-gray-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
                    Apply
                  </button>

                  {/* <button className='ml-3 bg-purple-700 text-white text-xs font-semibold py-2 px-4 rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
                  View
                </button> */}
                </section>
              </article>
            );
          })}
        </section>
        <section className='hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2'>
          <div className='grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-2 gap-5'>
            {feeds?.slice(0, 2)?.map(({ title, description, bg }, index) => (
              <article
                className={`h-56 w-62 ${bg} rounded-md p-4 text-white`}
                key={keyId + "4" + index}
              >
                <h3>{title}</h3>
                <p> {description} </p>
              </article>
            ))}
          </div>
          <div className='lg:pl-3 mt-5 lg:mt-0'>
            <article className='h-56 w-62 lg:h-full custom-yellow-bg rounded-md p-4'>
              <h3>{feeds[1]?.first_name}</h3>
              <p> {feeds[1]?.first_name} </p>
            </article>
          </div>
        </section>

        <section className='hidden my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
          {feeds?.map(({ first_name }, index) => (
            <article
              className='h-56 w-62 custom-yellow-bg ring-2 rounded-xl p-4'
              key={keyId + "5" + index}
            >
              <h3>{first_name}</h3>
              <p> {first_name} </p>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
};
