<script>
    import CueBook from '$lib/batch/bonusbooks/cuebook.svelte';
    import EssayBook from '$lib/batch/bonusbooks/essaybook.svelte';
    import GramBook from '$lib/batch/bonusbooks/grambook.svelte';
    import IdeasBook from '$lib/batch/bonusbooks/ideasbook.svelte';
    import LangBook from '$lib/batch/bonusbooks/langbook.svelte';
    import Part1Book from '$lib/batch/bonusbooks/part1book.svelte';
    
    let selectedLink = null;
    let links = [
        { img: "/img/essaybook.png", text: "Essay Book", imgWidth: "w-7", imgHeight: "h-7", component: EssayBook },
        { img: "/img/ideasbook.png", text: "Ideas Book", imgWidth: "w-7", imgHeight: "h-7", component: IdeasBook },
        { img: "/img/part1book.png", text: "Speaking - Part 1 Book", imgWidth: "w-6", imgHeight: "h-6", component: Part1Book },
        { img: "/img/cuebook.png", text: "Hardev Sir's Cue Cards", imgWidth: "w-7", imgHeight: "h-7", component: CueBook },
        { img: "/img/langbook.png", text: "Language Booster Book", imgWidth: "w-6", imgHeight: "h-6", component: LangBook },
        { img: "/img/grambook.png", text: "Functional Grammar For IELTS", imgWidth: "w-6", imgHeight: "h-6", component: GramBook }
    ];
    function selectLink(link) {
        selectedLink = link;
    }
    </script>

<section>
   
    <div class="flex items-center justify-center">
        <div class="mx-1 mt-6 px-20 tiny:px-2 max-w-[980px] text-center pt-8 flex flex-col border-neutral-800 border-2 border-double rounded-[0.250rem] shadow-md shadow-neutral-800 pb-10">
            <img class="block mx-auto mb-1 w-14 h-14 imgshadowed" src="/img/Gift box.svg" alt="clock">
            <h1 class="mx-2 tracking-wider s7 anton"> <span class="mx-2 s5 montserrat">The Bonus</span> <br> Content</h1>

            <div class="text-center flex flex-col space-y-3 max-w-[420px] self-center btext mt-12">
                {#each links as link}
                    <button on:click|preventDefault={() => selectLink(link)} class="flex py-2 pl-5 pr-6 transition duration-300 ease-in-out transform bg-white border-2 border-black border-solid rounded-sm text-neutral-800 tiny:border tiny:shadow-sm tiny:shadow-black/25 hover:bg-neutral-800 hover:text-white focus:outline-none h-11">
                        <img src={link.img} class="mr-4 {link.imgWidth} {link.imgHeight} imgshadowed" alt="Icon" /> {link.text}
                    </button>
                {/each}
            </div>
        </section>


        {#if selectedLink}
        <section id="conditional">
            <svelte:component this={selectedLink.component} />
        </section>
        {/if}

