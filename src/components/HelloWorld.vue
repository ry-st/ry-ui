<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <base-table :columns="cols" :data="data"></base-table>  
  </div>
</template>

<script>
import BaseTable from "./BaseTable";
export default {
  name: 'HelloWorld',
  components: {BaseTable},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cols: [
        {field: 'aaa',label: "阿斯顿发"}
      ],
      data: [
          {aaa:"asdfasdf"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
