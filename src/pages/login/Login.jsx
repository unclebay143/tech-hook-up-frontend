import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectButton } from "../../components/buttons/ConnectButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import UserService from "../../helper/service/user.service";
import styles from "./login.module.css";
export const Login = () => {
  const navigate = useNavigate();
  const [signingIn, setSigningIn] = React.useState(false);
  const [knownAccount, setKnownAccount] = React.useState(true);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSigningIn(true);

    UserService.loginWithPassword();
    // setTimeout(() => {
    //   setSigningIn(false);
    //   navigate("/");
    // }, 2000);
  };
  return (
    <React.Fragment>
      <div className={`${styles.container} min-h-screen`}>
        {signingIn ? (
          <section className='flex items-center justify-center'>
            <h3 className='text-lg text-white'>Signing in...</h3>
            <svg
              role='status'
              className='w-5 h-5 ml-1 animate-spin dark:text-purple-200 fill-purple-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
          </section>
        ) : (
          <section className='w-11/12 p-10 mx-auto bg-white rounded-sm md:w-1/2 lg:w-1/3 2xl:w-1/4 dark:bg-gray-800'>
            <h1 className='text-xl font-bold dark:text-white'>Welcome back</h1>
            {knownAccount && (
              <button className='flex items-center justify-between w-full p-1 px-2 mt-5 border-2 rounded'>
                <div className='flex items-center' onClick={handleLogin}>
                  <div className='w-10 h-10'>
                    <img
                      src='https://github.com/unclebay143.png'
                      alt='profile'
                      className='object-cover w-full h-auto rounded-full'
                    />
                  </div>
                  <h3 className='ml-3 text-sm font-bold text-left dark:text-white'>
                    Continue as:{" "}
                    <span className='font-medium text-purple-700 dark:text-white'>
                      uncle*****@gmail.com
                    </span>
                  </h3>
                </div>

                {/* dropdown */}
                <div className='relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-500'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                  </svg>

                  {openMenu && (
                    <div
                      className='absolute right-0 z-50 w-56 mt-2 -mr-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:border dark:border-gray-800 dark:divide-gray-800 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='menu-button'
                      tabIndex={-1}
                      onClick={() => setKnownAccount(false)}
                    >
                      <div className='py-1' role='none'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-xs text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500'
                          role='menuitem'
                          tabIndex={-1}
                          id='menu-item-0'
                        >
                          Remove account from this device
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            )}

            <Formik
              initialValues={{ userName: "", passWord: "" }}
              onSubmit={(values, { setSubmitting }) => {
                UserService.loginWithPassword(values, setSubmitting);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className='mt-5'>
                  <div className='mb-4'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700 dark:text-white'
                      htmlFor='username'
                    >
                      Username
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='Username'
                      autoComplete='off'
                      name='userName'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-6'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700 dark:text-white'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    {/* has error: border-red-500 */}
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='******************'
                      autoComplete='off'
                      name='passWord'
                      onChange={handleChange}
                    />
                    <p className='hidden text-xs italic text-red-500'>
                      Please choose a password.
                    </p>
                  </div>
                  <div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full px-4 py-2 text-sm font-bold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:shadow-outline'
                    >
                      {isSubmitting ? "Signing In" : "Sign In"}
                    </button>
                    <a
                      className='inline-block mt-2 text-sm font-bold text-purple-500 align-baseline dark:text-white hover:text-purple-800'
                      href='#'
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <div className='flex items-center my-5'>
                    <div className='flex-grow bg bg-gray-300 h-0.5'></div>
                    <div className='flex-grow-0 mx-5 text dark:text-white'>
                      or
                    </div>
                    <div className='flex-grow bg bg-gray-300 h-0.5'></div>
                  </div>
                  <section>
                    <div>
                      <GoogleButton authType={"signin"} />
                      <ConnectButton handleClick={handleLogin} />
                    </div>
                  </section>
                  <section className='text-center'>
                    <Link
                      className='text-sm text-center dark:text-white'
                      to='/signup'
                    >
                      Signup
                    </Link>
                  </section>
                </form>
              )}
            </Formik>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};
