<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Vuetify Productivity</v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="tasks" text>
          <v-icon left>mdi-format-list-bulleted-square</v-icon>
          Tasks
        </v-btn>
        <v-btn to="calendar" text>
          <v-icon left>mdi-calendar</v-icon>
          Calendar
        </v-btn>
        <v-btn to="table" text>
          <v-icon left>mdi-table</v-icon>
          Table
        </v-btn>
        <v-btn to="form" text>
          <v-icon left>mdi-clipboard</v-icon>
          Form
        </v-btn>
      </v-toolbar-items>

      <!-- <router-link class="white--text" to="#">
        Link 1
      </router-link>
      <v-divider vertical />
      <div>
        Link 2
      </div> -->

     <!-- <v-list
        nav
      >
        <v-list-item>
          Link 1
        </v-list-item>
        <v-list-item>
          Link 2
        </v-list-item>
        <v-list-item>
          Link 3
        </v-list-item>
     </v-list> -->

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn @click="drawer = !drawer" class="ml-4">Menu</v-btn>

      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      absolute
      dark
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Vuetify Productivity</v-list-item-title>
            <v-list-item-subtitle>Task Tracking</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/tasks" link>
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/calendar" link>
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/table" link>
          <v-list-item-icon>
            <v-icon>mdi-table</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Table</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/form" link>
          <v-list-item-icon>
            <v-icon>mdi-clipboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Form</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false
  })
}
</script>
