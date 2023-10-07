<script>
  import { diffWords } from 'diff';
  
  export let Essay = ''; 
  export let Correction = ''; 
  let Difference = ''; 

  $: {
    console.log("Essay: ", Essay); // Debug log
    console.log("Correction: ", Correction); // Debug log

    // Replace line breaks with double <br> tags
    const newText1 = Essay.replace(/(\r\n|\n|\r)+/gm, "<br><br>");
    const newText2 = Correction.replace(/(\r\n|\n|\r)+/gm, "<br><br>");
    const diff = diffWords(newText1, newText2);
    Difference = "";
    diff.forEach(part => {
      if (part.added) {
        Difference += `<span class='px-1 mx-1 text-yellow-400 border-neutral-800 bg-neutral-800'>${part.value}</span>`;
      } else if (part.removed) {
        Difference += `<span class='px-1 mx-1 text-red-700 line-through border-neutral-800 bg-amber-300'>${part.value}</span>`;
      } else {
        Difference += part.value;
      }
    });
  }
</script>

{@html Difference}
