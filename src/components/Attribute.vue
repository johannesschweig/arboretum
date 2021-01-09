<template>
  <div class='row'>
    <div
      class='label'>
      {{ data.long }}
    </div>
    <input
      v-if='data.bool'
      v-model='input'
      type='checkbox'/>
    <input
      v-else
      type='number'
      v-model='input'
      value='0'/>
    <span> (KP: {{kp}})</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      input: 0
    }
  },
  computed: {
    kp () {
      return this.input * this.data.mod
    }
  }
}
</script>

<style scoped>


input[type='number'] {
  width: 50px;
}
</style>