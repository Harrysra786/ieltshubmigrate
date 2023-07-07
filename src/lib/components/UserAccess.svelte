<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';

  let users = [];
  let userAccess = {};

  onMount(async () => {
    const db = firebase.firestore();
    const usersSnapshot = await db.collection('users').get();

    usersSnapshot.forEach((doc) => {
      const userData = doc.data();
      users.push({ id: doc.id, ...userData });

      userAccess[doc.id] = {
        week1: userData.week1 || false,
        week2: userData.week2 || false,
        week3: userData.week3 || false,
        week4: userData.week4 || false,
      };
    });
  });

  async function saveChanges() {
    const db = firebase.firestore();

    for (const userId in userAccess) {
      await db.collection('users').doc(userId).update(userAccess[userId]);
    }

    alert('Changes saved successfully!');
  }
</script>

<div class="container mx-auto">
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Email</th>
        <th class="px-4 py-2">Week 1</th>
        <th class="px-4 py-2">Week 2</th>
        <th class="px-4 py-2">Week 3</th>
        <th class="px-4 py-2">Week 4</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user (user.id)}
        <tr>
          <td class="border px-4 py-2">{user.name}</td>
          <td class="border px-4 py-2">{user.email}</td>
          <td class="border px-4 py-2">
            <input type="checkbox" bind:checked={userAccess[user.id].week1} />
          </td>
          <td class="border px-4 py-2">
            <input type="checkbox" bind:checked={userAccess[user.id].week2} />
          </td>
          <td class="border px-4 py-2">
            <input type="checkbox" bind:checked={userAccess[user.id].week3} />
          </td>
          <td class="border px-4 py-2">
            <input type="checkbox" bind:checked={userAccess[user.id].week4} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" on:click={saveChanges}>
    Save Changes
  </button>
</div>
