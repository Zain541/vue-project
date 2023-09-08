<script setup>

  import {useStorage} from '@/composables/useStorage';

  let food = useStorage('food', 'tacos');
  let age = useStorage('age', 10);

  let obj = useStorage('obj', {one: 'one'});

  setTimeout(() => {
    obj.value = {'changed': 'entirely'};
  }, 3000);

</script>

<template>
 <div>
  <p>
    what is your favorite food? <input type="text" v-model="food" @input="write('food', food)">
  </p>

  <p>
    How old are you? <input type="text" v-model="age">
  </p>
 </div>
</template>
