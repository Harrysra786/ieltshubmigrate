<script>
  import SentenceViewer from "./SentenceViewer.svelte";
  import Tooltip from "./Tooltip.svelte";
</script>

<body class="bg-stone-800">
  <section class="flex items-center justify-center h-screens bg-stone-800">
    <Tooltip />
    <div class="h-full max-w-screen-md my-4 polkadot tiny:mx-4">
      <SentenceViewer />
    </div>
  </section>

  <style>
    .polkadot {
      background-color: #ffffff;
      background-image: radial-gradient(#dddddd 0.2px, #ffffff 0.2px);
      background-size: 4px 4px;
    }
  </style>
</body>
