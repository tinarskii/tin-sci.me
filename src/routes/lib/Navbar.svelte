<script lang="ts">  
  import { Link } from 'svelte-routing';
</script>

<nav class="bg-gray-900 w-full p-4 text-white transition-all duration-200">
  <div class="flex md:flex-row flex-col gap-3 w-full">
    <Link to="/"><h1 class="nav-btn" id="home">Home</h1></Link>
    <Link to="/about"><h1 class="nav-btn" id="about">About</h1></Link>
    <Link to="/skills"><h1 class="nav-btn" id="skills">Skills</h1></Link>
    <Link to="/contact"><h1 class="nav-btn" id="contact">Contact</h1></Link>
  </div>
</nav>

<style>

</style>
