import React from "react";
import { Link } from "react-router-dom";
import { TrendingTags } from "../../trending-tags/TrendingTags";

export const LeftSideBar = () => {
  const linkClasses =
    "flex items-center text-xs xl:text-sm dark:text-gray-500 hover:animate-pulse";
  const listClasses = "mb-4";
  const linkIconClasses = "h-5 w-5 text-gray-400 hover:text-gray-300";
  const ActiveLinkClasses = "h-5 w-5 dark:text-gray-300";

  return (
    <aside className='hidden lg:block pl-7 custom-white-bg dark:bg-gray-900'>
      <nav className='mt-5 xl:px-7'>
        <section className='pt-5'>
          <ul>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={ActiveLinkClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                </div>

                <span className='ml-2 font-semibold text-md hover:text-gray-600 dark:text-gray-300'>
                  Home
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-700'>
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
                <span className='ml-2 text-gray-600 text-md hover:text-gray-800 dark:text-gray-400'>
                  My Profile
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                  </svg>
                </div>
                <span className='ml-2 text-gray-600 text-md hover:text-gray-800 dark:text-gray-400'>
                  My Hooks
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
                  </svg>
                </div>
                <span className='ml-2 text-gray-600 text-md hover:text-gray-800 dark:text-gray-400'>
                  Requests
                </span>
              </Link>
            </li>
            <li className={listClasses}>
              <Link to={"/"} className={linkClasses}>
                <div className='p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={linkIconClasses}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
                  </svg>
                </div>
                <span className='ml-2 text-gray-600 text-md hover:text-gray-800 dark:text-gray-400'>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </section>

        {/*  */}
        <TrendingTags />

        {/* leftside footer */}
        <section className='pl-2 mt-40'>
          <span className='text-xs text-gray-600 xl:text-sm dark:text-gray-300'>
            &copy; 2022 Tech Hookup
          </span>
          {/* Sidebar Social Icons */}
          <section className='flex gap-4 mt-5 cursor-pointer'>
            {/* Facebook-Meta */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='w-4 h-4 text-gray-600 xl:w-5 xl:h-5 dark:text-gray-300 bi bi-meta'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z'
              />
            </svg>

            {/* LinkedIn */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='w-4 h-4 text-gray-600 xl:w-5 xl:h-5 dark:text-gray-300 bi bi-linkedin'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
            </svg>

            {/* Instagram */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='w-4 h-4 text-gray-600 xl:w-5 xl:h-5 dark:text-gray-300 bi bi-instagram'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
            </svg>

            {/* Github */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='w-4 h-4 text-gray-600 xl:w-5 xl:h-5 dark:text-gray-300 bi bi-github'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </section>
        </section>
      </nav>
    </aside>
  );
};
