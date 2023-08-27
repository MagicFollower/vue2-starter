<template>
  <div style="background: bisque; width: 450px; padding: 10px; border-radius: 10px;">
    <h1>{{ msg }}</h1>
    <button @click="emitEvent">[子组件的button，点击向父组件传递信息]</button>
    <br/><br/>
    <slot/>
    <br/><br/>
    <slot name="my-slot"/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['event-from-child'],
  methods: {
    changeMsg() {
      /**
       * ESLint: Unexpected mutation of "msg" prop.(vue/no-mutating-props)
       * 这是ESLint中的一个<警告>，提示在Vue组件中对"msg" prop进行了意外的改变，违反了Vue官方推荐的单向数据流的原则。
       * 在Vue中，props是从父组件传递给子组件的，子组件应该是只读的，不应该直接对props进行修改。这是为了确保父子组件之间数据的一致性和可追踪性。
       */
      // this.msg = '???'
    },
    emitEvent() {
      const eventData = '2147483647';
      this.$emit('event-from-child', eventData);
    }
  }
};
</script>

<style scoped>

</style>
