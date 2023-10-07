<script>
    export let video = {};
</script>

<div class="mt-4 mb-6">
  <p class="mb-3 text-center bb s4">{video.text}</p>
  <div>
    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <figure style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%; margin-block-end: 0; margin-block-start: 0; margin-inline-start: 0; margin-inline-end: 0;">
        <iframe id={video.id} src={video.src} scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
      </figure>
    </div>
  </div>
</div>
