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
    <h2>Kreaturenpunkte: XX</h2>
    <h2>Schwierigkeitsgrad: XX</h2>
  </div>
</template>

<script>
import { alias } from '../data/bestiary'
import Attribute from './Attribute.vue'

export default {
  components: {
    'attribute': Attribute
  },
  data () {
    return {
      bestiary: alias
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
