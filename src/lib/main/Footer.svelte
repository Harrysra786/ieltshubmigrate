<section class="flex flex-col mt-5">
    <div>
      <main style="margin-left: 3.5em;">
        <header>
          <h1
            class="mb-4 text-lg font-semibold text-center text-gray-800 my-web-font"
          >
            Topics
          </h1>
        </header>
  
        <a href="/tags/javascript/"
          ><span class="tag tag-javascript tag-lg">#writing</span></a
        >
  
        <a href="/tags/firebase/"
          ><span class="tag tag-firebase tag-lg">#reading</span></a
        >
  
        <a href="/tags/ios/"><span class="tag tag-ios tag-lg">#listening</span></a
        >
  
        <a href="/tags/angular/"
          ><span class="tag tag-angular tag-lg">#speaking</span></a
        >
  
        <a href="/tags/svelte/"
          ><span class="tag tag-svelte tag-lg">#vocabulary</span></a
        >
  
        <a href="/tags/node/"><span class="tag tag-node tag-lg">#grammar</span></a
        >
  
        <a href="/tags/cloud-functions/"
          ><span class="tag tag-cloud-functions tag-lg">#idioms</span></a
        >
  
        <a href="/tags/stripe/"
          ><span class="tag tag-stripe tag-lg">#reading-strategies</span></a
        >
  
        <a href="/tags/apollo/"
          ><span class="tag tag-apollo tag-lg">#academic-IELTS</span></a
        >
  
        <a href="/tags/graphql/"
          ><span class="tag tag-graphql tag-lg">#general-IELTS</span></a
        >
  
        <a href="/tags/typescript/"
          ><span class="tag tag-typescript tag-lg">#IELTS-exam</span></a
        >
  
        <a href="/tags/machine-learning/"
          ><span class="tag tag-machine-learning tag-lg">#letter</span></a
        >
  
        <a href="/tags/python/"
          ><span class="tag tag-python tag-lg">#graph</span></a
        >
  
        <a href="/tags/node/"><span class="tag tag-node tag-lg">#table</span></a>
  
        <a href="/tags/cloud-functions/"
          ><span class="tag tag-cloud-functions tag-lg">#bar graph</span></a
        >
        <a href="/tags/javascript/"
          ><span class="tag tag-javascript tag-lg">#line graph</span></a
        >
  
        <a href="/tags/firebase/"
          ><span class="tag tag-firebase tag-lg">#combination graph</span></a
        >
  
        <a href="/tags/ios/"
          ><span class="tag tag-ios tag-lg">#discussion essay</span></a
        >
  
        <a href="/tags/angular/"
          ><span class="tag tag-angular tag-lg">#agree disagree essay</span></a
        >
  
        <a href="/tags/cloud-functions/"
          ><span class="tag tag-cloud-functions tag-lg">#combination essay</span
          ></a
        >
  
        <a href="/tags/stripe/"
          ><span class="tag tag-stripe tag-lg">#formal letter</span></a
        >
  
        <a href="/tags/apollo/"
          ><span class="tag tag-apollo tag-lg">#informal letter</span></a
        >
  
        <a href="/tags/graphql/"
          ><span class="tag tag-graphql tag-lg">#pre-exam tips</span></a
        >
  
        <a href="/tags/typescript/"
          ><span class="tag tag-typescript tag-lg">#self-preparation</span></a
        >
      </main>
      <style>
        :root {
          --red: #ff3860;
          --red-dark: #ff1443;
          --red-light: #ff5c7c;
          --blue: #498afb;
          --blue-dark: #2674fa;
          --blue-light: #6ca0fc;
          --orange: #fa8142;
          --orange-dark: #f96a1f;
          --orange-light: #fb9865;
          --green: #09c372;
          --green-dark: #07a15e;
          --green-light: #0be586;
          --purple: #9166cc;
          --purple-dark: #7d4bc3;
          --purple-light: #a481d5;
          --yellow: #ffdd57;
          --yellow-dark: #ffd633;
          --yellow-light: #ffe47a;
          --pink: #ff4088;
          --pink-dark: #ff1c72;
          --pink-light: #ff649e;
          --gray0: #f8f8f8;
          --gray1: #dbe1e8;
          --gray2: #b2becd;
          --gray3: #6c7983;
          --gray4: #454e56;
          --gray5: #2a2e35;
          --gray6: #12181b;
          --nav-width: 4em;
          --font-body: "sofia-pro", sans-serif;
          --font-head: "sofia-pro", sans-serif;
          --font-code: "attribute-mono", monospace;
          --font-size: 20px;
          --max-width-bp: 768px;
          --orange-pink: linear-gradient(
            to bottom right,
            var(--orange-light),
            var(--orange-dark) 85%
          );
          --green-grad: linear-gradient(
            to bottom right,
            var(--green-light),
            var(--green-dark) 85%
          );
          --background: var(--gray6);
          --text-color: var(--gray2);
          --h-color: #fff;
          --nav-shadow: 4px 0 10px -3px #010101;
          --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.38);
          --toc-shadow: rgba(0, 0, 0, 0.7) 0px 10px 20px 0px;
          --nav-bg: var(--gray5);
          --tag-bg: var(--gray4);
          --code-bg: #22262f;
          --card-bg: var(--gray5);
          --overlay-bg: rgba(0, 0, 0, 0.9);
          --h-border: 2px dashed var(--nav-bg);
          --nav-border: 2px dashed var(--text-color);
          --card-radius: 0.25em;
          transition: all 0.3s ease;
        }
  
        .tag {
          display: inline-block;
          border-radius: 3px;
          padding: 0.2em 0.5em 0.3em;
          border-radius: 2px;
          background: var(--tag-bg);
          color: var(--text-color);
          font-weight: 600;
          margin: 0.25em 0.1em;
        }
  
        h1.tag {
          margin-left: 0;
          margin-right: 0;
        }
  
        .tag-sm {
          font-size: 0.3em;
          display: inline-block;
          letter-spacing: 0.15ch;
          font-weight: 400;
        }
  
        .tag-lg {
          font-size: 0.7em;
          border-radius: 4px;
        }
  
        .tag-bg {
          background: var(--background);
        }
  
        .tag-green,
        .tag-pro {
          background: var(--green);
          color: #fff;
        }
  
        .tag-purple {
          background: var(--purple);
          color: #fff;
        }
  
        .tag-contrast {
          background: var(--text-color);
          color: var(--background);
        }
  
        .tag-javascript {
          background: #f0db4f;
          color: #000;
        }
  
        .tag-typescript {
          background: #2775c3;
          color: #fff;
        }
  
        .tag-angular {
          background: #dc0530;
          color: #fff;
        }
  
        .tag-firebase {
          background: #ffcb2b;
          color: #12181a;
        }
  
        .tag-vue {
          background: #41b883;
          color: #35495e;
        }
  
        .tag-rxjs {
          background: var(--pink);
          color: var(--gray5);
        }
  
        .tag-node {
          background: #90c53f;
          color: #46483d;
        }
  
        .tag-cloud-functions {
          background: var(--blue);
          color: #fff;
        }
  
        .tag-flutter {
          background: #54c5f8;
          color: #003b6c;
        }
  
        .tag-google-maps {
          background: #33a668;
          color: #f8d845;
        }
  
        .tag-android {
          background: #a4c34a;
          color: #fff;
        }
  
        .tag-stripe {
          color: #fff;
          background: #6675e0;
        }
  
        .tag-machine-learning {
          color: #fff;
          background: var(--purple-light);
        }
  
        .tag-python {
          color: #ffda5d;
          background: #3879ab;
        }
  
        .tag-svelte {
          color: #fff;
          background: #ff3e00;
        }
  
        .tag-react {
          color: #00d8ff;
          background: #222;
        }
  
        .tag-ios {
          color: #fff;
          background: #000;
        }
  
        .tag-minimum-viable-product,
        .tag-mvp {
          color: #fff;
          background-image: linear-gradient(90deg, #ff8901, #db1d5f);
          font-weight: 700;
        }
  
        .tag-ionic {
          background: #fff;
          color: #4a8afc;
        }
  
        .tag-nest {
          color: #e0234e;
          background: #000;
        }
  
        .tag-graphql {
          color: #fff;
          background: #e10097;
        }
  
        .tag-electron {
          color: #313244;
          background: #adecf3;
        }
      </style>
    </div>
    <footer class="py-4 mt-8 bg-white border-t-2 border-black border-solid">
      <div class="container px-4 mx-auto text-center">
        <p class="mb-2 text-black">
          © 2023 IELTS-Hub By Hardev Sir. All rights reserved.
        </p>
        <div class="flex justify-center space-x-4">
          <a href="/privacy" class="text-black hover:text-gray-700">Privacy Policy</a>
          <a href="/terms" class="text-black hover:text-gray-700">Terms of Service</a>
          <a href="/refund" class="text-black hover:text-gray-700">Refunds</a>
          <a href="/contact" class="text-black hover:text-gray-700">Contact Us</a>
        </div>
      </div>
    </footer>
  </section>
  