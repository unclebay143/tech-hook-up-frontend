import React, { useContext, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedContext from "../../context/feedContext/feedContext";
import FeedReducer from "../../context/feedContext/feedReducer";
import { IS_PUBLISHING } from "../../context/feedContext/feedTypes";

export const HookFormModal = () => {
  const navigate = useNavigate();
  // text state
  const [text, setText] = React.useState(null);
  const { addNewHook } = useContext(FeedContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHook = {
      id: Math.random() * 199 + "key2",
      author: "Adewale" + " " + "Femi",
      authorBrief: "Backend Developer",
      description: text,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
      link: "https://via.placeholder.com/150",
      count: "4",
      data: {},
    };

    // close modal
    navigate("/");

    // add new hook
    addNewHook(newHook);
  };

  return (
    <div>
      {/* Main modal */}
      <div
        id='defaultModal'
        tabIndex={-1}
        aria-hidden='false'
        className='fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-hidden bg-black bg-opacity-75 md:inset-0 h-modal md:h-full'
      >
        <div className='relative w-full h-full max-w-2xl p-4 pt-16 mx-auto md:h-auto'>
          {/* Modal content */}
          <div className='relative bg-white rounded-sm shadow dark:bg-gray-700'>
            {/* Modal header */}
            <div className='flex items-start justify-between p-4 border-b dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Create a new hook
              </h3>
              <Link
                to={"/"}
                role='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='defaultModal'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </Link>
            </div>
            {/* Modal body */}
            <div className='p-6 space-y-6'>
              <textarea
                maxLength={80}
                onChange={(e) => setText(e.target.value)}
                className='w-full overflow-hidden leading-relaxed text-gray-500 border-none rounded shadow-none text-md focus:outline-none h-60 max-h-60 dark:text-gray-400 dark:bg-gray-800'
                placeholder='What do you want to talk about?'
              ></textarea>
            </div>
            {/* Modal footer */}
            <div className='flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                onClick={handleSubmit}
                disabled={!text}
                className={`${
                  !text
                    ? "bg-gray-200 text-gray-400 hover:bg-gray-300"
                    : "bg-purple-700 hover:bg-purple-800"
                } text-white font-semibold  cursor-pointer focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
