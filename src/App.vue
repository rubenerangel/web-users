<template>
  <div id="app">
    <SiteNav v-if="showNav == false"></SiteNav>
    
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/TheHeading.vue'

export default {
  components: {
    SiteNav
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>