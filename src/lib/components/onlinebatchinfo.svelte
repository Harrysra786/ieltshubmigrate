<script>
  import { onMount } from "svelte";
  import Feestructure from "./feestructure.svelte";
  import Details from "./detailedinfo.svelte";
  let nextMonday = '';

const getNextMonday = () => {
  const today = new Date();
  const daysUntilNextMonday = (7 - today.getDay()) % 7 + 1;
  const nextMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilNextMonday);
  return nextMonday;
};

const formatDate = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

onMount(() => {
  nextMonday = formatDate(getNextMonday());
});
</script>

<div class="flex items-center justify-center bg-white">
  <div
    class="mx-20 tiny:mx-2 max-w-[980px] text-center pb-10 flex flex-col border-neutral-800 border-2 border-dashed mt-6 mb-12"
  >
    <div class="relative flex items-center justify-center w-full mb-4 mt-7">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/Hardev Sir Avatar.png"
        class="relative w-8 h-8 max-w-3xl mx-auto scale-up-bottom lg:max-w-none imgshadowed sm:m-0 rounded-2xl"
      />
    </div>
    <h2 class="mx-6 font-black">
      <p class="text-2xl tiny:text-base">Hardev Sir's</p>
      <p class="text-4xl text-black md:text-5xl">Online IELTS Batch</p>
    </h2>
    <p class="mx-6 mt-5 text-base text-gray-600">
      <b>⏱️Class Timings:</b> 6:00-9:00 PM (IST)<span style="white-space: pre">
        &nbsp; &nbsp;</span
      ><b>📅Batch Start:</b>{nextMonday}<span style="white-space: pre">
        &nbsp; &nbsp;</span
      ><b>⌛Course Duration:</b> Flexible
    </p>
    <p class="text-[40px] arrowobble flex justify-center mt-8">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/img/doublearrow.png"
        class="w-16 h-16 imgshadowed tiny:w-0 tiny:h-0"
      />
    </p>
    <div
      class="flex items-center justify-center mt-2 space-x-5 tiny:space-y-5 tiny:flex-col"
    >
      <!-- The button to open modal -->
      <label
        for="my-modal-6"
        class="btn4 min-w-[275px] max-w-[275px] translate-x-2"
      >
        <div class="flex flex-row justify-center w-full h-full space-x-3">
          <img
            src="/img/overview.svg"
            class="cursor-pointer w-7 h-7 imgshadowed"
          />
          <b>Course Overview</b>
        </div>
      </label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <!-- Course Details -->

          <div class="relative">
            <div
              class="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800"
              data-rounded=""
              data-rounded-max="rounded-full"
            >
              <h3 class="text-[40px] font-black text-center font-sans">
                📋Course Overview
              </h3>
              <p class="mt-4 text-sm text-center text-gray-700">
                Read below for a <b><u>broad overview</u></b> of the course.
              </p>
              <div class="h-0.5 w-full border-b border-gray-200 my-4">
                <span
                  style="color: rgb(55 65 81 / var(--tw-text-opacity)); background-color: rgb(255 255 255 / var(--tw-bg-opacity))"
                />
                <br />
              </div>
              <p
                class="mt-2 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                📅 <b>Each week is an independent unit </b>in itself. You can
                start your coaching from any Monday. Then you can prepare for
                anywhere from 2 to 8 weeks. The minimum suggested duration is
                <b>4 weeks</b>, however, as it makes sure that all important
                lessons have been covered.
              </p>

              <p
                class="mt-4 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                <b>⏱️</b> The class <b>timings</b> range from <b>6 to 9 PM</b> and
                include lessons and sessions for all 4 modules of IELTS. As you know
                already, you have the option to choose and enroll only for the parts
                that you wish to prepare for. If you enroll for the full course,
                you also get access to class recordings.
              </p>

              <p
                class="mt-4 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                ☀️ <b>Sundays remain off</b> while saturdays are reserved for mock
                tests. Classes are held for the first 5 days of the week from Monday
                to Friday.
              </p>

              <p
                class="mt-4 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                🖨️ <b>The study material</b> is provided to you as a
                <b>soft copy </b>and it is your duty to get it printed. Only the
                reading tests are essential to be printed. Rest of the material
                can be studies through phone or laptop itself.
              </p>

              <p
                class="mt-4 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                📱 In order to attend the classes, all you need is your <b
                  >smartphone.</b
                > You also do not need to have any specialized technical knowledge.
                The process to join and attend the classes is fairly straightforward.
              </p>

              <div
                class="mt-4 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-6 font-sans"
              >
                ⚠️ If you need any <b>additional information</b> please feel
                free to message me by clicking the button below.

                <div>
                  <br />
                  <a
                    href="https://wa.me/+918528723949"
                    class="text-[#ecd448] transition duration-150 ease-in-out font-sans font-bold text-lg flex justify-center"
                    ><img
                      src="/img/whatsapp.svg"
                      class="w-10 h-10 cursor-pointer imgshadowed s-VLgjXbRqAoIE"
                    /></a
                  >
                  <br />If the button is not working, just message me on
                  whatsapp - 8528723949
                </div>
              </div>
            </div>

            <div
              class="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-white border-2 border-gray-800"
              data-rounded=""
              data-rounded-max="rounded-full"
            />
          </div>

          <div class="modal-action">
            <label for="my-modal-6" class="btn4">Close</label>
          </div>
        </div>
      </div>

      <label for="my-modal-7" class="btn4 min-w-[275px] max-w-[275px]">
        <div class="flex flex-row justify-center w-full h-full space-x-3">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="/img/details.svg"
            class="cursor-pointer w-7 h-7 imgshadowed"
          />
          <b>Full Details</b>
        </div>
      </label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal-7" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <!-- Course Details -->

          <Details />

          <div class="modal-action">
            <label for="my-modal-7" class="btn4">Close</label>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-5 mx-4 max-w-[880px] self-center">
      Or, if you've already made up your mind,let's get straight to the
      registration part. Select the modules and the duration for the course to
      calculate your fee.
    </p>
    <p class="mt-5 text-[40px] animate-bounce imgshadowed">👇</p>
    <div class="mt-1 bg-white"><Feestructure /></div>
  </div>
</div>
