<template>
  <div>
    <h1>Arboretum</h1>
    <p>Erschaffe deine Arborea-Kreaturen hier</p>
    <!-- SG, treasure and string  -->
    <Result />
    <!-- Monsters -->
    <TemplateSelector />
    <!-- Attributes -->
    <h3>Fähigkeiten</h3>
    <div id='attributes'>
      <Attribute
        :key='i'
        v-for='(el, i) in alias'
        :data='el' />
      </div>
  </div>
</template>

<script>
import { alias } from '../data/bestiary'
import Attribute from './Attribute.vue'
import Result from './Result.vue'
import TemplateSelector from './TemplateSelector.vue'

export default {
  components: {
    Attribute,
    Result,
    TemplateSelector
  },
  data () {
    return {
      alias,
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

#attributes {
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  column-gap: 30px;
  grid-auto-flow: column;
}
</style>
