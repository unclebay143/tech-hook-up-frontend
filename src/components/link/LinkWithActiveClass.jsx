import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function LinkWithActiveClass({
  children,
  activeClassName,
  classNames,
  to,
  ...props
}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`${classNames} ${match ? activeClassName : null}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
