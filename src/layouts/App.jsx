import { Siderbar } from './SiderBar'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'


// import { fetchData } from './fetchData'

// const apiData = fetchData("https://valorant-api.com/v1/agents");

function App() {

  // const { data } = useFetch("https://valorant-api.com/v1/agents");

  // const data = apiData.read();
  
  return (
    <>
        {/* {data?.map((item) => (
          <li key={item.displayName}>{item.displayName}</li>
        ))} */}
        <NavBar />

        {/* <Header title={"VALORANT INFO"} /> */}
        {/* <Section /> */}

        <Outlet />
        
    </>
  )
}

export default App
