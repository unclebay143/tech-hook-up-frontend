import React, { useEffect } from "react";
const arrayOfTags = [
  "React",
  "Css",
  "JavaScript",
  "Php",
  "Backend",
  "Frontend",
  "Blockchain",
  "Web3",
  "Product management",
  "Technical writing",
  "Github",
  "Java",
  "Python",
  "C++",
  "C#",
  "Ruby",
  "Swift",
  "Kotlin",
  "Rust",
  "Elixir",
  "Scala",
  "Haskell",
  "Erlang",
  "Clojure",
  "Elm",
  "Go",
  "Rust",
  "Angular",
  "Vue",
  "React Native",
  "Flutter",
  "Electron",
  "Typescript",
  "Node",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL",
  "NoSQL",
  "GraphQL",
  "Apollo",
  "Apollo GraphQL",
  "Apollo Client",
  "Apollo Server",
  "Apollo Engine",
  "Apollo Analytics",
];
export const OnboardingStepTwo = (props) => {
  const { followingTags, setFollowingTags } = props;
  const [trends, setTags] = React.useState(arrayOfTags);

  useEffect(() => {
    setTags(arrayOfTags);
  }, []);

  return (
    <div className='flex flex-row flex-wrap px-2'>
      {trends.map((track, index) => {
        const alreadyFollowing = followingTags.includes(track.toLowerCase());
        return (
          <TagsButton
            alreadyFollowing={alreadyFollowing}
            track={track}
            key={`track-${track}-${index}`}
            setFollowingTags={setFollowingTags}
            followingTags={followingTags}
          />
        );
      })}
    </div>
  );
};

export const TagsButton = ({
  track,
  alreadyFollowing,
  followingTags,
  setFollowingTags,
}) => {
  const [isFollowing, setIsFollowing] = React.useState(alreadyFollowing);

  const handleTagsChange = (alreadyFollowing, track) => {
    if (alreadyFollowing) {
      setIsFollowing(false);
      setFollowingTags(followingTags.filter((t) => t !== track));
    } else {
      setFollowingTags([...followingTags, track]);
      setIsFollowing(true);
    }
  };

  return (
    <div
      className={`${
        isFollowing
          ? "bg-purple-400 text-white"
          : "text-purple-500 border border-purple-500"
      } flex flex-row items-center p-2 mb-2 mr-2 text-sm  rounded-full button-primary small`}
      onClick={() => handleTagsChange(isFollowing, track)}
      role='button'
    >
      <span className='mx-2'>{track}</span>
      <div className='w-4 h-4'>
        {isFollowing && (
          <button data-index={0}>
            <svg className='w-4 h-4 fill-current' viewBox='0 0 320 512'>
              <path d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z' />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
