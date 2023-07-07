<script>
 import { onMount, onDestroy } from "svelte";

  let tooltip;
  let tooltipVisible = false;
  let tooltipContent = "";
  let tooltipX = 0;
  let tooltipY = 0;

  async function fetchTranslationsAndDefinitions(text) {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    return await response.json();
  }

  function updateTooltipContent(text) {
    fetchTranslationsAndDefinitions(text).then((result) => {
      if (result.definitions && result.definitions.length > 0) {
        tooltipContent =
          result.definitions[0].meanings[0].definitions[0].definition;
      } else {
        tooltipContent = `Hindi: ${result.hindiTranslation.translation}\n`;
        tooltipContent += `Punjabi: ${result.punjabiTranslation.translation}`;
      }
    });
  }

  function showTooltip(event) {
    event.preventDefault();
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText) {
      tooltipVisible = true;
      tooltipX = event.clientX || event.touches[0].clientX;
      tooltipY = event.clientY || event.touches[0].clientY;
      updateTooltipContent(selectedText);
    } else {
      tooltipVisible = false;
    }
  }

  function hideTooltip() {
    tooltipVisible = false;
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", showTooltip);
      window.addEventListener("touchstart", showTooltip);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mouseup", showTooltip);
      window.removeEventListener("touchstart", showTooltip);
    }
  });
</script>

{#if tooltipVisible}
  <div
    class="tooltip"
    bind:this={tooltip}
    style="left: {tooltipX}px; top: {tooltipY}px;"
    on:mouseleave={hideTooltip}
  >
    {tooltipContent}
  </div>
{/if}

<style>
  .tooltip {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    white-space: pre-wrap;
    font-size: 14px;
    z-index: 1000;
  }
</style>
