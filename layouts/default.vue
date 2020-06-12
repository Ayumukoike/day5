<template>
  <div>
    <Header />
    <nuxt />
    <Migration />
    <page-footer />
  </div>
</template>

<script>
import Header from "~/components/common/header.vue";
import Migration from "~/components/common/Migration.vue";
import PageFooter from "~/components/common/PageFooter.vue";
export default {
  components: {
    Header,
    Migration,
    PageFooter
  }
};
</script>
