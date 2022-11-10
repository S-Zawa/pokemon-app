import { rejects } from "assert";
import { resolve } from "path";
import { AllPokemon } from "../types/AllPokemon";
import { PokemonDetail } from "../types/PokemonDetail";

export const getAllPokemon = (url: RequestInfo | URL) => {
  return new Promise<AllPokemon>((resolve, rejects) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url: string) => {
  return new Promise<PokemonDetail>((resolve, rejects) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};
