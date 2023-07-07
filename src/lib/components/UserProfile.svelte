<script>
  import {
    getUserProfile,
    updateUserProfile,
  } from "../../lib/userProfileService";

  let uid = "";
  let profile;

  const loadProfile = async () => {
    profile = await getUserProfile(uid);
  };

  const saveProfile = async () => {
    await updateUserProfile(uid, profile);
  };
</script>

<svelte:window on:load={loadProfile} />
<div class="flex flex-col">
  <input class="border" bind:value={profile.name} placeholder="Name" />
  <button class="bg-black text-white" on:click={saveProfile}>Save</button>
</div>
