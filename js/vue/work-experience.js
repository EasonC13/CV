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
              <p>I'm Building and Testing Blockchain Product in educational field. My main work is to research on New Blockchain Technology, mainly in IOTA, Ethereum. Then Design and Optimize System Structure of FiO’s product based on my research result. Also, research 3rd party tech to integrate with the product like OpenCerts or Google API. After my research, I host workshops to educate colleagues about new blockchain knowledge.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-experience-header">
              <p>2019/4 - Now</p>
              <div class="h5">NTNU</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Research Assistant</div>
              <p></p>
              <ul>
                <li>Prof. Yuen-Hsien Tseng (2020-2022): Prof. Tseng is my thesis advisor. We closely work together in his lab “Artificial Intelligence and Text Mining Laboratory”. Aside from coding and papers, I'm responsible for Nginx, CUDA and Docker environments, too.</li>
                <li>Prof. Hsueh-Chih Chen (2021): Portable Integrated Data Export Pipeline System.</li>
                <li>Prof. Ching-Lin Wu (2020): I built a web platform in FastAPI and Vue for the creative experiment, then built pipeline to transform and analyze the collected data.</li>
                <li>Prof. Guo-Li Chiou (2019): We Explore how students solve physics problems. I utilize Python to analyze and transform the eye-tracking data, then plot the statistics result into a graph.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })