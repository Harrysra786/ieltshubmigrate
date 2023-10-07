<script>
    import "../app.css";
    import Header from "$lib/main/Header.svelte";
    import Status from "$lib/main/LoginStatus.svelte";
    import { onMount, onDestroy } from "svelte";
    import { auth } from "$lib/firebase";
    import { user } from "$lib/store";
    import MarqueeTextWidget from "svelte-marquee-text-widget";
    let unsubscribe;
   
onMount(() => {
  unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    user.set(firebaseUser);
  });
});

onDestroy(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
  </script>
   
   <MarqueeTextWidget duration="{45}">
    <div class="py-2 text-white bg-neutral-800">⚠️ The website is currently under development. Some parts may not work as intended. If you are not able to access anything you paid for, text me on +91-8528723949.   </div>
  </MarqueeTextWidget>
   <Header />


    <slot />

  <!-- Footer -->
  <Status />

  