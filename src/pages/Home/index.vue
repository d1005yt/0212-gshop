<template>
  <div>
      <TypeNav />
      <ListContainer />
      <TodayRecommend />
      <Rank />
      <Like />
      <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
      <Brand />
        
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Rank from './Rank/Rank'
import Like from './Like/Like'
import Floor from './Floor/Floor'
import Brand from './Brand/Brand'

export default {
  name: 'Home',
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  mounted(){
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getBanners')
  },
  // 局部注册组件 
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style lang="less" scoped>

</style>
