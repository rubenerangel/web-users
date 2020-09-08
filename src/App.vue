<template>
  <div id="app">
    <site-nav v-if="showNav == false" />
    
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