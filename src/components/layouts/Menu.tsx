import Link from "next/link";
import { ROUTE } from "../../types/ROUTE";
import { SubMenu } from "./SubMenu";

interface ROUTEProps {
  routeObject: ROUTE;
}

export const Menu = ({routeObject} : ROUTEProps) => {
  return (
    <li>
      <Link href={routeObject.PATH}>
        <a>{routeObject.LABEL}</a>
      </Link>
      <ul>
        {routeObject.SUBS?.map((subRouteObject:ROUTE) => {
          const PATH = `${routeObject.PATH}${subRouteObject.PATH}`
          
          return (
            <SubMenu
            key={`submenu-list-${subRouteObject.ID}`}
            subRouteObject={subRouteObject}
            PATH={PATH}
            />
          )
        })}
      </ul>
    </li>
  )
}