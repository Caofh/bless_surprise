<template>
  <HomeItem></HomeItem>

</template>

<script>
  import { mapState } from "vuex"
  import HomeItem from '../components/HomeItem.vue'

  export default {
    name: 'Home',
    data(){
      return {

      }
    },
    computed: {
      ...mapState([
        'test' // 当前选中的tab
      ])
    },
    created () {

      console.log(this.test)

    },
    watch: {

    },
    mounted () {

    },
    methods: {

    },
    components: {
      HomeItem
    }

  }

</script>

<style lang="scss">

</style>
