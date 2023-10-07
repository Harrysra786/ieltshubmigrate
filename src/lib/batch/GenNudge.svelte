<script>
    import { onMount } from 'svelte';
    import { slide } from "svelte-legos";
    let show = false;

    onMount(async () => {
        await new Promise(r => setTimeout(r, 6000)); // delay before slide in
        show = true;
        await new Promise(r => setTimeout(r, 10000)); // delay before slide out
        show = false;
    });
</script>

{#if show}
    <div 
        transition:slide={{
            delay: 200,
            duration: 500,
            direction: "bottom"
            }}
        class="fixed bottom-0 z-50 flex justify-center w-full px-3 pb-3 md:w-1/4"
    >
        <div class="shadow-xl cursor-pointer shadow-black">
            <a href="https://imjo.in/WRn7zp">
                <img src="/img/GenNudge.svg" class="relative mx-auto max-w-1xl" />
            </a>
        </div>
    </div>
{/if}
