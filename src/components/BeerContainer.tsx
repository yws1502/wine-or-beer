import styled from "@emotion/styled";
import { Error, Loading, BeerCard } from "./";
import { Beer } from "../types/Beer";
import { useBeerData } from "../hooks/useBeerData";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface BeerContainerProps {
  name : string;
}

export const BeerContainer = ({ name } : BeerContainerProps) => {

  const {data, error} = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <BeerTitle>{name} beer</BeerTitle>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard 
              key={`${name}-list-${beerData.id}`}
              beerData={beerData} 
            />
          )
        })}
      </BeerCardContainer>
    </div>
  )
}

const BeerTitle = styled.h2`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`

const BeerCardContainer = styled.main`
  display: grid;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
