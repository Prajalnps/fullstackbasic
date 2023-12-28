import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  //to fetch jokes
  const [jokes, setJokes] = useState([]) //empty array

  // make the data fetch when the app loads
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Coffee and fullstack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke) =>  //we can pass index as param as key, but we can take the id property from jokes as a key instead
        (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        )
      }
    </>
  )
}

export default App
