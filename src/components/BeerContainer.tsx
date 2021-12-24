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
    <main>
      <h2>ale beer</h2>
      {data.map((beerData: Beer) => {
        return (
          <BeerCard 
            key={`${name}-list-${beerData.id}`}
            beerData={beerData} 
          />
        )
      })}
    </main>
  )
}

