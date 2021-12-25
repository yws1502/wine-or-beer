import { Menu } from ".";
import { ROUTES } from "../../constants";
import { ROUTE } from "../../types/ROUTE";

export const Navigation = () => {
  return (
    <header>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return(
              <Menu 
                key={`menu-list-${routeObject.ID}`}
                routeObject={routeObject}
              />
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
