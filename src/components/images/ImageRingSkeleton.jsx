import React from "react";
const styles = {
  height: "3rem",
  aspectRatio: 1 /* same width as height */,
  borderRadius: "100%",
};
export const ImageRingSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {[...Array(count)].map(() => (
        <div className='relative flex-shrink-0 p-1 rounded-full cursor-pointer ring-2 ring-purple-700 h-14 w-14'>
          <div
            className='bg-gray-300 dark:bg-gray-600 animate-pulse'
            style={styles}
          ></div>
        </div>
      ))}
    </React.Fragment>
  );
};
