Vue.component('section-work-experience', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class="section" id="experience">
    <div class="container cc-experience">
      <div class="h4 text-center mb-4 title">Work Experience</div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-experience-header">
              <p>2019/6 - 2022/12</p>
              <div class="h5">FiO.one</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">R&D Engineer</div>
              <p>I was building and testing Blockchain products in the educational field at FiO, a Blockchain Startup in Taiwan. My main work is researching New Blockchain Technology, mainly in IOTA and Ethereum. Then Design and Optimize System Structure of FiO’s product based on my research result. Also, I explore 3rd party tech to integrate with the product like OpenCerts or Google API. After my research, I host workshops to educate colleagues about new blockchain knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })