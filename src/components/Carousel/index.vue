<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props:{
    carouselList:Array,
    autoplay:Boolean
  },
  watch:{
    // carouselList(value){
    //   this.$nextTick(()=>{
    //     this.initSwiper()
    //   })
    // }
   
//第一种
     carouselList:{
       handler(value){
        if(this.carouselList.length ===0) return
        this.$nextTick(()=>{
          this.initSwiper()
        })
      },
      immediate:true//在初始时就会执行一次，数据更新才创建
     }
  },
  mounted(){
    // setTimeout(()=>{
      // new Swiper(this.$refs.swiper, {
      //   direction: 'horizontal', // 垂直切换选项
      //   loop: true, // 循环模式选项
      //     autoplay: true, // 是否自动轮播
      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
        
      //   // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      // })   
    // },1000)  
     //第二种
      // if(this.carouselList.length > 0){//已经显示了
      //   this.initSwiper()//直接创建swiper
      // }
       
  },

  methods:{
     initSwiper(){
        new Swiper(this.$refs.swiper, {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
          autoplay: true, // 是否自动轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })   
     }
  }
 
}
</script>

<style lang="less" scoped>

</style>
