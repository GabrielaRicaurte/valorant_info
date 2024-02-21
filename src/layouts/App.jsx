import { Siderbar } from './SiderBar'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'


// 

// 

function App() {

  // 

  // 
  
  return (
    <>
       
        <NavBar />

        {/* <Header title={"VALORANT INFO"} /> */}
        {/* <Section /> */}

        <Outlet />
        
    </>
  )
}

export default App
