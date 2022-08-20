import React from "react";
import LinkWithActiveClass from "../../components/link/LinkWithActiveClass";

export const ExploreHeader = () => {
  const activeClassName = "border-b-2 border-purple-800 text-purple-800";

  const links = [
    {
      title: "Trending",
      link: "/explore",
    },
    {
      title: "Tags",
      link: "tags",
    },
    {
      title: "Users",
      link: "users",
    },
    {
      title: "Hooks",
      link: "hooks",
    },
  ];

  return (
    <React.Fragment>
      <section className='dark:text-gray-300'>
        <section className='py-16 text-center border-b dark:border-gray-800 '>
          <h1 className='text-3xl font-bold'>
            Explore Tags, Hooks and Trending Categories.
          </h1>
          <p className='w-1/2 mx-auto mt-2 font-medium'>
            Everything that's trending on Tech Hookup is available here on Hook
            Explore.
          </p>
        </section>

        {/* Navigation tab */}
        <section className='border-b pt-7 dark:border-gray-800'>
          <nav className='flex justify-center gap-5 font-bold align-center'>
            {links.map(({ title, link }) => (
              <LinkWithActiveClass
                classNames='pb-3'
                activeClassName={activeClassName}
                to={link}
              >
                {title}
              </LinkWithActiveClass>
            ))}
          </nav>
        </section>
      </section>
    </React.Fragment>
  );
};
