import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectButton } from "../../components/buttons/ConnectButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import HotToast from "../../helper/notification/hot-toast";
import axiosConfig from "../../helper/service/axios.config";
import UserService from "../../helper/service/user.service";
import UserSchema from "../../helper/validation/user.schema";
import styles from "./signup.module.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [signingUp, setSigningUp] = React.useState(false);
  const [knownAccount, setKnownAccount] = React.useState(true);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [userNameAvailability, setUserNameAvailability] = React.useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    setSigningUp(true);
    setTimeout(() => {
      setSigningUp(false);
      navigate("/onboard");
    }, 2000);
  };

  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        callback.apply(this, args);
      }, wait);
    };
  }
  // function to check if the username is taken
  const checkUsername = async (username) => {
    try {
      if (username.length < 4) return; // if the username is less than 4 characters, don't check

      //
      if (username.match(/\s/g)) {
        return setUserNameAvailability({
          status: false,
          message: "Username cannot contain spaces",
        });
      }
      if (username.match(/[^a-zA-Z0-9]/g)) {
        return setUserNameAvailability({
          status: false,
          message: "Username can only contain alphanumeric characters.",
        }); // if the username contains spaces or special characters, don't check
      }

      setUserNameAvailability({
        status: "checking",
        message: "checking availability",
      });

      const response = await UserService.checkUserNameAvailability(username);
      setUserNameAvailability(response.data); // status and message
    } catch (error) {
      setUserNameAvailability(error.response.data); // status and message
    }
  };
  return (
    <React.Fragment>
      <div className={`${styles.container} min-h-screen`}>
        {signingUp ? (
          <section className='flex items-center justify-center'>
            <h3 className='text-lg text-white'>Signing up...</h3>
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
            <h1 className='text-xl font-bold dark:text-white'>
              Create account
            </h1>
            <Formik
              initialValues={{
                userName: "",
                passWord: "",
                confirmPassWord: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                UserService.signUpWithPassword(values, setSubmitting).then(
                  (res) => {
                    if (res.status === 200) {
                      navigate("/onboard");
                    }
                  }
                );
              }}
              validationSchema={UserSchema.SignUpWithPasswordSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
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
                      className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                        (errors.userName && touched.userName) ||
                        (userNameAvailability?.status === false &&
                          "border-red-500")
                      } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                      id='username'
                      type='text'
                      placeholder='Username'
                      autoComplete='off'
                      name='userName'
                      onChange={handleChange}
                      onKeyUp={debounce(
                        () => checkUsername(values.userName),
                        1000
                      )}
                      value={values.userName}
                      onBlur={handleBlur}
                    />
                    <span className='text-xs italic'>
                      {userNameAvailability?.status === "checking" && (
                        <p className='text-gray-600 dark:text-gray-400'>
                          Checking availability...
                        </p>
                      )}

                      {values.userName.length > 4 &&
                        userNameAvailability?.status === true && (
                          <p className='text-green-500 '>
                            {userNameAvailability?.message} ✅
                          </p>
                        )}

                      {values.userName.length > 4 &&
                        userNameAvailability?.status === false && (
                          <p className='text-red-500 '>
                            {userNameAvailability?.message} ❌
                          </p>
                        )}

                      {errors.userName && touched.userName && (
                        <p className='text-red-500'>{errors.userName}</p>
                      )}
                    </span>
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
                      className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                        errors.passWord && touched.passWord && "border-red-500"
                      } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                      id='password'
                      type='password'
                      placeholder='******************'
                      autoComplete='off'
                      name='passWord'
                      onChange={handleChange}
                      value={values.passWord}
                      onBlur={handleBlur}
                    />

                    {errors.passWord && touched.passWord && (
                      <p className='text-xs italic text-red-500'>
                        {errors.passWord}
                      </p>
                    )}
                  </div>
                  <div className='mb-6'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700 dark:text-white'
                      htmlFor='password'
                    >
                      Confirm Password
                    </label>
                    {/* has error: border-red-500 */}
                    <input
                      className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                        errors.confirmPassWord &&
                        touched.confirmPassWord &&
                        "border-red-500"
                      } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                      id='password'
                      type='password'
                      placeholder='******************'
                      autoComplete='off'
                      name='confirmPassWord'
                      onChange={handleChange}
                      value={values.confirmPassWord}
                      onBlur={handleBlur}
                    />

                    {errors.confirmPassWord && touched.confirmPassWord && (
                      <p className='text-xs italic text-red-500'>
                        {errors.confirmPassWord}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      // onClick={handleSignUp}
                      type='submit'
                      className={`${
                        isSubmitting ||
                        (userNameAvailability?.status === false &&
                          "bg-purple-400 hover:bg-purple-400")
                      } w-full px-4 py-2 text-sm font-bold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:shadow-outline`}
                      disabled={
                        isSubmitting || userNameAvailability?.status === false
                      }
                    >
                      {isSubmitting ? "Signing up..." : "Sign up"}
                    </button>
                    <Link
                      className='inline-block mt-3 text-sm font-bold text-purple-500 align-baseline dark:text-white hover:text-purple-800'
                      to='/login'
                    >
                      Already Have an Account? Login
                    </Link>
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
                      <GoogleButton authType={"signup"} />
                      <ConnectButton handleClick={handleSignUp} />
                    </div>
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
