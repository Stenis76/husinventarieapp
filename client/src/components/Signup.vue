<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registrering</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    name="firstName"
                    label="Förnamn"
                    type="text"
                    v-model="firstName"
                  ></v-text-field>
                  <v-text-field
                    name="lastName"
                    label="Efternamn"
                    type="lastName"
                    v-model="lastName"
                  ></v-text-field>
                  <v-text-field
                    name="email"
                    label="Email"
                    type="text"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Lösenord"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signupHandler">Registrera</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    error: false,
  }),
  methods: {
    async signupHandler() {
      const credentials = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      await this.$store.dispatch("SESSION/signup", credentials).then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
  mounted() {
    this.$store.dispatch("SESSION/setInSignup", true)
    this.$store.dispatch("SESSION/setInLogin", false)
  }
};
</script>

<style></style>
