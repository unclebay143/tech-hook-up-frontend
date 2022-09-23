import React from "react";
import styles from "./hook-card-skeleton.module.css";

export default function HookCardSkeleton({ count = 1 }) {
  return (
    <React.Fragment>
      {
        // map the count to create a list of cards - count is the number of cards to be created
        [...Array(count)].map(() => (
          <article
            className={`h-56 w-62 hover:bg-gray-200 relative shadow-sm hover:shadow-md cursor-pointer rounded-md p-4 dark:bg-gray-800`}
          >
            <section className={styles.authorsection}>
              <div
                className={`${styles.image} dark:bg-gray-600 animate-pulse`}
              ></div>
              <section className='w-full'>
                <div
                  className={`${styles.name} h-3 w-24 dark:bg-gray-700 animate-pulse`}
                ></div>
                <div
                  className={`${styles.authorbrief} h-3 w-20 dark:bg-gray-700 animate-pulse`}
                ></div>
              </section>
            </section>
            <div
              className={`${styles.post} h-3 w-42 dark:bg-gray-700 animate-pulse`}
            ></div>
            <div
              className={`${styles.post} h-3 w-42 dark:bg-gray-700 animate-pulse`}
            ></div>
            <button
              className={`${styles.button} h-8 w-16 px-4 py-2 rounded-full mt-5 dark:bg-gray-700 animate-pulse`}
            ></button>
          </article>
        ))
      }
    </React.Fragment>
  );
}
