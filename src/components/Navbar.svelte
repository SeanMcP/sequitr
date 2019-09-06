<script>
  export let url;
  export let onSubmitUpdateUrl;
</script>

<header>
  <form on:submit={onSubmitUpdateUrl}>
    <input value={url} name="url" />
  </form>
</header>
