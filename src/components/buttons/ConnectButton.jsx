import React from "react";

export const ConnectButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='w-full px-4 py-2 mb-5 text-sm font-bold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:shadow-outline'
    >
      Connect Wallet
    </button>
  );
};
