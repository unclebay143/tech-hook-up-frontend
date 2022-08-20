import React from "react";
import { ExploreNewUsers } from "./explore-new-users/ExploreNewUsers";
import { ExploreTagsWidgetContainer } from "./explore-tags-widget/ExploreTagsWidgetContainer";

export const ExploreTrends = () => {
  return (
    <>
      <ExploreTagsWidgetContainer />
      <ExploreNewUsers />
    </>
  );
};
