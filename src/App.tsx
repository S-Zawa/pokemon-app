import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import { AllPokemon, Result } from './types/AllPokemon'
import { PokemonDetail } from './types/PokemonDetail'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState<PokemonDetail[]>([])
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("")

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      const response = await getAllPokemon(initialUrl)

      // 各ポケモンの詳細データを取得
      loadPokemon(response.results)
      setNextUrl(response.next)
      setPrevUrl(response.previous)
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

  const handlePrevPage = async () => {
    if (!prevUrl) {
      return;
    }
    setLoading(true)
    const data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results)
    setUrl(data)
    setLoading(false);
  }
  const handleNextPage = async () => {
    setLoading(true);
    const data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results)
    setUrl(data)
    setLoading(false);
  }
  const setUrl = (allPokemon: AllPokemon) => {
    setPrevUrl(allPokemon.previous)
    setNextUrl(allPokemon.next);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {loading ? (
          <h1>loading</h1>
        ) : (
          <>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemonDetail, i) => {
                return <Card key={i} pokemonDetail={pokemonDetail}></Card>
              })}
            </div>
            <div className='btn'>
              {!prevUrl ?
                (<></>) : <button onClick={handlePrevPage}>前へ</button>
              }
              {!nextUrl ?
                (<></>) : <button onClick={handleNextPage}>次へ</button>
              }
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
