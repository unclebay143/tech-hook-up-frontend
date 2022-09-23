import React, { useEffect } from "react";

const arrayOfSuggestedUsers = [
  {
    fullName: "John Doe",
    userName: "johndoe",
    avatar: "https://avatars0.githubusercontent.com/u/17098281?s=460&v=4",
  },
  {
    fullName: "Ayodele Samuel Adebayo",
    userName: "unclebigbay",
    avatar: "https://github.com/unclebay143.png",
  },
  {
    fullName: "Elizabeth Oluwaseun",
    userName: "elizabetholuwaseun",
    avatar: "https://avatars0.githubusercontent.com/u/17098281?s=460&v=4",
  },
  {
    fullName: "John Doe",
    userName: "johndoe",
    avatar: "https://avatars0.githubusercontent.com/u/17098281?s=460&v=4",
  },
];

export const OnboardingStepThree = (props) => {
  const { followingUsers, setFollowingUsers } = props;
  const [suggestedUsers, setSuggestedUsers] = React.useState(
    arrayOfSuggestedUsers
  );

  return (
    <div className='grid grid-cols-1 gap-5 px-2 md:grid-cols-2 lg:grid-cols-3'>
      {suggestedUsers.map(({ fullName, userName, avatar }) => {
        const alreadyFollowing = followingUsers.includes(userName);
        return (
          <SuggestedUsers
            key={userName}
            fullName={fullName}
            alreadyFollowing={alreadyFollowing}
            setFollowingUsers={setFollowingUsers}
            followingUsers={followingUsers}
            avatar={avatar}
          />
        );
      })}
    </div>
  );
};

export const SuggestedUsers = ({
  alreadyFollowing,
  setFollowingUsers,
  fullName,
  userName,
  followingUsers,
  avatar,
}) => {
  const [isFollowing, setIsFollowing] = React.useState(alreadyFollowing);
  return (
    <div className='flex items-center justify-between gap-5 p-4 bg-gray-100 rounded-md'>
      <section className='flex items-center'>
        <div className='w-10 h-10 mr-4 overflow-hidden rounded-full'>
          <img src={avatar} className='block object-cover w-full h-full' />
        </div>
        <div className=''>
          <h2 className='text-sm '>
            {fullName.split(" ").splice(0, 2).join(" ")}
          </h2>
        </div>
      </section>

      <button
        className='text-sm text-blue-500'
        onClick={() => {
          if (isFollowing) {
            setFollowingUsers(followingUsers.filter((f) => f !== userName));
            setIsFollowing(false);
          } else {
            setFollowingUsers([...followingUsers, userName]);
            setIsFollowing(true);
          }
        }}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};
