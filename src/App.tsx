import React, { useEffect, useState } from 'react'
import './App.css'
import { Result } from './types/AllPokemon'
import { PokemonDetail } from './types/PokemonDetail'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState<PokemonDetail[]>([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      const response = await getAllPokemon(initialUrl)

      //各ポケモンの詳細データを取得
      loadPokemon(response.results)
      setLoading(false)
    }
    fetchPokemonData()
  }, [])

  const loadPokemon = async (data: Result[]) => {
    const _pokemonData = await Promise.all(
      data.map((pokemon: Result) => {
        const pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord
      }),
    )
    setPokemonData(_pokemonData)
  }
  console.log(pokemonData)

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
