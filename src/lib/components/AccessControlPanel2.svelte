
<script>
  import { onMount } from "svelte";
  import { testReadAllowedEmails } from "../../accessControlService";

  import { userProfiles } from "../store";
  import { getAllUserProfiles } from "../userProfileService";
  import { getAllowedEmails, addAllowedEmail, removeAllowedEmail } from "../../accessControlService";

  onMount(async () => {
    $userProfiles = await getAllUserProfiles();
    const allowedEmails = await getAllowedEmails();
    console.log("Allowed emails:", allowedEmails);

    $userProfiles.forEach((userProfile) => {
      userProfile.allowed = allowedEmails.includes(userProfile.email);
    });
  });

  function toggleAccess(userProfile) {
    userProfile.allowed = !userProfile.allowed;
  }

  async function saveAccess() {
    for (const userProfile of $userProfiles) {
      if (userProfile.allowed) {
        await addAllowedEmail(userProfile.email);
      } else {
        await removeAllowedEmail(userProfile.email);
      }
    }
  }
</script>


<div class="space-y-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Access
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each $userProfiles as userProfile}
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {userProfile.email}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input
              type="checkbox"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              bind:checked={userProfile.allowed}
              on:change={() => toggleAccess(userProfile)}
            />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <button
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    on:click={saveAccess}
  >
    Save
  </button>
</div>

