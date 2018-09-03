<template>
  <div class="payroll-container">
222

  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'PayrollDetail',
  data(){
    return {
      limitMark: true, // 滚动加载禁止重复加载标识

    }
  },
  computed: {
    ...mapState([
      'test' // 当前选中的tab
    ])
  },
  created(){

    console.log(this.test)

  },
  watch: {

  },
  mounted () {

  },
  methods:{

  },
  components: {

  }

}

</script>

<style lang="scss">

</style>
