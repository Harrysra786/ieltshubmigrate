<script>
    export let imgSrc = '';
    export let name = '';
    export let wt1Score = '';
    export let wt2Score = '';
    export let listeningScore = '';
    export let readingScore = '';
    export let speakingScore = '';
  </script>
  
  <section class="relative py-2 bg-blueGray-50">
    <div class="w-full px-4">
      <article class="relative flex flex-col w-full min-w-0 text-white break-words rounded shadow-lg bg-neutral-800">
        <header class="px-4 py-3 mb-0 border-0 rounded-t">
          <div class="flex flex-wrap items-center justify-center">
            <div class="relative flex items-center justify-center w-full max-w-full px-4">
                <img src={imgSrc} class="w-12 h-12 mr-4 bg-white border rounded-full imgshadowed" alt="User profile picture">
                <h3 class="text-lg font-semibold text-white">{name}</h3>
            </div>
          </div>
        </header>
  
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">WT1</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">WT2</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">Writing</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">Listening</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">Reading</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">Speaking</th>
                  <th class="px-6 py-3 text-xs font-semibold text-left text-neutral-800 uppercase align-middle bg-[#FFD243] border border-l-0 border-r-0 border-white border-solid whitespace-nowrap">Overall</th>
                </tr>
              </thead>
  
            <tbody>
              <tr>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">{wt1Score}</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">{wt2Score}</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">Writing</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">{listeningScore}</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">{readingScore}</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">{speakingScore}</td>
                <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">Overall Score</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>
  