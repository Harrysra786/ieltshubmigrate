<script>
    let task = '';
    let priority = 'todo';
    export let addTask;
  
    function add() {
      addTask({ task, priority });
      task = '';
      priority = 'todo';
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      add();
    }
  </script>
  
  <form on:submit={handleSubmit} class="flex items-center space-x-4">
    <input bind:value={task} class="flex-grow p-2 border-2 border-gray-300 rounded-md" placeholder="Enter task" />
    <div class="flex space-x-2">
      <button type="button" on:click={() => priority = 'urgent'} class={`p-4 rounded-md ${priority === 'urgent' ? 'bg-red-500' : 'bg-red-200'}`}></button>
      <button type="button" on:click={() => priority = 'important'} class={`p-4 rounded-md ${priority === 'important' ? 'bg-black text-white' : 'bg-gray-300'}`}></button>
      <button type="button" on:click={() => priority = 'todo'} class={`p-4 rounded-md ${priority === 'todo' ? 'bg-green-500' : 'bg-green-200'}`}></button>
    </div>
    <button type="submit" class="p-3 text-white bg-blue-500 rounded-full">+</button>
  </form>
  