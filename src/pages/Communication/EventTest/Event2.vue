<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
    <button @click="$emit('click', 'click')">分发自定义click事件</button><br>
    <button @click="$emit('hah', 'xixi')">分发自定义hah事件</button><br>
  </div>
</template>
