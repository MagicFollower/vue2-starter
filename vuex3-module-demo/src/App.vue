<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ myTitle }}</h1>
    <h1>Version⚙️: {{ myVersion }}</h1>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {

  },
  computed: {
    // use default attribute-name
    ...mapState('settings', ['title']),
    // map default attribute-name to new-attribute-name
    ...mapState('settings', {myTitle: 'title'}),
    ...mapState('settings', {myTitle: 'title', myVersion: 'version'}),
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('settings', ['plusVersion']),
    handleClick: function() {
      this.plusVersion(1)
    }
  }
}
</script>