import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next'
import path from 'path'
import DefaultLayout from '~/layouts/default'
import { fetchPkmProps } from '~/lib/pkm'

export default function Rendering(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <DefaultLayout>
      <header className="h-32 grid place-items-center text-6xl">
        <h1>Rendering Strategies</h1>
      </header>
      <article className="grid place-items-center text-8xl">
        <span>Pokémon Name: {props.name}</span>
      </article>
    </DefaultLayout>
  )
}

// export const getStaticProps = async () => {
//   const pokemon = await fetchPkmProps('bulbasaur')

//   return {
//     props: {
//       name: pokemon.name,
//     },
//   }
// }
export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const pokemon = await fetchPkmProps('bulbasaur')

  res.setHeader('x-smashing', pokemon.height)

  return {
    props: {
      name: pokemon.name,
    },
  }
}
