<script>
  export let age;
</script>

<div class="grid h-screen place-items-center bg-gradient-to-b from-blue-500 to-violet-400">
  <div class="grid md:grid-cols-2 grid-cols-1 items-center">
    <div class="md:text-left text-center md:mr-6 mx-4 text-white mt-2 src font-bold md:pr-6 pt-6 md:border-r-4 md:border-t-0 border-t-4 border-white flex flex-col gap-6">
      <p class="src md:text-3xl text-lg">😀Full Name: Tinnaphat Somsang</p>
      <p class="src md:text-3xl text-lg">👀Nickname: Tin </p>
      <p class="src md:text-3xl text-lg">🎉Birthday: November 10, 2008</p>
      <p class="src md:text-3xl text-lg">🎂Age: {age} years old</p>
      <p class="src md:text-3xl text-lg">💭Communication: Thai, English and Chinese</p>
      <p class="src md:text-3xl text-lg">🎓Education: Assumption College Samutprakarn</p>
      <p class="src md:text-3xl text-lg">❓Location: Samut Prakarn, Thailand</p>
    </div>
    <div class="flex flex-col md:pr-6 md:mb-none mb-6 order-first md:order-last" id="personal">
      <h1 class="md:text-8xl text-7xl text-center font-bold text-white">
        <a href="#personal">
          Personal Info
        </a>
      </h1>
      <h1 class="md:text-xl text-md text-center font-bold text-white md:mx-none mx-4">
        This is my personal information
      </h1>
    </div>
  </div>
</div>