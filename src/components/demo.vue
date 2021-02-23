<template>
  <input v-model="name">
  {{firstName}}{{lastName}}
</template>

<script>
import {Vue} from 'vue-class-component'

export default class Demo extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
