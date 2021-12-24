import { NextPage } from "next";
import { WineContainer } from "../../components";

const RedsWinePage: NextPage = () => {
  const name = 'reds';

  return (
    <main>
      <h1>{name} Wine</h1>
      <WineContainer name={name}/>
    </main>
  )
}

export default RedsWinePage;
