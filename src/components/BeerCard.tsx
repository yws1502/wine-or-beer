import styled from "@emotion/styled";
import { Beer } from "../types/Beer";

interface BeerProps {
  beerData : Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, image, rating } = beerData;

  return (
    <CardStyle>
      <img src={image} alt="" />
      <h3>{name} - {rating.average}</h3>
      <p>{price}</p>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  text-align: center;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  border-radius: 1em;
`

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: #fff;
  background-color: #2ac1bc;
  border-radius: 3px;
`