<script lang="ts"> 
window.onload = () => { 
  // Make footer hidden on scroll down and show on scroll up
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById('footer').style.transform = 'translateY(100px)';
    } else {
      document.getElementById('footer').style.transform = 'translateY(0px)';
    }
    lastScrollTop = st;
  });
}
</script>

<nav id="footer" class="bg-gray-900 fixed bottom-0 w-full p-6 text-white transition-all duration-200">
  <div class="flex gap-3 w-full">
    <div class="text-center text-sm">
      Made by <a href="https://github.com/tinvv" target="_blank">Tinnaphat Somsang</a>
    </div>
  </div>
</nav>

<style>

</style>
