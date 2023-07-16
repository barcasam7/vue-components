<template>
   <div className="card skeleton">
      <div>
         <img alt="" className="avatar" />
      </div>
      <div className="user-info">
         <h2></h2>
         <p v-for="_n in rows"></p>
      </div>
   </div>
</template>

<script setup lang="ts">
const { rows } = defineProps<{
   rows: number;
}>();
defineExpose({
   rows,
});
</script>
