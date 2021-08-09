import Head from 'next/head'
import { InferGetStaticPropsType } from 'next';

import { GetLaunches } from '@/queries/__generated__/GetLaunches';
import { GET_LAUNCHES } from '@/queries/get-launches';
import { client } from '@/queries/apollo-client'
import { Header } from '@/components/header'

export const getServerSideProps = async () => {
  const { data } = await client.query<GetLaunches>({
    query: GET_LAUNCHES
  });

  return {
    props: {
      launches: data.launchesPast,
      test: 'hey'
    }
  }
}

export default function Home({ test, launches }: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(launches, test)
  return (
    <div>
      <Head>
        <title>SpaceX Info</title>
        <link rel="icon" href="/spacex_logo_icon.ico" />
      </Head>

      <main>
        <Header background="/mars.jpg" />

        <h1>SpaceX Launches</h1>

        <ul>
          {launches.map((launch, i) => {
            return (
              <li key={i}>{launch.mission_name}</li>
            )
          })}
        </ul>
      </main>

      <style jsx>{`
      `}</style>
    </div>
  )
}
