<template>
  <div class='container'>
    <h3>Kreaturen</h3>
    <button
      v-for='(c, i) in creatures'
      :key='i'
      @click='setTemplate(c.name)'>
      {{ c.name }}
    </button>
  </div>
</template>

<script>
import { creatures } from '../data/bestiary'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      creatures
    }
  },
  methods: {
    ...mapActions([
      'batchSet'
    ]),
    setTemplate(name) {
      this.batchSet(name)
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 24px;
}
</style>