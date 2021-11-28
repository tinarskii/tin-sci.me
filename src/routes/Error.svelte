<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Navbar />
  <div class="flex m-6 p-36 justify-center">
    <!-- 404 Not found -->
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-bold">404</h1>
      <h2 class="text-2xl font-bold">Page not found</h2>
      <p class="text-xl">
        The page you are looking for does not exist.
      </p>
  </div>
  <Footer />
</main>