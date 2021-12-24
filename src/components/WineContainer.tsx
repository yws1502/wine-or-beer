import styled from "@emotion/styled"

import { useWineData } from "../hooks/useWineData";
import { Error, Loading, WineCard } from ".";
import { Wine } from "../types/Wine";

interface WineContainerProps {
  name: string;
}

export const WineContainer = ({name} : WineContainerProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h2>{name} wine</h2>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard 
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          )
        })}
      </main>
    </div>
  )
}

