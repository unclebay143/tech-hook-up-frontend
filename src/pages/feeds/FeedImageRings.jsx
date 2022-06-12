import React, { useId } from "react";
import { ImageRing } from "../../components/images/ImageRing";

export const FeedImageRings = (props) => {
  const { users } = props;
  const keyId = useId();

  return (
    <React.Fragment>
      <section className='flex gap-4 p-4 overflow-x-hidden border-b h-28 hover:overflow-x-scroll dark:border-gray-800'>
        {[...users, ...users].slice(0, 16)?.map((user, index) => {
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
