import { Beer } from "../types/Beer";

interface BeerProps {
  beerData : Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, image } = beerData;

  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}