import React from "react";
import { ExploreSubHeading } from "../../../../pages/explore/ExploreSubHeading";
import { ContentCard } from "../../../cards/ContentCard";
import { ContentCardSkeleton } from "../../../cards/ContentCardSkeleton";
import { TagsCardWidgetSkeleton } from "../TagsCardWidgetSkeleton";

export const TrendingTagsCardWidget = ({
  hookTags,
  handleFollow,
  isFetchingTags,
}) => {
  return (
    <React.Fragment>
      <section className='mt-5'>
        <ExploreSubHeading
          heading='Trending Tags'
          linkText='See all tags'
          link='/explore/tags'
        />
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {/* LOADING SKELETON */}
          {isFetchingTags && <ContentCardSkeleton count={6} />}
          {isFetchingTags ||
            hookTags?.map(({ id, name, coverImage, isFollowing }, index) => {
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
