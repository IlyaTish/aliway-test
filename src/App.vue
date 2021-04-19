<template>
  <div id='app'>
    <TableComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TableComponent from '@/components/Table/component.vue'

@Component({
  components: {
    TableComponent
  }
})

export default class App extends Vue {}
</script>

<style lang='stylus'>
#app
  font-size 16px
  font-family 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
