import type { NextPage } from "next";
import { BeerContainer } from "../../components";


const StoutsBeerPage : NextPage = () => {
  const name = "stouts";
  return (
    <div>
      <BeerContainer 
        name={name}
      />
    </div>
  )
}

export default StoutsBeerPage;