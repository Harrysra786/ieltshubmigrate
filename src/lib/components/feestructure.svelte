<script>
let showPaymentButton = true;

$: {
  showPaymentButton = country === 'India';
}
import PaymentButton from "./PaymentButton2.svelte";
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
    for (const key in modules) {
      if (modules[key]) {
        moduleCost += moduleValues[key];
      }
    }
    const totalCost = moduleCost * weekMultipliers[duration] * countryMultipliers[country];
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
                                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                  viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">
                               <path style="fill:#359846;" d="M0,304v65.6C0,396.8,21.6,416,48,416h400c26.4,0,48-19.2,48-46.4V304H0z"/>
                               <path style="fill:#EA8634;" d="M448,80H48C21.6,80,0,99.2,0,126.4V192h496v-65.6C496,99.2,474.4,80,448,80z"/>
                               <rect y="192" style="fill:#FCFBF0;" width="496" height="112"/>
                               <path style="fill:#21872F;" d="M446.4,416c26.4,0,49.6-19.2,49.6-46.4V304H315.2L446.4,416z"/>
                               <path style="fill:#E27423;" d="M448,80H48l132.8,112H496v-65.6C496,99.2,474.4,80,448,80z"/>
                               <polygon style="fill:#F7F4E2;" points="316,304 496,304 496,192 180,192 "/>
                               <path style="fill:#D86619;" d="M448,80H48l370.4,112H496v-65.6C496,99.2,474.4,80,448,80z"/>
                               <polygon style="fill:#F2E9C2;" points="496,214.4 496,192 414.4,192 "/>
                               <path style="fill:#167A20;" d="M496,368.8c0,28.8-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48"/>
                               <path style="fill:#7D7DBC;" d="M248,197.6c-28,0-50.4,22.4-50.4,50.4s22.4,50.4,50.4,50.4s50.4-22.4,50.4-50.4S276,197.6,248,197.6z
                                  M289.6,253.6c0,0.8,0.8,2.4,1.6,2.4c-0.8,2.4-0.8,4.8-1.6,7.2c-0.8-0.8-2.4,0-3.2,0.8c-0.8,0.8,0,2.4,0.8,3.2
                                 c-0.8,2.4-2.4,4-3.2,6.4c-0.8-0.8-2.4-0.8-3.2,0.8c-0.8,0.8-0.8,2.4,0,3.2c-0.8,0.8-1.6,1.6-2.4,2.4l-17.6-20l-7.2-5.6l0.8-0.8
                                 l7.2,5.6l23.2,12l-20.8-16l-8-3.2c0-0.8,0-0.8,0.8-1.6l8,3.2l25.6,5.6l-24.8-8l-8.8-1.6c0-0.8,0-0.8,0-1.6l8.8,0.8l26.4-1.6
                                 l-26.4-1.6l-8.8,0.8c0-0.8,0-0.8,0-1.6l8.8-1.6l24.8-8l-25.6,5.6l-8,3.2c0-0.8,0-0.8-0.8-1.6l8-3.2l22.4-14.4l-23.2,12l-7.2,5.6
                                 l-0.8-0.8l7.2-5.6l17.6-20c0.8,0.8,1.6,1.6,2.4,2.4c-0.8,0.8-0.8,2.4,0,3.2s2.4,0.8,3.2,0.8c1.6,1.6,2.4,4,3.2,6.4
                                 c-0.8,0.8-1.6,1.6-0.8,3.2c0.8,0.8,1.6,1.6,3.2,0.8c0.8,2.4,1.6,4.8,1.6,7.2c-0.8,0-1.6,1.6-1.6,2.4c0,0.8,1.6,2.4,2.4,1.6
                                 c0,0.8,0,2.4,0,3.2s0,2.4,0,3.2C290.4,251.2,289.6,252,289.6,253.6z M220,214.4c0.8,0.8,2.4,0.8,3.2,0s0.8-2.4,0.8-3.2
                                 c1.6-1.6,4-2.4,6.4-3.2c0.8,0.8,1.6,1.6,3.2,0.8c0.8-0.8,1.6-1.6,0.8-3.2c2.4-0.8,4.8-1.6,7.2-1.6c0,0.8,1.6,1.6,2.4,1.6
                                 c0.8,0,2.4-1.6,1.6-2.4c0.8,0,2.4,0,3.2,0c0.8,0,2.4,0,3.2,0c0,0.8,0.8,2.4,1.6,2.4c0.8,0,2.4-0.8,2.4-1.6c2.4,0.8,4.8,0.8,7.2,1.6
                                 c-0.8,0.8,0,2.4,0.8,3.2s2.4,0,3.2-0.8c2.4,0.8,4,2.4,6.4,3.2c-0.8,0.8-0.8,2.4,0.8,3.2c0.8,0.8,2.4,0.8,3.2,0
                                 c0.8,0.8,1.6,1.6,2.4,2.4l-20,17.6l-5.6,7.2l-0.8-0.8l5.6-7.2l12-23.2l-16,21.6l-3.2,8c-0.8,0-0.8,0-1.6-0.8l3.2-8l5.6-25.6l-8,24.8
                                 l-1.6,8.8c-0.8,0-0.8,0-1.6,0l0.8-8.8L248,204l-1.6,26.4l0.8,8.8c-0.8,0-0.8,0-1.6,0l-1.6-8.8l-8-24.8l5.6,25.6l3.2,8
                                 c-0.8,0-0.8,0-1.6,0.8l-3.2-8l-14.4-22.4l12,23.2l5.6,7.2l-0.8,0.8l-5.6-7.2l-20-17.6C217.6,216,218.4,215.2,220,214.4z
                                  M216.8,279.2c-0.8-0.8-1.6-1.6-2.4-2.4c0.8-0.8,0.8-2.4,0-3.2c-0.8-0.8-2.4-0.8-3.2-0.8c-1.6-1.6-2.4-4-3.2-6.4
                                 c0.8-0.8,1.6-1.6,0.8-3.2c-0.8-0.8-1.6-1.6-3.2-0.8c-0.8-2.4-1.6-4.8-1.6-7.2c0.8,0,1.6-1.6,1.6-2.4s-1.6-2.4-2.4-1.6
                                 c0-0.8,0-2.4,0-3.2s0-2.4,0-3.2c0.8,0,2.4-0.8,2.4-1.6s-0.8-2.4-1.6-2.4c0.8-2.4,0.8-4.8,1.6-7.2c0.8,0.8,2.4,0,3.2-0.8
                                 s0-2.4-0.8-3.2c0.8-2.4,2.4-4,3.2-6.4c0.8,0.8,2.4,0.8,3.2-0.8s0.8-2.4,0-3.2c0.8-0.8,1.6-1.6,2.4-2.4l17.6,20l7.2,5.6l-0.8,0.8
                                 l-7.2-5.6l-23.2-12l22.4,14.4l8,3.2c0,0.8,0,0.8-0.8,1.6l-8-3.2l-25.6-5.6l24.8,8l8.8,1.6c0,0.8,0,0.8,0,1.6l-8.8-0.8L204,248
                                 l26.4,1.6l8.8-0.8c0,0.8,0,0.8,0,1.6l-8.8,1.6l-24.8,8l25.6-5.6l8-3.2c0,0.8,0,0.8,0.8,1.6l-8,3.2l-22.4,14.4l23.2-12l7.2-5.6
                                 l0.8,0.8l-7.2,5.6L216.8,279.2z M244.8,292c0-0.8-0.8-2.4-1.6-2.4s-2.4,0.8-2.4,1.6c-2.4-0.8-4.8-0.8-7.2-1.6c0.8-0.8,0-2.4-0.8-3.2
                                 s-2.4,0-3.2,0.8c-2.4-0.8-4-2.4-6.4-3.2c0.8-0.8,0.8-2.4-0.8-3.2c-0.8-0.8-2.4-0.8-3.2,0c-0.8-0.8-1.6-1.6-2.4-2.4l20-17.6l5.6-7.2
                                 l0.8,0.8l-5.6,7.2l-12,23.2l14.4-22.4l3.2-8c0.8,0,0.8,0,1.6,0.8l-3.2,8l-5.6,25.6l8-24.8l1.6-8.8c0.8,0,0.8,0,1.6,0l-0.8,8.8
                                 l1.6,26.4l1.6-26.4l-0.8-8.8c0.8,0,0.8,0,1.6,0l1.6,8.8l8,24.8l-5.6-25.6l-3.2-8c0.8,0,0.8,0,1.6-0.8l3.2,8l14.4,22.4l-12-23.2
                                 l-5.6-7.2l0.8-0.8l5.6,7.2l20,17.6c-0.8,0.8-1.6,1.6-2.4,2.4c-0.8-0.8-2.4-0.8-3.2,0c-0.8,0.8-0.8,2.4-0.8,3.2
                                 c-1.6,1.6-4,2.4-6.4,3.2c-0.8-0.8-1.6-1.6-3.2-0.8s-1.6,1.6-0.8,3.2c-2.4,0.8-4.8,1.6-7.2,1.6c0-0.8-1.6-1.6-2.4-1.6
                                 s-2.4,1.6-1.6,2.4c-0.8,0-2.4,0-3.2,0S245.6,292,244.8,292z"/>
                               <g>
                                 <polygon style="fill:#6060B2;" points="259.2,257.6 261.6,260 261.6,259.2 	"/>
                                 <path style="fill:#6060B2;" d="M248,197.6c-15.2,0-28.8,7.2-38.4,17.6l4.8,4c0.8-0.8,1.6-1.6,2.4-2.4c0.8-0.8,1.6-1.6,2.4-2.4
                                   c0.8,0.8,2.4,0.8,3.2,0s0.8-2.4,0.8-3.2c0.8-0.8,2.4-0.8,3.2-1.6l12,23.2l5.6,7.2l-0.8,0.8l-5.6-7.2l-20-17.6l16.8,19.2l2.4,1.6
                                   l4.8,4l0,0l13.6,11.2l0.8-0.8l7.2,5.6l23.2,12c-0.8,0.8-0.8,2.4-1.6,3.2c-0.8-0.8-2.4-0.8-3.2,0.8c-0.8,0.8-0.8,2.4,0,3.2l0,0
                                   l4.8,4c7.2-8.8,12-20,12-32.8C298.4,220,276,197.6,248,197.6z M244,240l-3.2-8l-14.4-21.6c0.8-0.8,1.6-1.6,3.2-1.6
                                   c0.8,0.8,1.6,1.6,3.2,0.8c0.8-0.8,1.6-1.6,0.8-3.2c0.8,0,2.4-0.8,3.2-0.8l5.6,25.6l3.2,8C244.8,240,244.8,240,244,240z
                                    M248.8,239.2l0.8-8.8L248,204l-1.6,26.4l0.8,8.8c-0.8,0-0.8,0-1.6,0l-1.6-8.8l-8-24.8c0.8,0,2.4-0.8,3.2-0.8
                                   c0,0.8,1.6,1.6,2.4,1.6c0.8,0,2.4-1.6,1.6-2.4c0.8,0,2.4,0,3.2,0s2.4,0,3.2,0c0,0.8,0.8,2.4,1.6,2.4c0.8,0,2.4-0.8,2.4-1.6
                                   c0.8,0,2.4,0.8,3.2,0.8l-8,24.8l-1.6,8.8C249.6,239.2,248.8,239.2,248.8,239.2z M250.4,240l3.2-8l5.6-25.6c0.8,0,2.4,0.8,3.2,0.8
                                   c-0.8,0.8,0,2.4,0.8,3.2s2.4,0,3.2-0.8c0.8,0.8,2.4,0.8,3.2,1.6L255.2,232l-3.2,8C251.2,240,251.2,240,250.4,240z M286.4,264
                                   c-0.8,0.8,0,2.4,0.8,3.2c-0.8,0.8-0.8,2.4-1.6,3.2L264,255.2l-8-3.2c0-0.8,0-0.8,0.8-1.6l8,3.2l25.6,5.6c0,0.8-0.8,2.4-0.8,3.2
                                   C288,262.4,287.2,263.2,286.4,264z M292,244.8c0,0.8,0,2.4,0,3.2c0,0.8,0,2.4,0,3.2c-0.8,0-2.4,0.8-2.4,1.6c0,0.8,0.8,2.4,1.6,2.4
                                   c0,0.8-0.8,2.4-0.8,3.2l-24.8-8l-8.8-1.6c0-0.8,0-0.8,0-1.6l8.8,0.8l26.4-1.6l-26.4-1.6l-8.8,0.8c0-0.8,0-0.8,0-1.6l8.8-1.6l24.8-8
                                   c0,0.8,0.8,2.4,0.8,3.2c-0.8,0-1.6,1.6-1.6,2.4C289.6,244,290.4,244.8,292,244.8z M286.4,232c0.8,0.8,1.6,1.6,3.2,0.8
                                   c0,0.8,0.8,2.4,0.8,3.2l-25.6,5.6l-8,3.2c0-0.8,0-0.8-0.8-1.6l8-3.2l21.6-14.4c0.8,0.8,1.6,1.6,1.6,3.2
                                   C286.4,229.6,285.6,231.2,286.4,232z M285.6,226.4l-23.2,12l-7.2,5.6l-0.8-0.8l7.2-5.6l17.6-20l-20,17.6l-5.6,7.2l-0.8-0.8l5.6-7.2
                                   l12-23.2c0.8,0.8,2.4,0.8,3.2,1.6c-0.8,0.8-0.8,2.4,0.8,3.2c0.8,0.8,2.4,0.8,3.2,0c0.8,0.8,1.6,1.6,2.4,2.4s1.6,1.6,2.4,2.4
                                   c-0.8,0.8-0.8,2.4,0,3.2s2.4,0.8,3.2,0.8C284.8,224,285.6,224.8,285.6,226.4z"/>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               <g>
                               </g>
                               </svg>
                                  </span>
                                <span class="radio-label">India</span>
                            </span>
                </label>
                <label>
                  <input class="radio-input" type="radio" name="engine" id="country-canada" value="Canada" on:change="{handleCountryChange}">
                        <span class="radio-tile">
                            <span class="radio-icon">
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">
                         <g>
                             <path style="fill:#D32027;" d="M160,80H48C21.6,80,0,99.2,0,126.4v243.2C0,396.8,21.6,416,48,416h112V80z"/>
                             <path style="fill:#D32027;" d="M448,80H336v336h112c26.4,0,48-19.2,48-46.4V126.4C496,99.2,474.4,80,448,80z"/>
                         </g>
                         <g>
                             <path style="fill:#BC1723;" d="M448,80H336v240.8L446.4,416c26.4,0,49.6-19.2,49.6-46.4V126.4C496,99.2,474.4,80,448,80z"/>
                             <polygon style="fill:#BC1723;" points="160,80 48,80 160,175.2 	"/>
                         </g>
                         <g>
                             <path style="fill:#AA0E21;" d="M336,416h112c26.4,0,48-16,48-48H336V416z"/>
                             <path style="fill:#AA0E21;" d="M0,368c0,32,21.6,48,48,48h112v-48H0z"/>
                             <path style="fill:#AA0E21;" d="M448,80H336v84.8l160,49.6v-88C496,99.2,474.4,80,448,80z"/>
                             <polygon style="fill:#AA0E21;" points="160,80 48,80 160,112.8 	"/>
                         </g>
                         <rect x="144" y="80" style="fill:#FFFFFF;" width="208" height="336"/>
                         <polygon style="fill:#E9F3F4;" points="352,320.8 352,80 144,80 144,175.2 "/>
                         <g>
                             <rect x="144" y="368" style="fill:#D3E9EA;" width="208" height="48"/>
                             <polygon style="fill:#D3E9EA;" points="352,164.8 352,80 144,80 144,112.8 	"/>
                         </g>
                         <g>
                             <path style="fill:#D32027;" d="M322.4,249.6c-2.4-2.4-8-2.4-8.8-6.4c-1.6-10.4,3.2-16,6.4-23.2c-15.2,3.2-27.2,9.6-27.2-8
                                 c-8.8,10.4-18.4,21.6-21.6,19.2c-5.6-3.2,5.6-30.4,6.4-44.8c-5.6,2.4-15.2,8-15.2,8S256,176,248,167.2l0,0l0,0l0,0l0,0
                                 c-8,8.8-14.4,27.2-14.4,27.2s-10.4-5.6-15.2-8c0.8,14.4,12,41.6,6.4,44.8c-4,1.6-12.8-8.8-21.6-19.2c0,16.8-12,11.2-27.2,8
                                 c3.2,7.2,8,12.8,6.4,23.2c-0.8,4-6.4,4-8.8,6.4c17.6,17.6,48,30.4,33.6,44.8l39.2-4c1.6,12.8-3.2,29.6,0.8,37.6c0.8,0,0.8,0,1.6,0
                                 l0,0c0.8,0,0.8,0,1.6,0c4-8-0.8-24.8,0.8-37.6l39.2,4C274.4,279.2,304.8,267.2,322.4,249.6z"/>
                             <path style="fill:#AA0E21;" d="M322.4,249.6c-2.4-2.4-8-2.4-8.8-6.4c-1.6-10.4,3.2-16,6.4-23.2c-15.2,3.2-27.2,9.6-27.2-8
                                 c-8.8,10.4-18.4,21.6-21.6,19.2c-5.6-3.2,5.6-30.4,6.4-44.8c-5.6,2.4-15.2,8-15.2,8S256,176,248,167.2l0,0l0,0l0,0l0,0
                                 c0,0.8,0,0.8,0,1.6V328c0,0-0.8,0,0,0l0,0c0.8,0,0.8,0,1.6,0c4-8-0.8-24.8,0.8-37.6l39.2,4C274.4,279.2,304.8,267.2,322.4,249.6z"
                                 />
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         </svg>
                            </span>
                            <span class="radio-label">Canada</span>
                        </span>
                </label>
                <label>
                  <input class="radio-input" type="radio" name="engine" id="country-others" value="Others" on:change="{handleCountryChange}">
                        <span class="radio-tile">
                            <span class="radio-icon">
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">
                         <path style="fill:#45AFE3;" d="M496,369.6c0,27.2-21.6,46.4-48,46.4H48c-26.4,0-48-19.2-48-46.4V126.4C0,99.2,21.6,80,48,80h400
                             c26.4,0,48,19.2,48,46.4V369.6z"/>
                         <path style="fill:#179ACE;" d="M48,80h400c26.4,0,48,19.2,48,46.4v243.2c0,27.2-25.6,46.4-52,46.4"/>
                         <g>
                             <path style="fill:#0F8FBC;" d="M496,368.8c0,28.8-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48"/>
                             <path style="fill:#0F8FBC;" d="M48,80h400c26.4,0,48,19.2,48,46.4V216"/>
                         </g>
                         <polygon style="fill:#CAE0EF;" points="244,130.4 251.2,152 274.4,152 255.2,167.2 262.4,189.6 244,176.8 225.6,190.4 232.8,167.2 
                             213.6,152 236.8,152 "/>
                         <polygon style="fill:#F3F4F5;" points="244,306.4 251.2,328 274.4,328 255.2,341.6 262.4,363.2 244,349.6 225.6,363.2 232.8,341.6 
                             213.6,328 236.8,328 "/>
                         <polygon style="fill:#CAE0EF;" points="337.6,218.4 344.8,240 368,240 348.8,254.4 356,276.8 337.6,264 319.2,277.6 326.4,254.4 
                             307.2,240 330.4,240 "/>
                         <polygon style="fill:#F3F4F5;" points="158.4,218.4 165.6,240 188.8,240 169.6,254.4 176.8,276.8 158.4,264 140,277.6 147.2,254.4 
                             128,240 151.2,240 "/>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         <g>
                         </g>
                         </svg>
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
              <div style="text-align: center; font-size: 24pt;"><span class="font-semibold text-1xl" style="font-size: 48pt;">{currencySymbol}{courseCost}</span></div>

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



