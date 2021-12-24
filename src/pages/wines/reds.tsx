import { NextPage } from "next";
import { WineContainer } from "../../components";

const RedsWinePage: NextPage = () => {
  const name = 'reds';

  return (
    <main>
      <WineContainer name={name}/>
    </main>
  )
}

export default RedsWinePage;
