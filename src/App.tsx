import React, { useEffect, useState } from 'react'
import './App.css'
import { getAllPokemon } from './utils/pokemon'

function App() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let response = await getAllPokemon(initialUrl)
      console.log(response)
      setLoading(false)
    }
    fetchPokemonData()
  }, [])

  return (
    <div className="App">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <h1>finish</h1>
        </>
      )}
    </div>
  )
}

export default App
