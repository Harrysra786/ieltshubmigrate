<script>
  let weeks = 2;
  let country = 'India';
  let examType = 'Academic';
  let modules = [
    { name: 'Writing', cost: 1500, selected: true },
    { name: 'Speaking', cost: 600, selected: true },
    { name: 'Reading', cost: 450, selected: true },
    { name: 'Listening', cost: 100, selected: true },
    { name: 'Mock Test', cost: 250, selected: true }
  ];

  let countryMultipliers = {
    'India': { multiplier: 1, currency: 'INR', conversionRate: 1 },
    'Canada': { multiplier: 1.2, currency: 'CAD', conversionRate: 62 },
    'Australia': { multiplier: 1.2, currency: 'AUD', conversionRate: 56 },
    'Others': { multiplier: 1.2, currency: 'USD', conversionRate: 82 }
  };

  let examTypeMultipliers = {
    'Academic': 1,
    'General': 1.2
  };

  $: totalCost = modules.reduce((total, module) => total + (module.selected ? module.cost : 0), 0) * weeks;
  $: discount = modules.every(module => module.selected) && weeks >= 4;
  $: finalCost = ((discount ? totalCost / 2 : totalCost) * countryMultipliers[country].multiplier * examTypeMultipliers[examType]) / countryMultipliers[country].conversionRate;
  $: finalCostINR = finalCost * countryMultipliers[country].conversionRate;
  $: currency = countryMultipliers[country].currency;
</script>

<div class="max-w-md p-4 mx-auto bg-white rounded-md shadow-md">
  <div class="mb-4">
    <label class="font-bold">Exam Type: </label>
    <select bind:value={examType} class="p-2 ml-2 border rounded-md">
      <option>Academic</option>
      <option>General</option>
    </select>
  </div>

  <div class="mb-4">
    <label class="font-bold">Country: </label>
    <select bind:value={country} class="p-2 ml-2 border rounded-md">
      <option>India</option>
      <option>Canada</option>
      <option>Australia</option>
      <option>Others</option>
    </select>
  </div>

  <div class="mb-4">
    {#each modules as module (module.name)}
      <div class="flex items-center">
        <input type="checkbox" bind:checked={module.selected} class="mr-2 form-checkbox toggle toggle-xs" />
        <label>{module.name} ({module.cost} INR)</label>
      </div>
    {/each}
  </div>

  <div class="mb-4">
    <label class="font-bold">Weeks: {weeks}</label>
    <input type="range" min="2" max="8" bind:value={weeks} class="w-full mt-2 slider" />
  </div>

  <div class="text-center">
    {#if discount}
      <h2 class="text-lg line-through">{totalCost} INR</h2>
      <h2 class="text-lg text-green-500">{finalCost.toFixed(2)} {currency} ({finalCostINR.toFixed(2)} INR)</h2>
    {:else}
      <h2 class="text-lg">Total Cost: {finalCost.toFixed(2)} {currency} {#if country !== 'India'}({finalCostINR.toFixed(2)} INR){/if}</h2>
    {/if}
  </div>
</div>