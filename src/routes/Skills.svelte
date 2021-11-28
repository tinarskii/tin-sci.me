<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Navbar />
  <div class="flex m-6 justify-center border-b">
    <div class="title max-w-md md:max-w-2xl">
      <h1 class="md:text-6xl text-5xl  text-cente m-2 font-bold">Tinnaphat Somsang</h1>
      <h2 class="text-3xl text-center">ติณณภัทร์ สมแสง</h2>
      <div class="container">
        <h1 class="text-2xl m-2 border-t border-black">Programming Language: </h1>
        <div class="flex flex-wrap justify-left border-b border-black p-2">
          <i class="devicon-html5-plain text-6xl"></i>
          <i class="devicon-css3-plain text-6xl"></i>
          <i class="devicon-javascript-plain text-6xl"></i>
          <i class="devicon-typescript-plain text-6xl"></i>
          <i class="devicon-cplusplus-plain text-6xl"></i>
          <i class="devicon-python-plain text-6xl"></i>
          <i class="devicon-java-plain text-6xl"></i>
          <i class="devicon-c-plain text-6xl"></i>
        </div>
        <h1 class="text-2xl m-2">Technology: </h1>
        <div class="flex flex-wrap justify-left border-b border-black p-2">
          <i class="devicon-github-plain text-6xl"></i>
          <i class="devicon-linux-plain text-6xl"></i>
          <i class="devicon-windows8-plain text-6xl"></i>
          <i class="devicon-bash-plain text-6xl"></i>
          <i class="devicon-docker-plain text-6xl"></i>
          <i class="devicon-git-plain text-6xl"></i>
          <i class="devicon-vim-plain text-6xl"></i>
          <i class="devicon-vscode-plain text-6xl"></i>
          <i class="devicon-socketio-original text-6xl"></i>
        </div>
        <h1 class="text-2xl">Databases: </h1>
        <div class="flex flex-wrap justify-left border-b border-black p-2">
          <i class="devicon-mysql-plain text-6xl"></i>
          <i class="devicon-mongodb-plain text-6xl"></i>
          <i class="devicon-postgresql-plain text-6xl"></i>
          <i class="devicon-couchdb-plain text-6xl"></i>
        </div>
        <h1 class="text-2xl">Frameworks: </h1>
        <div class="flex flex-wrap justify-left border-b border-black p-2">
          <i class="devicon-nodejs-plain text-6xl"></i>
          <i class="devicon-denojs-plain text-6xl"></i>
          <i class="devicon-threejs-original text-6xl"></i>
          <i class="devicon-react-plain text-6xl"></i>
          <i class="devicon-svelte-plain text-6xl"></i>
          <i class="devicon-nextjs-plain text-6xl"></i>
          <i class="devicon-nuxtjs-plain text-6xl"></i>
          <i class="devicon-vuejs-plain text-6xl"></i>
          <i class="devicon-tailwindcss-plain text-6xl"></i>
          <i class="devicon-express-original text-6xl"></i>
        </div> 
        <h1 class="text-2xl">Misc: </h1>
        <div class="flex flex-wrap justify-left border-b border-black p-2">
          <i class="devicon-aftereffects-plain text-6xl"></i>
          <i class="devicon-photoshop-plain text-6xl"></i>
          <i class="devicon-premierepro-plain text-6xl"></i>
          <i class="devicon-unity-plain text-6xl"></i>
          <i class="devicon-tensorflow-plain text-6xl"></i>
          <i class="devicon-mocha-plain text-6xl"></i>
          <i class="devicon-npm-plain text-6xl"></i>
          <i class="devicon-yarn-plain text-6xl"></i>
          <i class="devicon-gradle-plain text-6xl"></i>
          <i class="devicon-gcc-plain text-6xl"></i>
        </div> 
    </div>
  </div>
  <Footer />
</main>