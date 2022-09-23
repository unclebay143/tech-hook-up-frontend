import { TextField } from "@mui/material";
import React from "react";

export const OnboardingStepOne = (props) => {
  const {
    handleImageChange,
    selectedImage,
    setSelectedImage,
    setName,
    setEmail,
    setGithub,
    setLinkedin,
    setTwitter,
  } = props;
  return (
    <div className='gap-10 pl-2 xl:flex'>
      <div className=''>
        <label
          htmlFor='nameField'
          className='hidden mb-2 text-sm font-semibold text-gray-900 md:block dark:text-gray-300'
        >
          Profile Photo
        </label>
        <div className='flex items-center justify-center mb-6'>
          {selectedImage ? (
            <div className='relative block w-40 h-40 bg-gray-100 rounded-full shadow-xl'>
              <a
                href='https://cdn.hashnode.com/res/hashnode/image/upload/v1660987619275/6vJnj3upw.png'
                target='_blank'
                className='block w-full h-full overflow-hidden rounded-full'
              >
                <img
                  className='block object-cover w-full h-full'
                  src={URL.createObjectURL(selectedImage)}
                />
              </a>
              <button
                className='absolute top-0 right-0 z-10 p-2 text-gray-700 bg-white border rounded-full'
                onClick={() => setSelectedImage(null)}
              >
                <svg className='w-4 h-4 fill-current' viewBox='0 0 448 512'>
                  <path d='M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z' />
                </svg>
              </button>
            </div>
          ) : (
            <label className='flex flex-col items-center justify-center w-40 h-40 tracking-wide text-gray-700 uppercase bg-white border rounded-full shadow cursor-pointer dark:text-gray-200 custom-file dark:bg-gray-800 dark:border-gray-800'>
              <svg
                className='w-10 h-10 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
              </svg>
              <span className='mt-2 text-xs font-semibold leading-normal'>
                Upload Photo
              </span>
              <input
                type='file'
                accept='.png, .jpg, .jpeg, .gif'
                className='hidden'
                id='customFile'
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
      </div>

      <section className='w-11/12'>
        <div>
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300'
            >
              Full name
            </label>
            <TextField
              id='name'
              className='w-full'
              placeholder='Surname Middlename Lastname'
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300'
            >
              Email Address
            </label>
            <TextField
              className='w-full'
              placeholder='Enter your email address'
              type='text'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='instagram'
              className='block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300'
            >
              Twitter Profile
            </label>
            <TextField
              className='w-full'
              placeholder='https://twitter.com/username'
              pattern='(http|https)://twitter\.com\/(.+)|(http|https)://www\.twitter\.com\/(.+)'
              type='text'
              name='twitter'
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='instagram'
              className='block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300'
            >
              LinkedIn Profile
            </label>
            <TextField
              className='w-full'
              placeholder='https://linkedin/com/in/username'
              pattern='(http|https)://linkedin\.com\/in\/(.+)|(http|https)://www\.linkedin\.com\/in/(.+)|(http|https)://linkedin\.com\/company\/(.+)|(http|https)://www\.linkedin\.com\/company/(.+)'
              type='text'
              name='linkedin'
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='instagram'
              className='block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300'
            >
              Github Profile
            </label>
            <TextField
              className='w-full'
              placeholder='https://github.com/username'
              pattern='(http|https)://github\.com\/(.+)|(http|https)://www\.github\.com\/(.+)'
              type='text'
              name='github'
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
