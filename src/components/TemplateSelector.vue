<template>
  <div class='container'>
    <!-- tabbar -->
    <div>
      <div
        :class='["tabbutton", {"active": tab === 1}]'
        @click='setTab(1)'>
        Meine Kreaturen
      </div>
      <div
        :class='["tabbutton", {"active": tab === 2}]'
        @click='setTab(2)'>
        Aborea-Kreaturen
      </div>
    </div>
    <!-- first tab -->
    <div
      v-if='tab === 1'
      class='tab'>
      <button
        v-for='(c, i) in myCreatures'
        :key='i'
        @click='setTemplate(c)'>
        {{ c.name }}
      </button>
      <p>
        <i>Info:</i> {{ info }}
      </p>
    </div>
    <!-- second tab -->
    <div
      v-if='tab === 2'
      class='tab'>
      <button
        v-for='(c, i) in creatures'
        :key='i'
        @click='setTemplate(c)'>
        {{ c.name }}
      </button>
      <p v-if='info !== ""'>
        <i>Info:</i> {{ info }}
      </p>
    </div>
  </div>
</template>

<script>
import { creatures, myCreatures } from '../data/bestiary'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      creatures,
      myCreatures,
      info: '',
      tab: 1
    }
  },
  methods: {
    ...mapActions([
      'batchSet'
    ]),
    setTab(t) {
      this.tab = t
      this.info = ''
    },
    setTemplate(c) {
      this.info = `${c.weapon}, ${c.info}`
      this.batchSet(c.name)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 48px 0;
}

.tabbutton {
  display:inline-block;
  font-size: 18px;
  opacity: .7;
  width: 150px;
  text-align: center;
  padding: 12px 24px;
}

.tabbutton:hover {
  opacity: 1;
  cursor: pointer;
}

.tabbutton.active {
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: var(--highlight);
  opacity: 1;
}

.tab {
  padding: 12px;
  background-color: var(--bg-light);
}

.tab > p {
  margin-bottom: 0px;
}
</style>