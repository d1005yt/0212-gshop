<template>
   <div>
    <Header/>
    <router-view/>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import { reqCategoryList } from './api'
export default {
  name: 'App',
  async mounted(){
    // const result = await reqCategoryList()
    // console.log('result',result);
    this.$store.dispatch('getCategoryList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
