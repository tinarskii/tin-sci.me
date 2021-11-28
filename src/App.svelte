<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import About from './routes/About.svelte';
  import Blog from './routes/Blog.svelte';
  import Contact from './routes/Contact.svelte';
  import Skills from './routes/Skills.svelte';
  import Error from './routes/Error.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/skills" component={Skills} />
    <Route path="/*" component={Error} />
  </div>
</Router>