<!--
This component displays successful student results as a slider. It takes its data from firestore. 
    
-->

<div id="overview" class="flex flex-col items-center justify-center mt-6 border-2 border-dashed shadow-md p-7 border-zinc-800 shadow-black max-w-[520px] mx-1 mb-10 pb-10">
  <div class="w-64 h-64 m-5 overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg">
    <div class="flex flex-col items-center p-4">
      <img class="object-cover w-24 h-24 transition-transform duration-300 transform border-4 border-red-500 rounded-full hover:scale-105" src="student_image.jpg" alt="Student's picture">
      <div class="mt-4 text-center">
        <div class="text-lg font-semibold text-indigo-500">Student's Name</div>
<div class="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-500 border border-neutral-800">
  <div class="flex items-center border border-neutral-800"><img src="writing_icon.png" alt="Writing Icon"> Writing: <span class="ml-1 font-bold text-gray-700">Score</span></div>
  <div class="flex items-center border border-neutral-800"><img src="reading_icon.png" alt="Reading Icon"> Reading: <span class="ml-1 font-bold text-gray-700">Score</span></div>
  <div class="flex items-center border border-neutral-800"><img src="listening_icon.png" alt="Listening Icon"> Listening: <span class="ml-1 font-bold text-gray-700">Score</span></div>
  <div class="flex items-center border border-neutral-800"><img src="speaking_icon.png" alt="Speaking Icon"> Speaking: <span class="ml-1 font-bold text-gray-700">Score</span></div>
</div>

        <p class="mt-2 text-sm text-gray-500">Overall: <span class="font-bold text-gray-700">Score</span></p>
      </div>
    </div>
  </div>
</div>

