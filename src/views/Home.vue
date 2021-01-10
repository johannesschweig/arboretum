<template>
  <div class="home">
    <Creator/>
  </div>
</template>

<script>
// @ is an alias to /src
import Creator from '@/components/Creator.vue'

export default {
  name: 'Home',
  components: {
    Creator
  }
}
</script>
