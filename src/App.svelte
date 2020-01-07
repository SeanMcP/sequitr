<script>
  import Footer from "./components/Footer.svelte";
  import Frame from "./components/Frame.svelte";
  import Navbar from "./components/Navbar.svelte";
  let url = "https://css-tricks.com";
  function onSubmitUpdateUrl(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const _url = formData.get("url");
    console.log("_url", _url);
    url = _url;
  }
</script>

<style>
  .App {
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  main {
    flex: 1;
  }
</style>

<div class="App">
  <Navbar {url} {onSubmitUpdateUrl} />
  <main id="main" role="main">
    <Frame {url} />
  </main>
  <Footer />
</div>
