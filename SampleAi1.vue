<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-drawer(show-if-above v-model="leftDrawerOpen" side="left")
    // Content for Left Nav app goes here

  q-drawer(show-if-above v-model="rightDrawerOpen" side="right")
    // Content for Right Nav app goes here

  q-header(elevated)
    q-toolbar
      q-btn(dense flat @click="toggleLeftDrawer" icon="menu")
      q-toolbar-title Main Title

  .q-pa-md
    slot(name="breadcrumbs")

  q-page-container(style="height: 100%;")
    router-view

  q-footer(elevated)
    // Content for Footer app goes here
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
