import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "../../theme/ThemeToggle";

export const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <React.Fragment>
      <section className='flex justify-between px-5 py-5 border-b border-gray-200 xl:px-7 dark:border-gray-800 custom-white-bg dark:bg-gray-900'>
        <section className='flex items-center'>
          <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-purple-700 dark:text-white'
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

          <h1 className='text-2xl font-bold text-green-400'>
            <span className='text-purple-700'>Tech</span>
            HookUp
          </h1>
        </section>

        {/*  */}

        <section className='flex items-center justify-end'>
          <div className='mr-4'>
            <ThemeToggle />
          </div>

          {/* Notification */}
          <div className='relative mr-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              // animate-pulse for active state
              className='w-5 h-5 cursor-pointer dark:text-gray-300 dark:hover:text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
            </svg>
            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
              1
            </span>
          </div>

          <section>
            {/* profile image */}
            <div
              className='w-10 h-10 rounded-full cursor-pointer ring-1ring-purple-700'
              onClick={() => setOpenMenu(!openMenu)}
            >
              <img
                // src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880'
                src='https://github.com/unclebay143.png'
                alt='profile'
                className='object-cover w-full h-auto rounded-full'
              />
            </div>
            {/* dropdown */}
            {openMenu && (
              <div
                className='absolute right-0 z-50 w-56 mt-2 mr-5 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:border dark:border-gray-800 dark:divide-gray-800 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
                tabIndex={-1}
              >
                <div className='hidden py-1' role='none'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500'
                    role='menuitem'
                    tabIndex={-1}
                    id='menu-item-0'
                  >
                    Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500'
                    role='menuitem'
                    tabIndex={-1}
                    id='menu-item-1'
                  >
                    Duplicate
                  </a>
                </div>

                <div className='py-1' role='none'>
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className='flex items-center w-full gap-1 px-4 py-2 text-sm font-semibold text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-500'
                    role='menuitem'
                    tabIndex={-1}
                    id='menu-item-6'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};
