import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next'
import DefaultLayout from '~/layouts/default'
import { fetchPkmList, fetchPkmProps } from '~/lib/pkm'

export default function Rendering(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <DefaultLayout>
      <header className="h-32 grid place-items-center text-6xl">
        <h1>Rendering Strategies</h1>
      </header>
      <article className="grid place-items-center text-8xl">
        <span>Pokémon Name: {props?.name || 'loooooading'}</span>
      </article>
    </DefaultLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { pokemon } = params as { pokemon: string }

  const pokemonProps = await fetchPkmProps(pokemon)

  return {
    props: {
      name: pokemonProps.name,
    },
  }
}

export const getStaticPaths = async () => {
  const { pokemons } = await fetchPkmList()
  const priorityList = pokemons.map(({ name }) => '/' + name).slice(0, 10)

  return {
    paths: priorityList,
    fallback: true,
  }
}
