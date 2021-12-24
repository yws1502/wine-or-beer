import type { NextPage } from "next";
import { WineContainer } from "../../components";

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <main>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </main>
  )
}

export default PortWinePage;
