import React, { useEffect, useState } from "react";
import { ContentCard } from "../../../cards/ContentCard";
import { ContentCardSkeleton } from "../../../cards/ContentCardSkeleton";

export const HookCategoryCardWidget = () => {
  const [isFetchingHookCategories, setIsFetchingHookCategories] =
    useState(true);
  const [hookCategories, setHookCategories] = useState(null);

  const hookCategoriesSample = [
    {
      id: "101",
      name: "Front-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: true,
    },
    {
      id: "102",
      name: "Back-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: false,
    },
    {
      id: "103",
      name: "Product Management",
      coverImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      isFollowing: true,
    },
    {
      id: "104",
      name: "Block-End Development",
      coverImage:
        "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      isFollowing: false,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setHookCategories(hookCategoriesSample);
      setIsFetchingHookCategories(false);
    }, 3000);
  }, []);

  const handleFollow = (id) => {
    const hookCategoriesArray = [...hookCategories];
    const index = hookCategoriesArray.findIndex((i) => i.id === id);
    hookCategoriesArray[index].isFollowing =
      !hookCategoriesArray[index].isFollowing;
    setHookCategories(hookCategoriesArray);
  };

  return (
    <React.Fragment>
      {isFetchingHookCategories && <ContentCardSkeleton count={4} />}
      <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {isFetchingHookCategories ||
          hookCategories?.map(({ id, name, coverImage, isFollowing }) => {
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
    </React.Fragment>
  );
};
