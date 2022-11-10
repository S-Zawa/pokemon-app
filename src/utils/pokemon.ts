import { AllPokemon } from '../types/AllPokemon';
import { PokemonDetail } from '../types/PokemonDetail';

export const getAllPokemon = (url: RequestInfo | URL) => {
    return new Promise<AllPokemon>((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

export const getPokemon = (url: string) => {
    return new Promise<PokemonDetail>((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            });
    });
};
