<template>
  <div class='container'>
    <h3
      @click='infoVis = !infoVis'>
      Kreaturen
    </h3>
    <button
      v-for='(c, i) in creatures'
      :key='i'
      class='tooltip'
      @click='setTemplate(c)'>
      {{ c.name }}
    </button>
    <p
      v-show='infoVis'>
      {{ info }}
    </p>
  </div>
</template>

<script>
import { creatures } from '../data/bestiary'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      creatures,
      info: '',
      infoVis: false
    }
  },
  methods: {
    ...mapActions([
      'batchSet'
    ]),
    setTemplate(c) {
      this.info = `${c.weapon}, ${c.info}`
      this.batchSet(c.name)
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 24px;
}
</style>