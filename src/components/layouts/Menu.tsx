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
      <SubMenu routeObject={routeObject} />
    </li>
  )
}