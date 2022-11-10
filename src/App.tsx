import React, { useEffect } from 'react'
import './App.css'
import { getAllPokemon } from './utils/pokemon'

function App() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let response = await getAllPokemon(initialUrl)
      console.log(response)
    }
    fetchPokemonData()
  }, [])

  return <div className="App"></div>
}

export default App
