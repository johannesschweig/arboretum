<template>
  <div>
    <h1>Arboretum</h1>
    <p>Erschaffe deine Arborea-Kreaturen hier</p>
    <!-- Name -->
    <div class='row'>
      <div class='label'>Name</div>
      <input id='name'/>
    </div>
    <!-- Attributes -->
    <attribute
      :key='i'
      v-for='(el, i) in bestiary'
      :data='el' />
    <h2>Kreaturenpunkte: {{kp}}</h2>
    <h2>Schwierigkeitsgrad: {{sg}}</h2>
    <p>{{ attrString }}</p>
  </div>
</template>

<script>
import { alias } from '../data/bestiary'
import Attribute from './Attribute.vue'
import { mapState } from 'vuex'
import { getAttrString } from '../utils'

export default {
  components: {
    'attribute': Attribute
  },
  data () {
    return {
      bestiary: alias
    }
  },
  computed: {
    ...mapState({
      kp: state => state.kpTotal,
      sg: state => state.sg,
      attr: state => state.attr
    }),
    attrString() {
      return getAttrString(this.attr)
    }
  }
}
</script>

<style>
.label {
  font-size: 16px;
  width: 150px;
  display: inline-block;
}

.row {
  margin-bottom: 12px;
}
</style>

<style scoped>
input {
  width: 200px;
}
</style>
