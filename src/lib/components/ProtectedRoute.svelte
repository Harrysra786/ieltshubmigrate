<script>
  import { user, roles } from "../../lib/store";

  export async function load({ page, fetch }) {
    const { authenticated, userRoles } = await fetch("/api/check-auth").then(
      (res) => res.json()
    );

    if (!authenticated || !userRoles.includes("admin")) {
      return { status: 403 };
    }

    user.set(authenticated);
    roles.set(userRoles);
  }
</script>

<slot />
