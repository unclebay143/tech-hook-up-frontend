import { FaNewspaper, FaUserAlt, FaUserPlus, FaUsers } from "react-icons/fa";

const iconStyle = "h-5 w-5 text-gray-400 hover:text-gray-300";

const leftSidebarLinks = [
  {
    label: "Home",
    to: "/",
    icon: <FaNewspaper className={iconStyle} />,
  },
  {
    label: "Explore",
    to: "/explore",
    icon: <FaUserAlt className={iconStyle} />,
  },
  {
    label: "My Hooks",
    // to: "/my-hooks",
    icon: <FaUsers className={iconStyle} />,
  },
  {
    label: "Requests",
    // to: "/requests",
    icon: <FaUserPlus className={iconStyle} />,
  },
  {
    label: "Settings",
    // to: "/settings",
    icon: <FaUserPlus className={iconStyle} />,
  },
];

export default leftSidebarLinks;
