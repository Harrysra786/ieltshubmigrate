<script>
    export let tasks;
    export let deleteTask;
  
    const getPriorityClass = (priority) => {
      switch(priority) {
        case 'urgent':
          return 'border-red-500';
        case 'important':
          return 'border-black';
        default:
          return 'border-green-500';
      }
    }
  </script>
  
  <div class="space-y-2">
    {#each tasks as task (task.id)}
      <div class={`flex justify-between items-center border-b-[3px] ${getPriorityClass(task.priority)}`}>
        <span>{task.task}</span>
        <button on:click={() => deleteTask(task.id)} class="p-2 text-white bg-red-500 rounded-md"></button>
      </div>
    {/each}
  </div>
  