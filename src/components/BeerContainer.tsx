import { Error, Loading, BeerCard } from "./";
import { Beer } from "../types/Beer";
import { useBeerData } from "../hooks/useBeerData";

interface BeerContainerProps {
  name : string;
}

export const BeerContainer = ({ name } : BeerContainerProps) => {

  const {data, error} = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h2>{name} beer</h2>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard 
              key={`${name}-list-${beerData.id}`}
              beerData={beerData} 
            />
          )
        })}
      </main>
    </div>
  )
}

