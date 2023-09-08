<script setup>

  import {useFlash} from '@/composables/useFlash';

  let { flash } = useFlash();


</script>

<template>
 <div>
  <p>
    <button @click="flash('test', 'It works')">Click me</button>
  </p>
 </div>
</template>
