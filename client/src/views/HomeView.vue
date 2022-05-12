<template>
  <div class="home">
    <PrimeNumberTest />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrimeNumberTest from '@/components/PrimeNumberTest.vue';

@Options({
  components: {
    PrimeNumberTest,
  },
})
export default class HomeView extends Vue {}
</script>
