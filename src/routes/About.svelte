<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";

  let age = 0
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  age = getAge("2008/11/10");
</script>

<main>
  <Navbar />
      <div class="flex mt-6 justify-center">
    <div class="title border-r border-black p-4">
      <h1 class="md:text-7xl text-5xl text-center m-2 font-bold">About Me</h1>
      <h2 class="text-3xl text-center">Tinnaphat "Tin" Somsang</h2>
    </div>  
    <div class="info space-y-4 mt-4 p-4">
      <div class="edu">
        <h1 class="text-4xl font-bold">Education: </h1>
        <p>Assumption College Samutprakarn School</p>
      </div>
      <div class="interest">
        <h1 class="text-4xl font-bold">Interest: </h1>
        <ul>
          <li>Coding</li>
          <li>Astronomy</li>
          <li>Comedian</li>
          <li>Music</li>
        </ul>
      </div>
      <div class="personal">
        <h1 class="text-4xl font-bold">Personal Information: </h1>
        <p>Name: Tinnaphat Somsang</p>
        <p>Thai Name: ติณณภัทร์ สมแสง</p>
        <p>Age: {age}</p>
        <p>Date of Birth: 10/Nov/2008</p>
        <p>Communication: Thai, English, Chinese</p>
        <p>Location: Samutprakarn, Thailand</p>
        <p>Tel. <a href="tel:+66984176673">+66984176673</a></p>
        <p>Email: <a href="mailto:loyaltyplex@gmail.com">loyaltyplex@gmail.com</a></p>
      </div>
    </div>
  </div>
  <Footer />
</main>