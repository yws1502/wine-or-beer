import type { NextPage } from "next";
import { BeerContainer } from "../../components";


const StoutsBeerPage : NextPage = () => {
  const name = "stouts";
  return (
    <main>
      <h2>{name} beer</h2>
      <BeerContainer name={name}/>
    </main>
  )
}

export default StoutsBeerPage;