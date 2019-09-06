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
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
</style>

<div>
  <Navbar {url} {onSubmitUpdateUrl} />
  <main id="main" role="main">
    <Frame {url} />
  </main>
  <Footer />
</div>
