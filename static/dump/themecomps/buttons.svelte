<section class="flex flex-col items-center justify-center mt-10 space-y-10">
  <button
    class="text-base border-2 border-solid rounded-md border-neutral-800 btnwhite"
  >
    White-Black
  </button>

  <button
    class="text-base border-2 border-solid rounded-md border-neutral-800 btnblack"
  >
    Black-White
  </button>

  <button
    class="text-base border-2 border-solid rounded-md border-neutral-800 btnyellow"
  >
    Black-yellow
  </button>
</section>

<style>
  .btnwhite {
    padding: 15px 25px;
    color: #383838;
    z-index: 1;
    background: #ffffff;
    position: relative;
    font-weight: 1000;
    transition: all 250ms;
    overflow: hidden;
  }

  .btnwhite::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #383838;
    z-index: -1;
    transition: all 250ms;
  }

  .btnwhite:hover {
    color: #ffffff;
  }

  .btnwhite:hover::before {
    width: 100%;
  }

  .btnblack {
    padding: 15px 25px;
    color: #ffffff;
    z-index: 1;
    background: #383838;
    position: relative;
    font-weight: 1000;
    transition: all 250ms;
    overflow: hidden;
  }

  .btnblack::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #ffffff;
    z-index: -1;
    transition: all 250ms;
  }

  .btnblack:hover {
    color: #383838;
  }

  .btnblack:hover::before {
    width: 100%;
  }

  .btnyellow {
    padding: 15px 25px;
    color: #ffffff;
    z-index: 1;
    background: #383838;
    position: relative;
    font-weight: 1000;
    transition: all 250ms;
    overflow: hidden;
  }

  .btnyellow::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #f4c64e;
    z-index: -1;
    transition: all 250ms;
  }

  .btnyellow:hover {
    color: #000000;
  }

  .btnyellow:hover::before {
    width: 100%;
  }
</style>
