<script>
  import { onMount } from "svelte";

  let isModalOpen = false;
  let modalContent = "";
  let isLoading = false;
  let debounceTimer;

  async function fetchTranslationsAndDefinitions(text) {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    return await response.json();
  }

  function updateModalContent(text) {
    isLoading = true;
    fetchTranslationsAndDefinitions(text).then((result) => {
      modalContent = `<b>Hindi:</b> ${result.hindiTranslation.translation}<br><br>`;
      modalContent += `<b>Punjabi</b>: ${result.punjabiTranslation.translation}`;
      isLoading = false;
    });
  }

  function showModal(event) {
    event.preventDefault();
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText) {
      clearTimeout(debounceTimer); // clear the existing timer
      debounceTimer = setTimeout(() => { // set a new timer
        updateModalContent(selectedText);
        isModalOpen = true;
      }, 500); // delay in milliseconds
    } else if (isModalOpen) { // if no text is selected and the modal is open
      isModalOpen = false; // close the modal
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", showModal);
      window.addEventListener("touchstart", showModal);
    }
  });
</script>

{#if isModalOpen}
<div class="fixed z-[90] overflow-y-auto inset-4" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div class="flex items-center justify-center">
          <img src="/img/Hardev Sir Avatar.png" class="w-20 h-20 icon imgshadowed" alt="Icon" />
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Translation</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              {#if isLoading} <!-- conditionally display loader or translations -->
                <div class="flex items-center justify-center"><span class="loading loading-infinity loading-md"></span></div>
              {:else}
                {@html modalContent}
              {/if}
            </p>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
      </div>
    </div>
  </div>
</div>
{/if}


<style>
  .bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    white-space: pre-wrap;
    font-size: 14px;
    z-index: 1000;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
  }
</style>
