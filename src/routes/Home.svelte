<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import { Link } from 'svelte-routing';
</script>

<main>
  <Navbar />
  <div class="flex p-28 justify-center border-b">
    <div class="title max-w-md md:max-w-2xl">
      <center><img src="/logo.png" width="200px" height="200px" alt="logo" /></center>
      <h1 class="md:text-7xl text-5xl text-center m-2 font-bold">Tinnaphat Somsang</h1>
      <h2 class="text-3xl text-center">Not a developer, but more like a comedian</h2>
      <div class="flex flex-row gap-4 m-3 w-full justify-around">
        <Link to="/skills" class="home-btn">Skills</Link>
        <Link to="/blog" class="home-btn">Blog</Link>
        <Link to="/about" class="home-btn">About Me</Link>
      </div>
    </div>
  </div>
  <Footer />
</main>