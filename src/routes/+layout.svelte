<script>
    import "../app.css";
    import Footer from "../lib/Footer.svelte";
    import Header from "../lib/Header.svelte";
    import Status from "../lib/LoginStatus.svelte";
    import { onMount, onDestroy } from "svelte";
    import { auth } from "../lib/firebase";
import { user } from "../lib/store";
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
   
  
   <Header />
    <slot />
    <Footer />
  <!-- Footer -->
  <Status />