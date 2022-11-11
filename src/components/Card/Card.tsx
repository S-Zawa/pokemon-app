import React from 'react'
import { PokemonDetail } from '../../types/PokemonDetail'
import "./Card.css";

const Card = ({ pokemonDetail }: { pokemonDetail: PokemonDetail }) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={pokemonDetail.sprites.front_default} />
            </div>
            <h3 className='cardName'>{pokemonDetail.name}</h3>
            <div className='cardTypes'>
                <div>タイプ</div>
                {pokemonDetail.types.map((type, i) => {
                    return (
                        <div key={i}>
                            <span className='typeName'>{type.type.name}</span>
                        </div>
                    )
                })}
            </div>
            <div className='cardInfo'>
                <div className='cardData'>
                    <p className='title'>重さ:{pokemonDetail.weight}</p>
                </div>
                <div className='cardData'>
                    <p className='title'>高さ:{pokemonDetail.height}</p>
                </div>
                <div className='cardData'>
                    <p className='title'>アビリティ:{pokemonDetail.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card