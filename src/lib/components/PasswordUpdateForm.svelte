<script>
  import { updatePassword } from "../../lib/authService";

  let newPassword = "";

  const handleSubmit = async () => {
    await updatePassword(newPassword);
  };
</script>

<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
  <input
    class="border"
    type="password"
    bind:value={newPassword}
    placeholder="New Password"
  />
  <button class="bg-black text-white" type="submit">Update Password</button>
</form>
