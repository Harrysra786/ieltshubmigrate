<!-- UserMenu.svelte -->
<script>
    import { onMount } from "svelte";
    import authStore from "../../authstore.js";
    import { db } from "../../firebase.js";
  
    let contentList = [];
    let ownedContentList = [];
  
    onMount(async () => {
    const { user } = $authStore;
    if (user) {
      const contentRef = db.collection("coursecontent").doc("ideasbook");
      const contentSnapshot = await contentRef.get();

      console.log("Content Snapshot:", contentSnapshot.data()); // Debugging line

      contentSnapshot.data().accessibleto.forEach(async (accessibleItem) => {
        console.log("Accessible Item:", accessibleItem); // Debugging line

        if (await authStore.checkAccess(accessibleItem.id)) {
          contentList.push({ id: accessibleItem.id, data: accessibleItem.data });
        }
        if (accessibleItem.ownerId === user.uid) {
          ownedContentList.push({ id: accessibleItem.id, data: accessibleItem.data });
        }
      });
    }
  });
  </script>
  
  {#if $authStore.user}
    <div class="user-menu">
      <h2>Welcome, {$authStore.user.displayName}!</h2>
      <h3>Content you have access to:</h3>
      <ul>
        {#each contentList as { id, data }}
          <li>
            <a href={`/content/${id}`}>{data.title}</a>
          </li>
        {/each}
      </ul>
      <h3>Your owned content:</h3>
      <ul>
        {#each ownedContentList as { id, data }}
          <li>
            <a href={`/content/${id}`}>{data.title}</a>
          </li>
        {/each}
      </ul>
      <button on:click={() => authStore.logout()}>Logout</button>
    </div>
  {:else}
    <div class="user-menu">
      <p>Please log in to see the content you have access to.</p>
    </div>
  {/if}
  