<template>
  <div>
    <h1>Arboretum</h1>
    <div id='container'>
      <div id='left'>
        <p>Erschaffe deine Arborea-Kreaturen hier</p>
        <!-- Name -->
        <!-- <div class='row'>
          <div class='label'>Name</div>
          <input id='name'/>
        </div> -->
        <!-- Attributes -->
        <attribute
          :key='i'
          v-for='(el, i) in bestiary'
          :data='el' />
      </div>
      <div id='right'>
        <h3>Kreaturenpunkte: {{kp}}</h3>
        <h3>Schwierigkeitsgrad: {{sg}}</h3>
        <p>{{ attrString }}</p>
      </div>
    </div>
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
  width: 180px;
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

#container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
