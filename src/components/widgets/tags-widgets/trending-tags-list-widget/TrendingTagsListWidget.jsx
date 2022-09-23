import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingTagsListWidgetSkeleton } from "./TrendingTagsListWidgetSkeleton";

export const TrendingTagsListWidget = () => {
  const [tags, setTags] = useState(null);
  const [isFetchingTags, setIsFetchingTags] = useState(true);
  const tagSamples = [
    {
      name: "React",
      count: 120,
    },
    {
      name: "Node",
      count: 100,
    },
    {
      name: "Express",
      count: 200,
    },
    {
      name: "MongoDB",
      count: 16,
    },
    {
      name: "Mongoose",
      count: 13,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setTags(tagSamples);
      setIsFetchingTags(false);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <section className='mt-10'>
        <section className='flex items-center gap-3'>
          <h3 className='dark:text-gray-300'>Trending Tags</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 dark:text-gray-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
            />
          </svg>
        </section>
        {isFetchingTags && <TrendingTagsListWidgetSkeleton count={5} />}

        {isFetchingTags || (
          <ul className='mt-5 capitalize'>
            {tags
              ?.sort((a, b) => b.count - a.count)
              ?.slice(0, 5)
              ?.map(({ name, count }) => (
                <li className='flex justify-between p-2 rounded cursor-pointer hover:bg-gray-200'>
                  <a
                    href='#'
                    className='text-sm text-gray-500 dark:text-gray-400'
                  >
                    {name}
                  </a>
                  <span className='p-1 text-xs font-bold text-green-400 bg-gray-200 bg-opacity-50 rounded-full dark:bg-gray-600'>
                    +{count}
                  </span>
                </li>
              ))}
            <a
              href='/explore'
              className='p-2 text-sm font-bold text-blue-500 dark:text-blue-400'
            >
              Show More
            </a>
          </ul>
        )}
      </section>
    </React.Fragment>
  );
};
