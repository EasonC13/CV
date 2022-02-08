Vue.component('section-reference', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class="section" id="reference">
    <div class="container cc-reference">
      <div class="h4 mb-4 text-center title">References</div>
      <div class="card" data-aos="zoom-in">
        <div class="carousel slide" id="cc-Indicators" data-ride="carousel">
          <ol class="carousel-indicators">
            <li class="active" data-target="#cc-Indicators" data-slide-to="0"></li>
            <!-- <li data-target="#cc-Indicators" data-slide-to="1"></li>
            <li data-target="#cc-Indicators" data-slide-to="2"></li> -->
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-lg-2 col-md-3 cc-reference-header"><img src="https://media-exp1.licdn.com/dms/image/C5603AQGZc9aAJS-HAQ/profile-displayphoto-shrink_200_200/0/1516275237030?e=1649894400&v=beta&t=G3m2dODonIoVmiMQNNSQyrqOnDvm7YdQZhY4RJTXHoo" alt="Image"/>
                  <div class="h5 pt-2">Niall Roche</div>
                  <p class="category">Mentor at Google Summer of Code</p>
                </div>
                <div class="col-lg-10 col-md-9">
                  <p> Eason's passion for his Google Summer of Code project was matched by his technical capabilities, and his continued hunger to learn and improve. He has been a wonderful mentee and continues to be a passionate contributor to OSS projects. He has a range of technical abilities from Web Development, Machine Learning (in particular, NLP) and also in Blockchain and Distributed Ledger Technologies. He would be a great asset to any team.</p>
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <div class="row">
                <div class="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg" alt="Image"/>
                  <div class="h5 pt-2">Braiden</div>
                  <p class="category">CEO / Creativem</p>
                </div>
                <div class="col-lg-10 col-md-9">
                  <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-3.jpg" alt="Image"/>
                  <div class="h5 pt-2">Alexander</div>
                  <p class="category">CEO / Webnote</p>
                </div>
                <div class="col-lg-10 col-md-9">
                  <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>`
  })