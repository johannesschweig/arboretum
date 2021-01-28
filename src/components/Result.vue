<template>
  <div>
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M124 12.0645C88.4476 -2.80508 45.0269 -5.18348 4 12.0362V68.0882C6.64583 88.0379 25.3339 120.865 64 128C102.666 120.865 121.354 88.0379 124 68.0882V12.0645Z" fill="url(#paint0_linear)"/>
        <path d="M16 22.6509V67.2549C18.0941 83.1699 32.9621 109.346 63.7451 115" stroke="black" stroke-opacity="0.7" stroke-dasharray="8 8"/>
        <path d="M111.49 22.6509V67.2549C109.396 83.1699 94.5282 109.346 63.7451 115" stroke="black" stroke-opacity="0.7" stroke-dasharray="8 8"/>
        <path d="M16 22.6508C48.6677 8.82992 83.2733 10.7591 111.543 22.6953" stroke="black" stroke-opacity="0.7" stroke-dasharray="8 8"/>
      </g>
        <text fill="black" fill-opacity="0.9" xml:space="preserve" style="white-space: pre" font-family="Helvetica Neue" font-size="50" letter-spacing="0em">
          <tspan :x="doubleDigit ? '23.4336' : '38.2168'" y="79.475">{{formattedSg.number}}</tspan>
        </text>
        <text fill="black" fill-opacity="0.9" xml:space="preserve" style="white-space: pre" font-family="Helvetica Neue" font-size="32" letter-spacing="0em">
          <tspan :x="doubleDigit ? '77' : '64'" y="78.824">.{{formattedSg.decimal}}</tspan>
        </text>
        <text id="kp" fill="black" fill-opacity="0.7" xml:space="preserve" style="white-space: pre" font-family="Helvetica Neue" font-size="12" letter-spacing="0em">
          <tspan x="64" y="110" text-anchor="middle">{{this.kp}}</tspan>
        </text>
      <defs>
        <linearGradient id="paint0_linear" x1="4" y1="9" x2="108.075" y2="112.925" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DFC873"/>
        <stop offset="1" stop-color="#9B5E2A"/>
        </linearGradient>
      </defs>
    </svg>



    <p>{{ attrString }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAttrString } from '../utils'

export default {
  computed: {
    ...mapState({
      kp: state => state.kpTotal,
      sg: state => state.sg,
      attr: state => state.attr
    }),
    attrString() {
      return getAttrString(this.attr, this.sg)
    },
    formattedSg() {
      let decimal
      if (String(this.sg).length === 1) {
        decimal = 0
      } else {
        decimal = String(this.sg).slice(-1)
      }
      return {
        number: Math.floor(this.sg),
        decimal
      }
    },
    doubleDigit() {
      return String(this.formattedSg.number).length === 2
    }
  }
}
</script>

<style scoped>
svg #kp {
  display: none;
}

svg:hover #kp{
  display: block;
}
#kp {
  color: red;
}
</style>
