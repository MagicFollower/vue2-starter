<template>
  <div>
    <my-hello :msg="'hello → '+randomNumber" @event-from-child="changeNumber"/>
    <br/>
    <button @click="changeNumber()">生成随机数</button>
  </div>
</template>

<script>


import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    'my-hello': HelloWorld
  },
  computed: {},
  data() {
    return {
      randomNumber: 0
    };
  },
  methods: {
    changeNumber(num) {
      this.randomNumber = num ?? Math.floor(Math.random() * 100 + 1);
    }
  }
};
</script>