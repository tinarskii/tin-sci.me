import Head from 'next/head'
import { FacebookLoginButton, GithubLoginButton, DiscordLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import Navigator from './components/navigator'

export default function Contact() {
  return (
    <>
    <Head>
      <title>CONTACT | Tinnaphat Somsang</title>
      <meta name="description" content="Homepage of Tinnaphat Somsang's Website" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
    </Head>
    <div className={"grid h-screen place-items-center"}>
      <div className={"max-w-2xl"}>
        <div className={"font-bold text-2xl md:text-5xl text-center font-so-bold"}>
        Contact
        </div>
        <div className={"text-md font-sarabun m-2 text-center"}>
        <GithubLoginButton size={40} onClick={() => location.href = "https://github.com/tinvv/"}>
          <span>Github</span>
        </GithubLoginButton>
        <FacebookLoginButton size={40} onClick={() => location.href = "https://www.facebook.com/TiNNAPHATs/"}>
          <span>Facebook</span>
        </FacebookLoginButton>
        <DiscordLoginButton size={40} onClick={() => location.href = "https://www.discord.com/users/508473794994896896/"}>
          <span>Discord</span>
        </DiscordLoginButton>
        <TwitterLoginButton size={40} onClick={() => location.href = "https://www.twitter.com/@tinnaphattin/"}>
          <span>Twitter</span>
        </TwitterLoginButton>
        </div>     
        <Navigator />
      </div>
    </div>
    </>
  )
}
