<script>
  import { resetPassword } from "$lib/authService";

  let email = "";

  const handleSubmit = async () => {
    await resetPassword(email);
  };
</script>

<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
  <input class="border" type="email" bind:value={email} placeholder="Email" />
  <button class="bg-black text-white" type="submit">Reset Password</button>
</form>
