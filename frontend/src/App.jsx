import axios from "axios"
import { useState , useEffect } from "react"

function App() {

  const [jokes , setJokes] = useState([])

  


  useEffect(() => {


    // FETCHING JOKES FROM THE BACKEND USING AXIOS
    axios.get("/api")
      .then((response) => {
        console.log(response.data);
        setJokes(() => response.data)

      })
      .catch((err) => {
        console.log(err);
      })

  },[])





  return (
    <div>
      <h1>Hello World</h1>
      {
        jokes.map((value , index) => (
          
          <div key={index}>
            <br />
            <h3>{value.joke}</h3>
          </div>

        ))
      }
    </div>
  )
}

export default App
