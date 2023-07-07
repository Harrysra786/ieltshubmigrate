<script>
  import { signUp } from "../../lib/authService";

  let email = "";
  let password = "";

  const handleSubmit = async () => {
    await signUp(email, password);
  };
</script>

<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
  <input class="border" type="email" bind:value={email} placeholder="Email" />
  <input
    class="border"
    type="password"
    bind:value={password}
    placeholder="Password"
  />
  <button class="bg-black text-white" type="submit">Sign Up</button>
</form>
