{#if isEmailAllowed}
  <slot />
{:else}
  <p>Access restricted. You do not have permission to view this page.</p>
{/if}

<script>
  import { onMount } from "svelte";
  import { user, allowedEmails } from "../store";

  let isEmailAllowed = false;

  $: if ($user && $allowedEmails.includes($user.email)) {
    isEmailAllowed = true;
  } else {
    isEmailAllowed = false;
  }
</script>
