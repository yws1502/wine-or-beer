import { NextPage } from "next";
import { WineContainer } from "../../components";

const DessertWinePage: NextPage = () => {
  const name = 'dessert';

  return (
    <main>
      <WineContainer name={name}/>
    </main>
  )
}

export default DessertWinePage;
