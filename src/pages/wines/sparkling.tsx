import { NextPage } from "next";
import { WineContainer } from "../../components";

const SparklingWinePage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <h1>{name} Wine</h1>
      <WineContainer name={name}/>
    </div>
  )
}

export default SparklingWinePage;
