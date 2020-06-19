<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试原生事件</button>
    <button @click="test1($event)">测试原生事件222</button>
    <br><br>

    <Event1 @click.native="test2"/>
    <br><br>
    <Event2 @click="test3" @hah="test4($event)"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    methods: {
      test1 (event) { // event就是事件相关数据对象
        alert(event.target.innerHTML)
      },

      test2 (event) {
        alert(event.target.innerHTML)
      },

      test3 (data) {
        alert('自定义click回调' + data)
      },

      test4 (data) {
        alert('自定义hah回调' + data)
      }
    },

    components: {
      Event1,
      Event2,
    },
  }
</script>
