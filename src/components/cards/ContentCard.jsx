import React from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";

export const ContentCard = ({
  title,
  description,
  coverImage,
  iconText,
  handleClick,
  isFollowing,
  imageAltText,
}) => {
  return (
    <React.Fragment>
      <div className='flex items-center justify-between mb-2 rounded-md rounded-tl-lg rounded-bl-lg shadow-sm cursor-pointer hover:bg-gray-200 dark:bg-gray-700'>
        <section className='flex items-center'>
          <img
            src={
              coverImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PdMFDGZbumEASQeqk0PyEqsRIH0O-4s4H2CelWTRvgkUSBzbL12EH6bGEdVc8iyyzL0&usqp=CAU"
            }
            alt={imageAltText || title}
            className='object-cover w-16 h-16 rounded-tl-lg rounded-bl-lg'
          />
          <div className='ml-3'>
            <h3 className='text-sm font-semibold text-gray-800 capitalize dark:text-gray-100'>
              {title}
            </h3>
            <p className='text-sm dark:text-gray-100'>{description}</p>
          </div>
        </section>

        {iconText ? (
          <div
            className='flex items-center justify-center p-1 mr-5 text-sm font-semibold tracking-wide text-purple-700 bg-gray-300 rounded-md w-28 hover:bg-gray-400'
            onClick={() => handleClick()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 mr-2'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              {isFollowing ? (
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              )}
            </svg>
            <span>{iconText}</span>
          </div>
        ) : (
          <div
            className='p-1 mr-5 bg-gray-300 rounded-full hover:bg-gray-400'
            onClick={() => handleClick()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`w-5 h-5 text-gray-700 ${
                isFollowing && "text-purple-800"
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              {isFollowing ? (
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              )}
            </svg>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
