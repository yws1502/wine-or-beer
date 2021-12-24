import { Wine } from "../types/Wine";


interface WineProps {
  wineData : Wine;
}

export const WineCard = ({ wineData } : WineProps) => {
  const { wine, winery, image } = wineData;
  
  return (
    <div>
      <img src={image} alt="" />
      <h2>{wine}</h2>
      <p>{winery}</p>
    </div>
  )
}