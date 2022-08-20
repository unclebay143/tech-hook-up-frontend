import React, { useContext, useEffect, useState } from "react";
import { ContentCard } from "../../../../components/cards/ContentCard";
import { TagsCardWidgetSkeleton } from "../../../../components/widgets/tags-widgets/TagsCardWidgetSkeleton";
import UserContext from "../../../../helper/context/user-context/userContext";
import UserService from "../../../../helper/service/user.service";
import { ExploreSubHeading } from "../../../../pages/explore/ExploreSubHeading";

export const ExploreNewUsers = () => {
  const { users, loadUsers, followUser, unfollowUser } =
    useContext(UserContext);
  const [isFetchingUsers, setIsFetchingUsers] = useState(true);

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

    // loadUsers cause infinite loop
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <section className='mt-5'>
        <ExploreSubHeading heading='People you may know' hideLink />
        {/* LOADING SKELETON */}

        <section className='grid grid-cols-1 gap-5 md:grid-cols-1'>
          {isFetchingUsers && <TagsCardWidgetSkeleton count={6} />}
          {isFetchingUsers ||
            users
              ?.slice(0, 10)
              .map(
                ({
                  id,
                  avatar,
                  first_name,
                  techRole,
                  last_name,
                  following,
                }) => {
                  return (
                    <ContentCard
                      key={id}
                      title={first_name + " " + last_name}
                      description={techRole}
                      coverImage={avatar}
                      iconText={following ? "Following" : "Follow"}
                      isFollowing={following}
                      handleClick={() =>
                        following ? unfollowUser(id) : followUser(id)
                      }
                    />
                  );
                }
              )}

          <button className='mt-5 font-semibold text-gray-800 text-md dark:text-gray-300'>
            End of page...View more
          </button>
        </section>
      </section>
    </React.Fragment>
  );
};
