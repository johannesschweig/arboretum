<template>
  <div>
    <h1>Arboretum</h1>
    <p>Erschaffe deine Arborea-Kreaturen hier</p>
    <div id='container'>
      <div id='left'>
        <TemplateSelector />
        <!-- Attributes -->
        <div id='attributes'>
          <Attribute
            :key='i'
            v-for='(el, i) in alias'
            :data='el' />
        </div>
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
import TemplateSelector from './TemplateSelector.vue'
import { mapActions, mapState } from 'vuex'
import { getAttrString } from '../utils'

export default {
  components: {
    Attribute,
    TemplateSelector
  },
  data () {
    return {
      alias,
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
  },
  
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
  grid-template-columns: 3fr 2fr;
  column-gap: 100px;
}

#attributes {
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  column-gap: 30px;
  grid-auto-flow: column;
}
</style>
