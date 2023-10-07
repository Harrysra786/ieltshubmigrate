<script>
  import { signIn } from "$lib/authService";
  import { user } from "$lib/store";
  import { auth } from "$lib/firebase";

  import { signInWithEmailAndPassword } from "firebase/auth";
  import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

async function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { email: userEmail } = userCredential.user;
    user.set(userCredential.user);
    dispatch("message", `Successfully logged in as ${userEmail}`);
  } catch (error) {
    dispatch("message", `Login failed because ${error.message}`);
  }
}




  let email = "";
  let password = "";

  const handleSubmit = async () => {
    await signIn(email, password);
  };

</script>

<form class="flex flex-col" on:submit="{handleLogin}">

  <input type="email" class="form-input" placeholder="Email" required name="email" />
<input type="password" class="form-input" placeholder="Password" required name="password" />

  <button class="form-button mt-2" type="submit">Sign In</button>
</form>
