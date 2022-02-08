Vue.component('section-research-experience', {
    data: function () {
      return {
        publications: [
          `<b>Chen, E.</b> (2022). The Effect of Multiple Replies for Natural Language Generation Chatbots. Paper presented at the 2022 CHI Conference.`, 
          `Roche, N., Hernandez, W., <b>Chen, E.</b>, Siméon, J., & Selman, D. (2021). Ergo--a programming language for Smart Legal Contracts. arXiv preprint arXiv:2112.07064.`, 
          `<b>Chen, E.</b>, Tseng, Y.-H., & Lo, K.-P. (2021). Focus Plus: Detect Learner's Distraction by Web Camera in Distance Teaching. Paper presented at the 2021 National Chair Professorship Academic Series: Teaching and Learning in Trans - pandemic Era: Idea Innovation and Practice Transformation`, 
          `<b>Chen, E.</b>, & Tseng, Y.-H. (2021). A chatbot platform that allow custom avatars and emotions and can provides multiple replies. Demo presented at the Taiwan Computer-Human Interaction. `, 
          `<b>Chen, E.</b>, Tseng, Y.-H., Chiou, G.-L., & Yuan, C.-W. T. (2021). How the numbers of replies and avatars influence the user experience in Natural Language Generation Chatbot. Paper presented at the Taiwan Computer-Human Interaction.`,
        ],
      }
    },
    methods:{
      nameBold(input){
        return input
      }
    },
    template: `<div class="section" id="experience">
    <div class="container cc-experience">
      <div class="h4 text-center mb-4 title">Research Experience</div>
      <div class="card">
        <div class="row">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-experience-header">
              <p>2021/6 - 2022/2</p>
              <div class="h5">MOST</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div><span class="h5">Undergraduate Research Project Principal Investigator</span></div>
              <p>Ministry of Science and Technology at Taiwan</p>
              <ul>
                <li>Advisor: Prof. Yuen-Hsien Tseng</li>
                <li>Building a natural language text generation chatbot with multi-reply and custom avatars with chosen emotion. Then evaluate the user experience of such design.</li>
                <li>Research results have been published to TAICHI 2021 and CHI 2022 as paper and demo.</li>
              </ul>
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
              <div><span class="h5">Research Assistant</span></div>
              <p>National Taiwan Normal University</p>
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
      <div class="card">
        <div class="row">
          <div class="col-md-12" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Publications</div>
              <p></p>
              <ul>
                <li v-for="(item, index) in publications" key="index"><span v-html="nameBold(item)"></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })