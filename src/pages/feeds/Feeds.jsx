import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DayTimeGreetings } from "../../components/greetings/DayTimeGreetings";
import { HookCard } from "../../components/hook-card/HookCard";
import HookCardSkeleton from "../../components/hook-card/HookCardSkeleton";
import { NewHookLoader } from "../../components/loader/NewHookLoader";
import { HookCategoryCardWidget } from "../../components/widgets/category-widgets/hook-category-widget/HookCategoryCardWidget";
import FeedContext from "../../helper/context/feedContext/feedContext";
import UserContext from "../../helper/context/user-context/userContext";
import FeedService from "../../helper/service/feeds.service";
import UserService from "../../helper/service/user.service";
import { HookFormModal } from "../new-hook-card/HookFormModal";
import { FeedImageRings } from "./FeedImageRings";

export const Feeds = () => {
  const { user, users, loadUsers, loadUserProfile } = useContext(UserContext);
  const [isFetchingUsers, setIsFetchingUsers] = useState(true);
  const { feeds, loadFeeds } = useContext(FeedContext);
  const { isPublishing } = useContext(FeedContext);
  const [searchParams, setSearchParam] = useSearchParams();
  const [isFetchingFeeds, setIsFetchingFeeds] = useState(true);

  const shouldOpenCreateModal = searchParams.get("create");
  let pageBody = document.body;
  // Hide body scroll on modal open
  if (shouldOpenCreateModal) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }

  useEffect(() => {
    setTimeout(() => {
      // Self invoking function to load users on page load
      (async function () {
        const res = await Promise.all([
          UserService.fetchUsers(1), // page 1
          UserService.fetchUsers(2), // page 2
        ]);

        loadUsers([...res[0], ...res[1]]);
        setIsFetchingUsers(false);
      })();
    }, 3000);

    // // Load user profile
    // UserService.loadProfileByJWT()
    //   .then((response) => {
    //     loadUserProfile(response);
    //   })
    //   .catch((error) => console.log(error));

    // loadUsers cause infinite loop
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // Self invoking function to load feeds on page load
      (async function () {
        const res = await FeedService.usersFeed();
        loadFeeds(res);
      })();
      setIsFetchingFeeds(false);
    }, 3000); // Todo wait for 3 seconds before loading feeds - remove setimeout when we have real data

    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className='h-screen overflow-y-scroll border-gray-200 text-custom-light-white pt-7 col-span-full lg:col-span-3 scrollbar-hide dark:bg-gray-900 border-x dark:border-gray-800'>
        <FeedImageRings users={users} isFetchingUsers={isFetchingUsers} />
        {/* Hooks feed */}
        <section className='px-5'>
          <DayTimeGreetings />
          <HookCategoryCardWidget />
          {isPublishing && <NewHookLoader />}
          <div className='flex items-center justify-between my-7'>
            <h3 className='font-semibold text-md dark:text-gray-300'>
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
            {isFetchingFeeds && <HookCardSkeleton count={8} />}
            {isFetchingFeeds || <HookCard data={[...feeds, ...feeds]} />}
          </section>
        </section>
      </div>

      {/* // New Hook Form - Modal */}
      {shouldOpenCreateModal && <HookFormModal />}
    </React.Fragment>
  );
};
