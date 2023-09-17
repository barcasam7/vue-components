<script setup lang="ts">
import { ref, computed } from "vue";

type Tasks = {
   text: string;
   completed: boolean;
};

const tasks = ref<Tasks[]>([]);
const search = ref<string>("");
const type = ref<string>("all");

function clearTasks() {
   tasks.value = [];
}

function addTask(_event: Event) {
   tasks.value.push({ text: search.value, completed: false });
   search.value = "";
   //alternative
   // tasks.value = [...tasks.value, { text: value, completed: false }];
}

function changeType(value: string) {
   type.value = value;
}

function changeStatus(id: number, event: Event) {
   const checked = (event.target as HTMLInputElement).checked;
   tasks.value[id].completed = checked;
}

const filteredTasks = computed(() => {
   if (type.value === "all") {
      return tasks.value;
   } else {
      return tasks.value.filter((task) => (task.completed === (type.value === "completed") ? 1 : 0));
   }
});
</script>

<style scoped></style>
<template>
   <div class="wrapper-todo">
      <div class="task-input">
         <img src="/bars-icon.svg" alt="icon" />
         <input type="text" name="search" v-model="search" placeholder="Add a new task" @keyup.enter="addTask($event)" />
      </div>
      <div class="controls">
         <div class="filters">
            <span :class="type === 'all' && 'active'" id="all" @click="changeType('all')">All</span>
            <span :class="type === 'pending' && 'active'" id="pending" @click="changeType('pending')">Pending</span>
            <span :class="type === 'completed' && 'active'" id="completed" @click="changeType('completed')">Completed</span>
         </div>
         <button @click="clearTasks" class="clear-btn" :class="filteredTasks.length > 0 && 'active'">Clear All</button>
      </div>
      <ul class="task-box">
         <li v-for="(task, id) in filteredTasks" class="task" :key="id">
            <label>
               <input @change="changeStatus(id, $event)" v-model="task.completed" name="status" type="checkbox" />
               <p :class="task.completed && 'checked'">{{ task.text }}</p>
            </label>
            <div class="settings">
               <v-icon name="fa-ellipsis-h" />
               <ul class="task-menu">
                  <li><i class="uil uil-pen"></i>Edit</li>
                  <li><i class="uil uil-trash"></i>Delete</li>
               </ul>
            </div>
         </li>
      </ul>
      <span class="no-task" v-show="filteredTasks.length === 0">You don't have any tasks</span>
   </div>
</template>
