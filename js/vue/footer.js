Vue.component('section-footer', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<footer class="footer">
    <div class="container text-center">
      <a class="btn btn-link btn-icon" href="https://www.facebook.com/EasonC13" target="_blank" rel="tooltip" title="Follow me on Facebook"><i class="fa fa-facebook"></i></a>
      <a class="btn btn-link btn-icon" href="https://twitter.com/Eason_C13" target="_blank" rel="tooltip" title="Follow me on Twitter"><i class="fa fa-twitter"></i></a>
      <a class="btn btn-link btn-icon" href="https://www.linkedin.com/in/easonc13/" target="_blank" rel="tooltip" title="Follow me on LinkedIn"><i class="fa fa-linkedin"></i></a>
      <a class="btn btn-link btn-icon" href="https://github.com/EasonC13" target="_blank" rel="tooltip" title="Follow me on GitHub"><i class="fa fa-github"></i></a>
    </div>
    <div class="h4 title text-center">Eason Chen</div>
    <div class="text-center text-muted">
      <p>&copy; Eason Chen and Creative CV. All rights reserved.<br>Design - <a class="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
    </div>
  </footer>`
  })