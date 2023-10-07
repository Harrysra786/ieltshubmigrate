import { writable } from "svelte/store";
export const essayTopic = writable('');
export const essayNumber = writable(''); // add this line
export const user = writable(null);
export const roles = writable([]);
// Add a new writable store for allowedEmails
export const allowedEmails = writable([]);
// In store.ts, initialize userProfiles with an empty array
export const userProfiles = writable([]);
export const previousUrl = writable(null);
