import React, { useContext, useEffect, useState } from "react";
import { NewTagsCardWidget } from "../../../../components/widgets/tags-widgets/new-tags-card-widget/NewTagsCardWidget";
import { TrendingTagsCardWidget } from "../../../../components/widgets/tags-widgets/trending-tags-card-widget/TrendingTagsCardWidget";
import TagContext from "../../../../helper/context/tagContext/tagContext";

export const ExploreTagsWidgetContainer = () => {
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
      <TrendingTagsCardWidget
        hookTags={hookTags}
        filterBy='trending'
        handleFollow={handleFollow}
        isFetchingTags={isFetchingTags}
      />

      <NewTagsCardWidget
        hookTags={hookTags}
        filterBy='trending'
        handleFollow={handleFollow}
        isFetchingTags={isFetchingTags}
      />
    </React.Fragment>
  );
};
