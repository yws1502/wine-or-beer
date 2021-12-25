import Link from "next/link";
import { ROUTE } from "../../types/ROUTE";

interface ROUTEProps {
  routeObject: ROUTE;
}

export const SubMenu = ({routeObject}: ROUTEProps) => {
  return (
    <ul>
    {routeObject.SUBS && routeObject.SUBS.map((subRouteObject:ROUTE) => {
      return (
        <li key={`submenu-list-${subRouteObject.ID}`}>
          <Link href={`${routeObject.PATH}${subRouteObject.PATH}`}>
            <a>{subRouteObject.LABEL}</a>
          </Link>
        </li>
      )
    })}
  </ul>
  )
}
