<script>
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/css';
  
    let swiper;
  
    onMount(() => {
      swiper = new Swiper('.swiper', {
        modules: [Autoplay],
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        },
      });
    });
</script>



<div class="flex flex-col items-center w-full p-4 leading-7 text-center md:flex-row text-neutral-800 max-w-[950px] sm:w-screen" style="border-radius: 50px 50px 0px 0px;">
        
    <div class="swiper">
        <div class="swiper-wrapper">
          {#each Array(15).fill() as _, i}
            <div class="mx-1 swiper-slide imgshadowed">
              <img src={`/img/results/Success story-${('0' + (i + 1)).slice(-2)}.webp`} alt={`Image ${i + 1}`} />
            </div>
          {/each}
        </div>
      </div>
      </div>


      <style>
        .swiper {
          width: 100vw;
        }
        .swiper-slide {
          position: relative;
          overflow: hidden;
          height: 56.25vw; /* 9/16 of the viewport width */
        }
        @media (min-width: 1024px) {
          .swiper-slide {
            height: 180px; /* or whatever maximum height you want */
          }
        }
        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>
      
      
      
      
      
      