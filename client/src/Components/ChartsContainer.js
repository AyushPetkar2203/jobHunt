import BarChart from "./BarChart"
import AreaChart from "./AreaChart"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { useState } from "react"

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplication: data } = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}
export default ChartsContainer