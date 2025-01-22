<template>
   <div v-if="user">
      <h1>Welcome, {{ user.name }}</h1>
      <p>Email: {{ user.email }}</p>
      <button @click="logout">Logout</button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         user: null,
      };
   },
   async mounted() {
      const auth0 = this.$root.$auth0;
      const user = await auth0.getUser();
      this.user = user;
   },
   methods: {
      async logout() {
         const auth0 = this.$root.$auth0;
         await auth0.logout({ returnTo: window.location.origin });
      },
   },
};
</script>
