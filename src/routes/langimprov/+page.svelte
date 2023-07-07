<script>
  import Langimprov from "../../lib/components/langimprov.svelte";
  let password = "";
  let isAuthorized = false;
  let wrongPassword = false;

  function checkPassword() {
    if (password === "harielts123") {
      isAuthorized = true;
    } else {
      wrongPassword = true;
    }
  }
</script>

<Langimprov />
