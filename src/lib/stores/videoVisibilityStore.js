// src/lib/stores/videoVisibilityStore.js
import { writable } from "svelte/store";

export const videoVisibility = writable({
  videos1: true,
  videos2: true,
  videos3: true,
  videos4: true,
});
