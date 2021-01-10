<template>
  <div class='row'>
    <input
      v-if='data.bool'
      v-model='input'
      type='checkbox'
      @change='change'/>
    <div
      class='label'>
      {{ data.long }}
      <template v-if='data.emoji'>
        {{data.emoji }}
      </template>
    </div>
    <input
      v-if='!data.bool'
      type='number'
      v-model='input'
      value='0'
      @change='change'/>
    <!-- <span> (KP: {{kp}})</span> -->
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
input[type='checkbox'] {
  margin-right: 8px;
}

input[type='number'] {
  width: 50px;
}
</style>