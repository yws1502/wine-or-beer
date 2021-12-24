import type { NextPage } from "next";
import { WineContainer } from "../../components";

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <main>
      <WineContainer name={name} />
    </main>
  )
}

export default PortWinePage;
