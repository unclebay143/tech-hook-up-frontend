import React from "react";
import { Link } from "react-router-dom";

export const ExploreSubHeading = ({
  heading = "Explore Sub heading",
  linkText = "See all",
  link = "/",
  hideLink = false,
  description,
}) => {
  return (
    <section className='flex items-center justify-between gap-5 mb-5'>
      <div>
        <h3 className='text-xl font-semibold dark:text-gray-300'>{heading}</h3>
        <p>{description}</p>
      </div>
      {hideLink || (
        <Link
          to={link}
          className='px-2 py-1 text-sm font-bold text-purple-800 border-2 border-purple-800 rounded-full'
        >
          {linkText}
        </Link>
      )}
    </section>
  );
};
