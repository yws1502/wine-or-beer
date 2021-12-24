import { NextPage } from "next";
import { WineContainer } from "../../components";

const WhitesWinePage: NextPage = () => {
  const name = "whites"
  return (
    <div>
      <h2>{name} Wine</h2>
      <WineContainer name={name} />
    </div>
  )
}

export default WhitesWinePage;
