import Link from "next/link";
import { ROUTE } from "../../types/ROUTE";

interface ROUTEProps {
  subRouteObject: ROUTE;
  PATH: string;
}

export const SubMenu = ({subRouteObject, PATH}: ROUTEProps) => {
  return (
    <li>
      <Link href={`${PATH}`}>
        <a>{subRouteObject.LABEL}</a>
      </Link>
    </li>
  )
}
