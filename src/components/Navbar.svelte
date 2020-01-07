<script>
  export let url;
  export let onSubmitUpdateUrl;
</script>

<header>
  <form on:submit|preventDefault={onSubmitUpdateUrl}>
    <input aria-label="View URL" value={url} name="url" />
  </form>
</header>
