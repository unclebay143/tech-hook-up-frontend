import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { ImageRing } from "../images/ImageRing";

export const HookCard = ({ data, slice, sliceStart, sliceEnd }) => {
  const sliceData = slice && data?.slice(sliceStart, sliceEnd);
  return (
    <React.Fragment>
      {(sliceData || data)?.map((datum) => {
        const { description, author, authorBrief, image, bg, id, data } = datum;
        return (
          <article
            key={Math.random() * 100} // Todo remove this key when we have a real id
            className={`flex flex-col justify-between h-56 w-62 ${bg} hover:bg-gray-200 shadow-sm hover:shadow-md cursor-pointer rounded-md p-4 dark:hover:shadow-lg dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white`}
          >
            <div>
              <section className='relative flex justify-between'>
                <section className='flex'>
                  <ImageRing
                    path={image}
                    alt={author}
                    id={id}
                    top='top-16'
                    data={data}
                    showRating={false}
                  />
                  <div className='ml-3'>
                    <h3 className='text-sm font-semibold text-gray-800 dark:text-gray-100'>
                      {author}
                    </h3>
                    <p className='text-xs text-gray-600 dark:text-gray-300'>
                      {authorBrief}
                    </p>
                  </div>
                </section>

                <div>
                  <FaEllipsisH />
                </div>
              </section>

              <section className='pl-3 mt-5'>
                <p className='text-sm text-gray-800 dark:text-gray-300'>
                  {description}
                </p>
              </section>
            </div>
            {/* <section className='pl-3 mx-auto mt-5'>
              <button className='px-4 py-2 text-xs font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
                Apply
              </button>
            </section> */}

            <section>
              <button className='px-4 py-2 text-xs font-semibold text-white bg-gray-800 dark:bg-gray-900 w-full rounded-full hover:bg-gray-900 hover:shadow-lg hover:text-white hover:bg-opacity-75'>
                Apply
              </button>
            </section>
          </article>
        );
      })}
    </React.Fragment>
  );
};
