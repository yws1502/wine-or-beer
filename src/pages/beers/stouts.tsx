import type { NextPage } from "next";
import { BeerContainer } from "../../components";


const StoutsBeerPage : NextPage = () => {
  const name = "stouts";
  return (
    <main>
      <BeerContainer name={name}/>
    </main>
  )
}

export default StoutsBeerPage;