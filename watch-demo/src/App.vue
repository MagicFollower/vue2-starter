<template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      user: {
        name: undefined,
        age: undefined,
        address: {
          province: undefined,
          city: undefined,
          country: undefined,
          tag: undefined
        }
      }
    }
  },
  watch: {
    user: {
      handler: function(newValue, oldValue){
        console.log("=========user=======")
        console.log(oldValue)
        console.log(newValue)
        console.log("=========user=======")
      },
      immediate: true,
      deep: true
    },
    // 'user.address' is parent of 'user.address.tag',
    //   → but it not has 'deep:true', so when 'user.address.tag' changed, this part will not be triggered.
    'user.address': {
      handler: function(newValue, oldValue){
        console.log("========user.address========")
        console.log(oldValue)
        console.log(newValue)
        console.log("========user.address========")
      },
      immediate: true
    },
    // 'user.address.tag': {
    //   handler: function(newValue, oldValue){
    //     console.log("========user.address.tag========")
    //     console.log(oldValue)
    //     console.log(newValue)
    //     console.log("========user.address.tag========")
    //   },
    //   immediate: true
    // }
  },
  methods: {
    handleClick: function() {
      // this.user.address.tag = Math.floor((Math.random()*999999))

      this.user = {
        name: "name-1",
        age: 33,
        address: {
          province: 1,
          city: 1,
          country: 1,
          tag: 1
        }
      }
    }
  }
}
</script>