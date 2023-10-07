<script>
  let showPaymentButton = true;
  let discountApplied = false;
  

  $: {
    showPaymentButton = country === 'India';
  }
  import PaymentButton from "./PaymentButton.svelte";
    let country = 'India';
    let modules = {
      writingLessons: false,
      writingCorrections: false,
      readingTips: false,
      dailyReading: false,
      listeningTips: false,
      dailyListening: false,
      speakingTips: false,
      dailySpeaking: false,
      weeklyMockTest: false
    };
    let duration = 4;
  
    const moduleValues = {
      writingLessons: 1000,
      writingCorrections: 1000,
      readingTips: 325,
      dailyReading: 325,
      listeningTips: 75,
      dailyListening: 75,
      speakingTips: 300,
      dailySpeaking: 500,
      weeklyMockTest: 400
    };
  
    const weekMultipliers = {
      2: 2,
      3: 2.4,
      4: 3.5,
      5: 4.8,
      6: 5.6,
      7: 6.4,
      8: 7.2
    };
  
    const countryMultipliers = {
      India: 0.85,
      Canada: 1.05,
      Others: 0.95,
    };
  
    const currencyConversion = {
      India: 1,
      Canada: 60,
      Others: 80
    };
  
    let courseCost = 0;
    let currencySymbol = '₹';
  
 $: {
   let moduleCost = 0;
   let selectedModules = 0;
   for (const key in modules) {
     if (modules[key]) {
       moduleCost += moduleValues[key];
       selectedModules += 1; // increment count of selected modules
     }
   }
   let totalCost = moduleCost * weekMultipliers[duration] * countryMultipliers[country];
   
   // Check if all 9 options are selected and weekmultiplier is 4 or more
   if (selectedModules === 9 && duration >= 4) {
     totalCost *= 0.8; // Apply 20% discount
     discountApplied = true; // Set discountApplied to true
   } else {
     discountApplied = false; // Set discountApplied to false
   }
   
   courseCost = Math.round(totalCost / currencyConversion[country]);
   currencySymbol = country === 'India' ? '₹' : country === 'Canada' ? 'CAD$' : 'USD$';
 }
 
 
  
    function handleCountryChange(event) {
      country = event.target.value;
    }
  
    function handleModuleChange(event, key) {
      const isChecked = event.target.checked;
      modules[key] = isChecked;
  
      // Toggle the paired module
      const pairedModules = {
        writingLessons: 'writingCorrections',
        writingCorrections: 'writingLessons',
        readingTips: 'dailyReading',
        dailyReading: 'readingTips',
        listeningTips: 'dailyListening',
        dailyListening: 'listeningTips',
        speakingTips: 'dailySpeaking',
        dailySpeaking: 'speakingTips',
      };
  
      if (pairedModules[key]) {
        modules[pairedModules[key]] = isChecked;
      }
    }
  
    let multiplier = 4;
    function handleDurationChange(event) {
      duration = event.target.value;
    }
  </script>
  
  
  <section class="relative grid max-w-md grid-cols-1 gap-8 px-8 mx-auto mb-4 bg-white">
  
      <!-- Course Details -->
  
    
      <!-- Fee Structure -->
      <div class="relative">
          <div class="relative z-20 flex flex-col pt-5 bg-white border-2 border-gray-800 rounded-md" data-rounded="" data-rounded-max="rounded-full">
              <div class="flex flex-row justify-center w-full h-full space-x-3">
     
                  <img src="/img/fees.png" class="cursor-pointer w-13 h-13 imgshadowed" />
                  <b class="text-[40px]">Fee Structure</b>
                </div>
            <p class="px-6 mt-4 text-center text-gray-700 textysm">A fully transparent and modular fee structure. Pay only for what you need 🙂</p>
            <div class="h-0.5 w-full border-b bg-white border-gray-200 my-4"><span style="color: rgb(55 65 81 / var(--tw-text-opacity)); / var(--tw-bg-opacity));"></span> <br></div>
            
            
            <div  class="self-center w-3/4 bg-white">
                <p class="pt-1 text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md "><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>🌍 Where are you living? </strong><br><p class="text-[0.6rem] pb-1 mt-1">Current Country and not country of origin</p></span></span>
                    </span>
                    </span>
                </p>
                <p><br></p>
  
                <div class="radio-inputs">
                  <label>
                    <input class="radio-input" type="radio" name="engine" id="country-india" value="India" on:change="{handleCountryChange}" checked>
                              <span class="radio-tile">
                                  <span class="radio-icon">
                                    <img src="/img/India.svg" class="inline w-6/12 cursor-pointer" />
  
                                    </span>
                                  <span class="radio-label">India</span>
                              </span>
                  </label>
                  <label>
                    <input class="radio-input" type="radio" name="engine" id="country-canada" value="Canada" on:change="{handleCountryChange}">
                          <span class="radio-tile">
                              <span class="radio-icon">
                                <img src="/img/canada.svg" class="inline w-6/12 cursor-pointer" />
  
                              </span>
                              <span class="radio-label">Canada</span>
                          </span>
                  </label>
                  <label>
                    <input class="radio-input" type="radio" name="engine" id="country-others" value="Others" on:change="{handleCountryChange}">
                          <span class="radio-tile">
                              <span class="radio-icon">
                                <img src="/img/others.svg" class="inline w-6/12 cursor-pointer" />
  
                              </span>
                              <span class="radio-label">Others</span>
                          </span>
                  </label>
                                
                </div>
                
              <p class="mt-5">Now Choose the modules that you wish to study</p>
              <p><br></p>
              
              <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md "><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>✒️ Writing Module</strong></span></span></span></span></p>
              <p><span style="background-color: rgb(244, 198, 78);"><strong><br></strong></span></p>
              <form class="bg-white" >
                <p class="ml-2 text-left">
                  <label>
                    <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.writingLessons} on:change="{(e) => handleModuleChange(e, 'writingLessons')}">
                    Writing Lessons
                  </label>
                  <br>
                  <label>
                    <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.writingCorrections} on:change="{(e) => handleModuleChange(e, 'writingCorrections')}">
                    Writing Corrections
                  </label>
                </p>
                <p><br></p>
                <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>📖 Reading Module</strong></span></span>
                    </span>
                    </span>
                </p>
              
                <p class="ml-2 text-left"><b><br></b> <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.readingTips} on:change="{(e) => handleModuleChange(e, 'readingTips')}">
                  Reading tips and Tricks
                </label>
                <br>
                <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.dailyReading} on:change="{(e) => handleModuleChange(e, 'dailyReading')}">
                  Daily Reading Discussions
                </label></p>
                <p><br></p>
                <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>🎧 Listening Module</strong></span></span>
                    </span>
                    </span>
                </p>
                <p class="ml-2 text-left"><b><br></b> <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.listeningTips} on:change="{(e) => handleModuleChange(e, 'listeningTips')}">
                  Listening Tips and Tricks
                </label>
                <br>
                <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.dailyListening} on:change="{(e) => handleModuleChange(e, 'dailyListening')}">
                  Daily Listening
                </label>
                </p>
                <p><br></p>
                <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>🗣️ Speaking Module</strong></span></span>
                    </span>
                    </span>
                </p>
                <p class="ml-2 text-left"><b><br></b> <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.speakingTips} on:change="{(e) => handleModuleChange(e, 'speakingTips')}">
                  Speaking Tips and Tricks
                </label>
                <br>
                <label>
                  <input type="checkbox" class="toggle toggle-xs" bind:checked={modules.dailySpeaking} on:change="{(e) => handleModuleChange(e, 'dailySpeaking')}">
                  Daily Speaking Interviews
                </label></p>
                <p><br></p>
                <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>🧑‍🎓 Mock Test</strong></span></span>
                    </span>
                    </span>
                </p>
                <p class="ml-2 text-left"><b><br></b> <label><input type="checkbox" class="toggle toggle-xs" value="125" on:change="{(e) => handleModuleChange(e, 'weeklyMockTest')}"> Weekly Mock Test</label></p>
                <p><br></p>
                <p class="text-center bg-[#f4c64e] py-1 font-semibold text-gray-800 rounded-md"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><span style="background-color: rgb(244, 198, 78);"><strong>📅Duration</strong></span></span>
                    
                        </span>
                        </span>
                    </p>
                    <p><b><br></b>Select the <strong>number of weeks</strong> you wish to enroll for by using the slider below (4 weeks suggested).</p>
                    <p class="text-center">
                      <label>
                        <span class="text-xl font-black ">{multiplier}</span>
                        <span><u>Weeks</u></span> 
                        <input name="multiplier" min="2" max="8" type="range" class="range" step="1"  bind:value={multiplier} on:input={handleDurationChange}>
                      </label>
                    </p>
                    <div class="flex justify-between px-2 text-xs"><span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span></div>
                    <p></p>
                </form>
                <h2 style="text-align: center;"><br></h2>
                <h2 class="text-3xl font-bold" style="text-align: center;">Course Cost</h2>
<div style="text-align: center; font-size: 24pt;">
  {#if discountApplied}
    <span class="font-semibold text-1xl" style="font-size: 48pt; text-decoration: line-through;">{currencySymbol} {courseCost / 0.8}</span>
    <br/>
    <span class="font-semibold text-1xl" style="font-size: 48pt;">{currencySymbol} {courseCost}</span>
    <p class="font-bold text-green-600 s3">20% Discount Applied!!</p>
  {:else}
    <span class="font-semibold text-1xl" style="font-size: 48pt;">{currencySymbol} {courseCost}</span>
  {/if}
</div>

  
    <br>
    <p class="mt-2 text-[40px] animate-bounce imgshadowed">👇</p>
    <br>
  
   <!-- Parent component HTML -->
  {#if showPaymentButton}
  <PaymentButton productName="Hardev Sir's Online IELTS Batch" price={courseCost} />
  {:else}
  <p>Call the institute for payment options.</p>
  {/if}
  
                <div class="font-sans text-sm font-thin underline decoration-red-600 decoration-dashed decoration-1 mb-7">Please note that the course plan you choose cannot be changed at a later stage in the course, and the fee is non-refundable. Please make an informed decision.</div>
                
                <div class="mt-4 mb-5 text-sm text-gray-700 text-left p-6 bg-[#f3f4f6] border-2 border-dotted border-black mx-1 font-sans">⚠️ If you need any <b>additional information</b> please feel free to message me by clicking the button below.
                  <div><br> <a href="https://wa.me/+918528723949" class="text-[#ecd448] transition duration-150 ease-in-out font-sans font-bold text-lg flex justify-center"><img src="/img/whatsapp.svg" class="w-10 h-10 cursor-pointer imgshadowed s-VLgjXbRqAoIE"></a> <br>If the button is not working, just message me on whatsapp - 8528723949</div></div>
  
            </div>
        </div>
      </div>
  </section>