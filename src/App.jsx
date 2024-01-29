import './App.css'
import { Siderbar } from './layouts/SiderBar'
import { Header } from './components/Header'

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

        {/* <Siderbar /> */}
        <Header />
        
    </>
  )
}

export default App
