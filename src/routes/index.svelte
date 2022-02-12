<script>
  let age = 0
  
  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  age = getAge("2008/11/10");
</script>

<div class="grid h-screen place-items-center bg-gradient-to-b from-blue-700 to-blue-600">
  <div class="flex flex-col ">
    <img src="/tin.jpg" alt="tin" class="animate-bounce rounded-full w-52 mx-auto my-4 shadow-lg hover:scale-110 duration-200">
    <h1 class="md:text-9xl text-6xl text-center font-bold text-white">
      Tinnaphat Somsang
    </h1>
    <p class="md:text-3xl text-xl font-fira text-white text-center mt-2">
      A very boring student and a website developer
    </p>
  </div>
</div>
<div class="grid h-screen place-items-center bg-gradient-to-b from-blue-600 to-blue-500">
  <div class="grid md:grid-cols-2 grid-cols-1 items-center">
    <div class="flex flex-col md:pr-6" id="about">
      <h1 class="md:text-8xl text-7xl text-center font-bold text-white">
        <a href="#about">
          About Me
        </a>
      </h1>
      <h1 class="md:text-xl text-md text-center font-bold text-white md:mb-0 mb-6 md:mx-none mx-4">
        My information about me, my hobbies, my life, my future and my dreams!
      </h1>
    </div>
    <div class="md:text-left text-center md:mr-6 mx-4 text-white gap-6 flex flex-col font-bold md:pl-6 pt-6 md:border-l-4 md:border-t-0 md:border-t-0 border-t-4 border-white">
      <p class="src md:text-3xl text-lg">👋Hi, I'm Tinnaphat Somsang or you can call me Tin.</p>
      <p class="src md:text-3xl text-lg">🎓I am currently a student at the Assumption College Samutprakarn (ACSP) in Thailand.</p>
      <p class="src md:text-3xl text-lg">🔬I am learning on i-Science programs in the field of Science and Mathematics.</p>
      <p class="src md:text-3xl text-lg">🌠I am interested in astronomy, music and computer science.</p>
      <p class="src md:text-3xl text-lg">🤣I like to make jokes and make people fun.</p>
    </div>
  </div>
</div>
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
<div class="grid h-screen place-items-center bg-gradient-to-b from-violet-400 to-violet-500">
  <div class="grid md:grid-cols-2 grid-cols-1 items-center">
    <div class="flex flex-col md:pr-6 pb-6" id="skills">
      <h1 class="md:text-8xl text-6xl text-center font-bold text-white">
        <a href="#skills">
          Skills
        </a>
      </h1>
      <h1 class="md:text-xl text-md text-center font-bold text-white md:mx-none mx-4">
        This is my programming skills, I can do such of the following things!
      </h1>
    </div>
    <div class="text-left mr-6 text-white src mx-4 font-bold md:pl-6 pt-6 md:border-l-4 md:border-t-0 border-t-4 border-white flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Programming Languages</h1>
        <div class="flex flex-row flex-wrap">
          <i class="devicon-css3-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-html5-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-javascript-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-typescript-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-cplusplus-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-python-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-java-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-c-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-go-plain  md:text-6xl text-4xl"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Technology</h1>
        <div class="flex flex-row flex-wrap">
          <i class="devicon-github-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-linux-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-windows8-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-bash-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-docker-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-git-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-vim-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-intellij-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-webstorm-plain  md:text-6xl text-4xl"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Databases</h1>
        <div class="flex flex-row flex-wrap">
          <i class="devicon-mysql-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-postgresql-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-mariadb-plain  md:text-6xl text-4xl"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Services</h1>
        <div class="flex flex-row flex-wrap">
          <i class="devicon-amazonwebservices-original  md:text-6xl text-4xl"></i>
          <i class="devicon-heroku-original  md:text-6xl text-4xl"></i>
          <i class="devicon-azure-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-googlecloud-plain  md:text-6xl text-4xl"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Library</h1>
        <div class="flex flex-row flex-wrap ">
          <i class="devicon-nodejs-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-denojs-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-threejs-original  md:text-6xl text-4xl"></i>
          <i class="devicon-react-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-svelte-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-nextjs-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-nuxtjs-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-vuejs-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-tailwindcss-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-express-original  md:text-6xl text-4xl"></i>
          <i class="devicon-socketio-original  md:text-6xl text-4xl"></i>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl">Misc.</h1>
        <div class="flex flex-row flex-wrap">
          <i class="devicon-aftereffects-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-photoshop-plain  md:text-6xl text-4xl"></i>
          <i class="devicon-premierepro-plain  md:text-6xl text-4xl"></i>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="grid h-screen place-items-center bg-gradient-to-b from-violet-500 to-violet-600">
  <div class="grid grid-cols-1 items-center gap-4">
    <div class="flex flex-col md:pr-6 pb-6" id="contact">
      <h1 class="md:text-8xl text-7xl text-center font-bold text-white">
        <a href="#contact">
          Contact
        </a>
      </h1>
      <h1 class="md:text-xl text-md text-center font-bold text-white">
        You can contact me here!
      </h1>
    </div>
    <div class="text-left mr-6 text-white mt-2 src font-bold flex flex-col gap-6">
      <p class="src md:text-3xl text-lg">📫Email: <a href="mailto:contact@tin-sci.me">contact@tin-sci.me</a></p>
      <p class="src md:text-3xl text-lg">📞Phone: <a href="tel:+66984176673">+66984176673</a></p>
      <p class="src md:text-3xl text-lg"><i class="devicon-facebook-plain"></i> Facebook: <a href="https://www.facebook.com/tin.sci/">tin.sci</a></p>
      <p class="src md:text-3xl text-lg"><i class="devicon-twitter-plain"></i> Twitter: <a href="https://www.twitter.com/@tin_sci/">@tin_sci</a></p>
      <p class="src md:text-3xl text-lg"><i class="devicon-github-plain"></i> Github: <a href="https://www.github.com/tinvv/">tinvv</a></p>
      <p class="src md:text-3xl text-lg">💬 Discord: <a href="https://discord.com/users/508473794994896896/">Tin</a></p>
    </div>
  </div>
</div>
<div class="bg-gradient-to-b from-violet-600 to-violet-700 p-4 text-center">
  <div class="flex flex-col">
    <h1 class="md:text-4xl text-xl  font-bold text-white src">Made with 💘 By <span>Tinnaphat Somsang</span></h1>
    <h1 class="md:text-xl  text-md font-bold text-white src">Find sources on <a href="https://www.github.com/tinvv/web">Github</a></h1>
  </div>
</div>