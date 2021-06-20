<template>
  <div class="mt-4 d-flex justify-space-between pl-4 pr-4">
    <div>
      <h4>{{name}}</h4>
      <span>{{count}}</span>
    </div>
    <h4 class="time">{{time}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Pill-Data',
  props: [
    'name',
    'count',
    'time'
  ]
}
</script>

<style>
.time {
  background: #f5b121;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  color: #fff;
}
</style>