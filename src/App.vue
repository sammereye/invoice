<template>
  <Sidebar />
  <Main />
</template>

<script>
import Sidebar from './components/Sidebar/SidebarIndex.vue';
import Main from './components/Main/MainIndex.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Main
  }
}
</script>