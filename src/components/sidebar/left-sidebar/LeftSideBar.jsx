import React from "react";
import { Link } from "react-router-dom";

export const LeftSideBar = () => {
  const linkClasses =
    "flex items-center text-xs xl:text-sm dark:text-gray-500 hover:animate-pulse";
  const listClasses = "mb-4";
  const linkIconClasses = "h-5 w-5 text-gray-400 hover:text-gray-300";
  const ActiveLinkClasses = "h-5 w-5 dark:text-gray-300";

  return (
    <aside className='hidden lg:block px-7 py-6 custom-white-bg xl:min-w-max dark:bg-gray-900'>
      {/* <section className='px-7 flex items-center'>
        <div className='shadow-2xl bg-white rounded-full p-3 mr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-purple-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
            />
          </svg>
        </div>

        <h1 className='text-green-400 text-2xl font-bold'>
          <span className='text-purple-700'>Tech</span>
          HookUp
        </h1>
      </section> */}

      {/* Links */}

      <nav className='mt-10 xl:px-7'>
        <section className='pt-5'>
          {/* <label className='text-purple-700 mb-5 block font-semibold text-md'>
            Account
          </label> */}
          <ul>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='shadow-2xl bg-white rounded-full p-3 mr-2 dark:bg-gray-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={ActiveLinkClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                </div>

                <span className='ml-2 text-md hover:text-gray-600 dark:text-gray-300 font-semibold'>
                  Home
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='shadow-2xl rounded-full p-3 mr-2 bg-white dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='ml-2 text-md hover:text-gray-800 text-gray-600 dark:text-gray-400'>
                  My Profile
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='shadow-2xl rounded-full p-3 mr-2 bg-white dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                  </svg>
                </div>
                <span className='ml-2 text-md hover:text-gray-800 text-gray-600 dark:text-gray-400'>
                  My Hooks
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='shadow-2xl rounded-full p-3 mr-2 bg-white dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
                  </svg>
                </div>
                <span className='ml-2 text-md hover:text-gray-800 text-gray-600 dark:text-gray-400'>
                  Requests
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='shadow-2xl rounded-full p-3 mr-2 bg-white dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
                  </svg>
                </div>
                <span className='ml-2 text-md hover:text-gray-800 text-gray-600 dark:text-gray-400'>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </section>

        {/*  */}
      </nav>
    </aside>
  );
};
