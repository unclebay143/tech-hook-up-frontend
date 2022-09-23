import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function LeftSideBarLinks({
  activeClassName,
  classNames,
  to = "/", // can crash useResolved if to is undefined
  icon,
  label,
  ...props
}) {
  let resolved = useResolvedPath(to);
  let isCurrentPathMatchLinkTo = useMatch({
    path: resolved.pathname,
    end: true,
  });
  return (
    <li className='mb-4'>
      <Link
        to={to || "/"}
        className='flex items-center text-xs xl:text-sm dark:text-gray-500'
        {...props}
      >
        <div
          className={`p-3 mr-2 bg-white rounded-full shadow-2xl dark:bg-gray-700 ${
            isCurrentPathMatchLinkTo && "dark:bg-gray-500"
          }`}
        >
          {icon}
        </div>

        <span
          className={`ml-2 font-semibold text-md hover:text-gray-600 dark:text-gray-300 ${
            isCurrentPathMatchLinkTo && "font-bold"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
