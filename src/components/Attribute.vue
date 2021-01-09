<template>
  <div class='row'>
    <div
      class='label'>
      {{ data.long }}
    </div>
    <input
      v-if='data.bool'
      v-model='input'
      type='checkbox'
      @change='change'/>
    <input
      v-else
      type='number'
      v-model='input'
      value='0'
      @change='change'/>
    <span> (KP: {{kp}})</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions([
      'set'
    ]),
    change() {
      this.set({
        short: this.data.short,
        attr: this.input,
        kp: this.kp
      })
    }
  }
}
</script>

<style scoped>


input[type='number'] {
  width: 50px;
}
</style>