Vue.component('section-education', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class="section">
    <div class="container cc-education">
      <div class="h4 text-center mb-4 title">Education</div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2018 - 2022</p>
              <div class="h5">Bachelor's Degree</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">National Taiwan Normal University</div>
              <p class="category">School of Learning Informatics, Program of Learning Sciences</p>
              <p>
              My major is Learning Sciences, which is an interdisciplinary undergraduate program, which encompasses a wide range of professional cultivations in several domains such as Computer Science, Information Science, Data Science, Psychology, Social Science and Education.
                <a href="https://www.upls.ntnu.edu.tw/index.php/en/degree-programs/" target="_blank">More about Learning Sciences</a>
              </p>
              <p>I'm an overachiever in school, I received Excellent Student Scholarship at NTNU which chooses only 36 students every year. Apart from that, my <b>GPA is 4.1/4.3</b> <a href="https://drive.google.com/file/d/1bqrRDn43ec8y203rKzY0Ox44kvaFP3GQ/view" target="_blank">View Transcript</a>.</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })