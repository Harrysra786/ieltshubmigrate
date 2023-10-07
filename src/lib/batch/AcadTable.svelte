<script>
    export let data = [];
</script>

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="border bg-neutral-800 border-neutral-800">
          
            <tr>
              <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                No.
              </th>
              <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                Material
              </th>
              <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                Download
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each data as { number, material, link }, i}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  {number}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {material}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a href={link}>
                    <button class="flex px-2 py-1 mx-5 text-sm text-white transition-transform transform rounded-md shadow-lg outline-none bg-neutral-800 focus:ring-4 active:scale-x-75">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span class="ml-1">Download</span>
                    </button>
                  </a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
