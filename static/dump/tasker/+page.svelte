<script>
  import { onMount } from 'svelte';
  import TaskInput from './../../lib/components/TaskInput.svelte';
  import TaskList from '../../lib/components/TaskList.svelte';
  let tasks = [];

onMount(() => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  sortTasks();
});

function addTask(task) {
  tasks = [...tasks, { ...task, id: Date.now() }];
  sortTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  sortTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function sortTasks() {
  tasks.sort((a, b) => {
    if (a.priority === 'urgent') return -1;
    if (b.priority === 'urgent') return 1;
    if (a.priority === 'important') return -1;
    if (b.priority === 'important') return 1;
    return 0;
  });
}
</script>

<div class="max-w-xl p-4 mx-auto space-y-4">
<TaskInput {addTask} />
<TaskList {tasks} {deleteTask} />
</div>