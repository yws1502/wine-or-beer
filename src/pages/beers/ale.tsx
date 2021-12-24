import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const AleBeerPage: NextPage = () => {
  const name = "ale";

  return (
    <main>
      <BeerContainer name={name} />
    </main>
  )
}

export default AleBeerPage;