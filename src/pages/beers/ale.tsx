import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const AleBeerPage: NextPage = () => {
  const name = "ale";

  return (
    <main>
      <h2>{name} beer</h2>
      <BeerContainer name={name} />
    </main>
  )
}

export default AleBeerPage;