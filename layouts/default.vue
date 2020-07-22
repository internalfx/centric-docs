<script>

export default {
  data: function () {
    return {
      drawer: false,
      navColor: 'primary'
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
  }
}

</script>

<template>
  <v-app>
    <v-navigation-drawer
      app
      :value="drawer || $vuetify.breakpoint.mdAndUp"
      @input="drawer = $event"
      :temporary="$vuetify.breakpoint.smAndDown"
      clipped
      :mobile-break-point="'sm'"
    >

      <v-list dense class="small-margin">

        <v-list-item :color="navColor" to="/" exact nuxt>
          <v-list-item-action><v-icon>$home</v-icon></v-list-item-action>
          <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
        </v-list-item>

        <v-list-item :color="navColor" to="/installation" exact nuxt>
          <v-list-item-action><v-icon>$home</v-icon></v-list-item-action>
          <v-list-item-content><v-list-item-title>Installation</v-list-item-title></v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar app clipped-left dark color="secondary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown" />
      <v-toolbar-title @click="$router.push('/')" class="clickable">
        <h2>Centric Docs</h2>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="mb-12">
      <nuxt :key="$route.fullPath"/>
    </v-content>

  </v-app>
</template>

<style lang="scss">
</style>
