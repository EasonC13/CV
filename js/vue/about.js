Vue.component('section-about', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class="section" id="about">
    <div class="container">
      <div class="card" data-aos="fade-up" data-aos-offset="10">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">About</div>
              <p>Hello! I am Anthony Barnett. Web Developer, Graphic Designer and Photographer.</p>
              <p>Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience. <a href="https://templateflip.com/templates/creative-cv/" target="_blank">Learn More</a></p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">Basic Information</div>
              <div class="row">
                <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                <div class="col-sm-8">24</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                <div class="col-sm-8">anthony@company.com</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
                <div class="col-sm-8">+1718-111-0011</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
                <div class="col-sm-8">140, City Center, New York, U.S.A</div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
                <div class="col-sm-8">Chinese, English</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })