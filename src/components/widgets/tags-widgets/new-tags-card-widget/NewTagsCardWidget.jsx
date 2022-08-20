import React from "react";
import { ExploreSubHeading } from "../../../../pages/explore/ExploreSubHeading";
import { ContentCard } from "../../../cards/ContentCard";
import { TagsCardWidgetSkeleton } from "../TagsCardWidgetSkeleton";

export const NewTagsCardWidget = ({
  hookTags,
  handleFollow,
  isFetchingTags,
}) => {
  return (
    <React.Fragment>
      <section className='mt-5'>
        <ExploreSubHeading heading='Newly Added Tags' hideLink={true} />

        <section className='grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-2'>
          {/* loader */}
          {isFetchingTags && <TagsCardWidgetSkeleton count={6} />}
          {isFetchingTags ||
            hookTags?.map(({ id, name, coverImage, isFollowing }) => {
              return (
                <ContentCard
                  key={id}
                  title={name}
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
