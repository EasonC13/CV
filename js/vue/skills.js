Vue.component('section-skills', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class="section" id="skill">
    <div class="container">
      <div class="h4 text-center mb-4 title">Professional Skills</div>
      <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">HTML</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div><span class="progress-value">80%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">CSS</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div><span class="progress-value">75%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">JavaScript</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div><span class="progress-value">60%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">SASS</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div><span class="progress-value">60%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">Bootstrap</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div><span class="progress-value">75%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge">Photoshop</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div><span class="progress-value">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })