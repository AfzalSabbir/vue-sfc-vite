<% if(vueVersion === "vue2") { -%>
<template>
  <button class="increase" @click="increase">Clicked {{ count }} times.</button>
</template>

<% } -%>
<script<% if (ts) { %> lang="ts"<% } %>>
<% if(vueVersion === "vue3") { -%>
import { ref, defineComponent } from "vue";

<% } else if(ts) { -%>
import Vue from "vue";

<% } -%>
export default <% if (vueVersion === "vue3") {%>defineComponent(<% } else if (ts) { %>Vue.extend(<% } %>{
  name: "<%= componentNamePascalCase %>",
<% if(vueVersion === "vue2") { -%>
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
  },
<%  }
    if(vueVersion === "vue3") { -%>
  setup() {
    const count = ref<% if (ts) { %><number><% } %>(0);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
    };
  },
<% } -%>
<% if (vueVersion === "vue3" || ts) { -%>
});
<% } else { -%>
};
<% } -%>
</script>
<% if(vueVersion === "vue3") { -%>

<template>
  <button class="increase" @click="increase">Clicked {{ count }} times.</button>
</template>
<% } -%>

<style scoped lang="scss">
  @import "../assets/scss/<%= componentName %>.scss";
</style>