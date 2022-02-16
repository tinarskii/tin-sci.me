<script>
  import Title from "$lib/components/Title.svelte";
  import About from "$lib/components/About.svelte";
  import Info from "$lib/components/Info.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Donations from "$lib/components/Donations.svelte";

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

<Title />
<About />
<Info age={age} />
<Skills />
<Donations />
<Contact />
<Footer />