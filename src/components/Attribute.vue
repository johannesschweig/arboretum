<template>
  <div class='row'>
    <input
      v-if='data.bool'
      v-model='input'
      type='checkbox'
      :id='data.short'
      :name='data.short'/>
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
      v-model.number='input'
      value='0'
      :class='{"highlight": input != 0 }'/>
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
  computed: {
    input: {
      get() {
        return this.$store.state.attr[this.data.short]
      },
      set (value) {
        this.set({
          short: this.data.short,
          attr:value 
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'set'
    ])
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

.highlight {
  -webkit-box-shadow: 0px 0px 0px 1px var(--highlight);
  -moz-box-shadow: 0px 0px 0px 1px var(--highlight);
  box-shadow: 0px 0px 0px 1px var(--highlight);
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
