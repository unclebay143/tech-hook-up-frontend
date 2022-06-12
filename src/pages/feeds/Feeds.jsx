import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HookCard } from "../../components/hookcard/HookCard";
import { NewHookLoader } from "../../components/loader/NewHookLoader";
import FeedContext from "../../context/feedContext/feedContext";
import HookContext from "../../context/hookContext/hookContext";
import UserContext from "../../context/user-context/userContext";
import FeedService from "../../service/feeds.service";
import UserService from "../../service/user.service";
import { HookFormModal } from "../new-hook-card/HookFormModal";
import { FeedImageRings } from "./FeedImageRings";
import { HookFeedCategory } from "./HookFeedCategory";

export const Feeds = () => {
  const { users, loadUsers } = useContext(UserContext);
  const { feeds, loadFeeds } = useContext(FeedContext);
  const { isPublishing } = useContext(FeedContext);
  const [searchParams, setSearchParam] = useSearchParams();

  const shouldOpenCreateModal = searchParams.get("create");
  let pageBody = document.body;
  // Hide body scroll on modal open
  if (shouldOpenCreateModal) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }

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

  return (
    <>
      <div className='h-screen overflow-y-scroll border-gray-200 text-custom-light-white pt-7 col-span-full lg:col-span-3 scrollbar-hide dark:bg-gray-900 border-x dark:border-gray-800'>
        <FeedImageRings users={users} />
        {/* Hooks feed */}
        <section className='px-5'>
          <HookFeedCategory />
          {isPublishing && <NewHookLoader />}
          <div className='flex items-center justify-between my-7'>
            <h3 className='text-md dark:text-gray-300 dark:font-semibold'>
              My Feeds
            </h3>
            <Link
              to={{ pathname: "/", search: "?create=true" }}
              className='px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'
            >
              Create +
            </Link>
          </div>
          <section className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            <HookCard data={[...feeds, ...feeds]} sliceStart={0} sliceEnd={2} />
          </section>
          <section className='grid grid-cols-1 mb-10 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-1 2xl:grid-cols-2'>
              <HookCard data={feeds} sliceStart={0} sliceEnd={2} slice />
            </div>
            <div className='mt-5 lg:pl-3 lg:mt-0'>
              <article className='h-56 p-4 rounded-md w-62 lg:h-full custom-yellow-bg'>
                <h3>{feeds[1]?.first_name}</h3>
                <p> {feeds[1]?.first_name} </p>
              </article>
            </div>
          </section>
        </section>
      </div>

      {/* // New Hook Form - Modal */}
      {shouldOpenCreateModal && <HookFormModal />}
    </>
  );
};
