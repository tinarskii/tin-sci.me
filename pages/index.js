import Head from 'next/head'
import Navigator from './components/navigator'

function Logo() {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    viewBox="0 0 500 500"
  >
  <path
    d="M175.5 94c-14.3 1.6-25.4 8.1-33 19.5-5.1 7.6-7.5 14.9-8.2 25-1 14.7 3.6 23.7 15.1 29.5l6.9 3.5 31.3.3c17.3.2 31.4.6 31.4 1s-8.3 47.9-18.5 105.7c-13.7 77.2-18.4 106.1-17.9 109 2.2 14.2 13.6 24.8 30.2 28.4 8.3 1.7 21.9 1.4 30.6-.9 16.3-4.1 31.7-15.4 37.6-27.4 2.7-5.5 7-24.1 7-30 0-1.5-1.9-3.2-6.4-5.8-13-7.6-28.1-24.5-34.2-38.4-5.9-13.3-7.7-21.9-7.7-36.9-.1-15.6 1.1-22.5 6.4-35.1 11.1-26.6 34.8-46.5 62.9-52.9 4.1-.9 8-1.8 8.6-2 .6-.2 1.5-2.5 1.8-5.2.4-2.6 1-5.8 1.3-7.1l.5-2.2h28.2c30.5 0 34.8-.5 44.7-5.6 2.9-1.4 7.4-4.7 10.2-7.2 22.6-21 20.2-53.2-4.9-63.3l-5.9-2.4-105.5-.1c-58-.1-108.6.2-112.5.6z"
    fill="#000"
  />
  </svg>
  );
};

export default function Home() {
  return (
    <>
    <Head>
      <title>HOME | Tinnaphat Somsang</title>
      <meta name="description" content="Homepage of Tinnaphat Somsang's Website" />
    </Head>
    <div className={"grid h-screen place-items-center"}>
      <div className={"max-w-lg"}>
        <p className={"text-center"}>
        <Logo />
        </p>
        <div className={"font-bold text-2xl md:text-5xl text-center font-so-bold"}>
        Tinnaphat (Tin) Somsang
        </div>
        <div className={"text-md font-so-bold mt-2 text-center"}>
          &quot;I use tailwindcss&quot;
        </div>
      <Navigator />
      </div>
    </div>
    </>
  )
}
