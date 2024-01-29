import { useFetch } from './hooks/useFetch'
import './App.css'

function App() {

  const { data } = useFetch("https://valorant-api.com/v1/agents");

  // console.log(data)

  return (
    <>
      <ul>
        { console.log(data)}
      </ul>
    </>
  )
}

export default App
