Vue.component('section-about', {
    data: function () {
      return {
        age: new Date().getFullYear() - 2000
      }
    },
    template: `<div class="section" id="about">
    <div class="container">
      <div class="card" data-aos="fade-up" data-aos-offset="10">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">About</div>
              <p>This is Eason from Taiwan. My name in Chinese is ‘怡升 (I-Sheng)’, meaning ‘rising with joy’. I hope I can have a joyful mind, keep making progress and gain pleasure by doing so.</p>
              <p>I gain a lot of pleasure in both doing academic research and using coding to solve problems. Therefore, I want to pursue Master or Ph.D. overseas in Computer Science at 2023 Sep in the field of HCI, Blockchain, and AI. Now I'm looking for suitable jobs before I go abroad.</p>
              <p>I have finished all the credits I need to graduate before 2022 Jan. Then, I plan to work from 2022 Jul to 2023 Aug to learn industry know-how and cultivate soft skills. Now I'm looking for an onsite job in Taipei or a remote job. Please feel free to contact me if you need any more information.</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">Basic Information</div>
              <div class="row">
                <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                <div class="col-sm-8">{{age}}</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                <div class="col-sm-8">eason.tw.chen@gmail.com</div>
              </div>
              <!-- <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
                <div class="col-sm-8">+1718-111-0011</div>
              </div> -->
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Location:</strong></div>
                <div class="col-sm-8">106, Daan District, Taipei, Taiwan</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
                <div class="col-sm-8">English, Mandarin (Chinese)</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">BackEnd Skills:</strong></div>
                <div class="col-sm-8">Python, FastAPI, Flask, Django, JavaScript, Expresss.js, MongoDB, PostgreSQL, MySQL, Elasticsearch</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Data Skills:</strong></div>
                <div class="col-sm-8">Pandas, Scikit-Learn, PyTorch, Tensorflow Keras, Snorkel, Adapter-Transformers</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">FrontEnd Skills:</strong></div>
                <div class="col-sm-8">HTML, CSS, BootStrap, Vue, React, Angular, JavaScript, TypeScript, IndexedDB</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Other Skills:</strong></div>
                <div class="col-sm-8">Ethereum, Solidity, IOTA, OpenCerts, Selenium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })