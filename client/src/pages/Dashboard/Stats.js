import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer,Loading, ChartsContainer } from "../../Components"

const Stats = () => {
  const {showStats,isLoading,monthlyApplication} = useAppContext()
  useEffect(()=>{
    showStats()
    // eslint-disable-next-line
  },[])
  if(isLoading){
    return<Loading center/>
  }
  return (
    <>
    <StatsContainer/>
    {monthlyApplication.length > 0 && <ChartsContainer/>}
    </>
  )
}
export default Stats