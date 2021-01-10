<template>
  <div class='row'>
    <input
      v-if='data.bool'
      v-model='input'
      type='checkbox'
      :id='data.short'
      :name='data.short'
      @change='change'/>
    <label
      :for='data.short'
      class='label'>
      {{ data.long }}
      <template v-if='data.emoji'>
        {{data.emoji }}
      </template>
      <span class='tooltip'>
        ?
        <span class='tooltiptext'>{{ data.help }}</span>
      </span>
      
    </label>
    <input
      v-if='!data.bool'
      type='number'
      v-model='input'
      value='0'
      @change='change'/>
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

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted #424242;
  color: #424242;
  font-size: 14px;
  margin: 0 5px;
  text-align: center;
  cursor: help;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: #424242;
  color: #fff;
  padding: 5px;
  border-radius: 2px;
  text-align: left;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
