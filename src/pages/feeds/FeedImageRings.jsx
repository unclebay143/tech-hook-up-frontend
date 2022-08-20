import React, { useId } from "react";
import { ImageRing } from "../../components/images/ImageRing";
import { ImageRingSkeleton } from "../../components/images/ImageRingSkeleton";

export const FeedImageRings = (props) => {
  const { users, isFetchingUsers } = props;
  const keyId = useId();

  return (
    <React.Fragment>
      <section className='flex gap-4 p-4 overflow-x-hidden border-b h-28 hover:overflow-x-scroll dark:border-gray-800'>
        {isFetchingUsers && <ImageRingSkeleton count={16} />}
        {isFetchingUsers ||
          // TODO remove this when we have real data
          [...users, ...users].slice(0, 16)?.map((user, index) => {
            // slice the users array to create a list of 16 users

            const { avatar, first_name, id } = user;
            return (
              <ImageRing
                id={id}
                key={keyId + "1" + index}
                path={avatar}
                alt={first_name}
                count={id}
                data={user}
                top='top-52'
              />
            );
          })}
      </section>
    </React.Fragment>
  );
};
