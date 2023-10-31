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
  Difference += `<div style='display:inline-block; padding:0.25rem; margin:0.25rem; color:#ffffff; border-color:#1E293B; background-color:#1E293B; line-height:1.5;'>${part.value}</div>`;
} else if (part.removed) {
  Difference += `<div style='display:inline-block; padding:0.25rem; margin:0.25rem; color:#000000; text-decoration:line-through; border-color:#1E293B; background-color:#F4C64E; line-height:1.5;'>${part.value}</div>`;
} else {
  Difference += part.value;
}

    });
  }
</script>

{@html Difference}
