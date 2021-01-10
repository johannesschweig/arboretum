<template>
  <div>
    <h1>Arboretum</h1>
    <div id='container'>
      <div id='left'>
        <p>Erschaffe deine Arborea-Kreaturen hier</p>
        <!-- Name -->
        <div class='row'>
            <label
              class='label'
              for='template'>
              Vorlage
            </label>
            <!-- replace with string of creatures -->
            <input
              list='creatures'
              name='template'
              id='template'
              v-model='template'
              @change='setTemplate'>
            <datalist id='creatures'>
              <option
                v-for='(c, i) in alphabeticCreatures'
                :key='i'
                :value='c'/>
            </datalist>
        </div>
        <!-- Attributes -->
        <div id='attributes'>
          <attribute
            :key='i'
            v-for='(el, i) in bestiary'
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
import { alias, creatures } from '../data/bestiary'
import Attribute from './Attribute.vue'
import { mapActions, mapState } from 'vuex'
import { getAttrString } from '../utils'

export default {
  components: {
    'attribute': Attribute
  },
  data () {
    return {
      bestiary: alias,
      creatures,
      template: ''
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
    },
    alphabeticCreatures() {
      return this.creatures.map(c => c.name).sort()
    }
  },
  methods: {
    ...mapActions([
      'batchSet'
    ]),
    setTemplate() {
      this.batchSet(this.template)
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
