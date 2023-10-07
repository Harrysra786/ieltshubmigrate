<script>
  import { onMount, onDestroy } from "svelte";
  import { user } from "$lib/store";
  import { signOut } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import LoginModal from '$lib/reusefire/LoginModal.svelte';

  let showMenu = false;

  function handleClick() {
    if (!$user) {
      // Open login/register modal
      document.getElementById('loginModal').classList.add('modal-open');
    } else {
      showMenu = !showMenu;
    }
  }

  function handleLogout() {
    // Log out user
    signOut(auth);
  }

  function handleDashboard() {
    // Redirect to dashboard page
    window.location.href = "/dashboard"; // Replace with your dashboard page URL
  }
</script>

<style>
  .login-status {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  .drop-up-menu {
    position: fixed;
    bottom: 40px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    padding: 5px;
    display: none;
  }

  .drop-up-menu.show {
    display: block;
  }

  .menu-item {
    padding: 5px 10px;
    cursor: pointer;
  }

  .menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>


{#if !$user}
  <p class="login-status" on:click="{handleClick}">👆🏼 Log in now</p>
  <LoginModal />
{:else}
  <p class="login-status" on:click="{handleClick}">
    👤 {$user.email.split("@")[0]}
  </p>
{/if}

{#if showMenu}
  <div class="drop-up-menu show">
    <div class="menu-item" on:click="{handleDashboard}">Dashboard</div>
    <div class="menu-item" on:click="{handleLogout}">Log out</div>
  </div>
{/if}
