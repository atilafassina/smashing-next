type PokemonProps = {
  abilities: any[]
  base_experience: number
  forms: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: any[]
  species: { name: string; url: string }
  sprites: {
    front_default: string
    [key: string]: string | null
  }
  stats: {}[]
  types: {}[]
  weight: number
}

const API = 'https://pokeapi.co/api/v2/'
const LIMIT = 1000

export const fetchPkmList = async () => {
  const resp = await fetch(`${API}pokemon?limit=${LIMIT}`)

  const {
    count,
    results,
  }: {
    count: number
    results: {
      name: string
      url: string
    }[]
  } = await resp.json()

  return {
    count,
    pokemons: results,
    limit: LIMIT,
  }
}

export const fetchPkmProps = async (character: string) => {
  const resp = await fetch(`${API}pokemon/${character}`)
  const pkmProps: PokemonProps = await resp.json()

  return pkmProps
}
