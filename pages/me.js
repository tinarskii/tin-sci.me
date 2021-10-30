import Head from 'next/head'
import Image from 'next/image'
import Navigator from './components/navigator'

export default function Me() {
  return (
    <>
    <Head>
      <title>ABOUT | Tinnaphat Somsang</title>
      <meta name="description" content="Homepage of Tinnaphat Somsang's Website" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
    </Head>
    <div className={"grid h-screen place-items-center"}>
      <div className={"max-w-2xl"}>
        <div className={"font-bold text-2xl md:text-5xl text-center font-so-bold"}>
        Tinnaphat Somsang
        </div>
        <div className={"text-md font-sarabun m-2 text-center"}>
          ติณณภัทร์ สมแสง
        </div>
        <div className={"flex flex-col gap-y-6"}>
          <div className={"text-2xl font-bold font-sarabun mt-2"}>
            🎓Education
            <p className={"text-sm font-normal"}>
              - Assumption Colledge Samutprakarn School
            </p>
          </div>
          <div className={"text-2xl font-bold font-sarabun mt-2"}>
            🧠Skills
            <p className={"text-sm font-normal"}>
              <p className={"m-2 font-bold"}>Language: </p>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} alt={"javascript"} width={50} height={50}/>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} alt={"typescript"} width={50} height={50}/>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} alt={"python"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} alt={"java"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"} alt={"c++"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} alt={"html5"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} alt={"css3"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} alt={"mysql"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"} alt={"bash"}width={50} height={50} />
              <p className={"m-2 font-bold"}>Frameworks: </p>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"} alt={"three"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} alt={"next"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"} alt={"svelte"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"} alt={"vue"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt={"react"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"} alt={"nuxt"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} alt={"tailwind"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} alt={"tailwind"}width={50} height={50} />
              <p className={"m-2 font-bold"}>Tools: </p>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} alt={"git"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} alt={"github"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"} alt={"docker"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} alt={"node"}width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"} alt={"yarn"} width={50} height={50} />              
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"} alt={"npm"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"} alt={"gradle"} width={50} height={50} />
              <p className={"m-2 font-bold"}>Others: </p>
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"} alt={"win64"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"} alt={"ubuntu"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"} alt={"linux"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"} alt={"chrome"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg"} alt={"opera"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"} alt={"premiere"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"} alt={"photoshop"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"} alt={"vim"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"} alt={"vscode"} width={50} height={50} />
              <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"} alt={"msvs"} width={50} height={50} />
            </p>
          </div>
        </div>
      </div>
      <Navigator />
    </div>
    </>
  )
}
