<script context="module">
  export async function load() {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('previousUrl', window.location.pathname);
    }
    return {};
  }
</script>

<script>
  import Auth from "./../../lib/components/auth.svelte";
  import { goto } from '$app/navigation';
</script>

<section class="flex justify-center items-center">
<div class="max-w-md justify-center justify-items-center">
  <Auth navigate={goto} />
</div>
</section>
