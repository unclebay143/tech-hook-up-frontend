import React, { useContext, useEffect, useState } from "react";
import { ContentCard } from "../../../components/cards/ContentCard";
import { ContentCardSkeleton } from "../../../components/cards/ContentCardSkeleton";
import TagContext from "../../../helper/context/tagContext/tagContext";
import removeDuplicates from "../../../helper/util/remove-duplicates";
import { ExploreSubHeading } from "../ExploreSubHeading";

export const ExploreTags = () => {
  const [isFetchingTags, setIsFetchingTags] = useState(true);
  const { hookTags, fetchTags } = useContext(TagContext);

  useEffect(() => {
    setTimeout(() => {
      fetchTags();
      setIsFetchingTags(false);
    }, 3000);
  }, []);

  const handleFollow = (id) => {
    const newHookTags = [...hookTags];
    const index = newHookTags.findIndex((i) => i.id === id);
    newHookTags[index].isFollowing = !newHookTags[index].isFollowing;
    // setHookTags(newHookTags);
    // TODO: Implement following tags functionality in context API
  };
  return (
    <React.Fragment>
      <section className='mt-5'>
        <ExploreSubHeading heading="Hook's Tags" hideLink />
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {/* LOADING SKELETON */}
          {isFetchingTags && <ContentCardSkeleton count={6} />}
          {isFetchingTags ||
            removeDuplicates
              .fromArray(hookTags, "name")
              ?.map(({ id, name, coverImage, isFollowing }, index) => {
                return (
                  <ContentCard
                    key={id}
                    title={name}
                    description={`${index} ${
                      index > 1 ? "hooks" : "hook"
                    } this week`}
                    coverImage={coverImage}
                    isFollowing={isFollowing}
                    handleClick={() => handleFollow(id)}
                  />
                );
              })}
        </section>
      </section>
    </React.Fragment>
  );
};
