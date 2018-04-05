export default () => {
  const $btn = $('.js-accordion-btn-sm')
  const $body = $('.js-accordion-body-sm')

  window.matchMedia('(max-width: 600px)').addListener(toggleAccordionBody)
  function toggleAccordionBody() {
    if (window.innerWidth <= 600) {
      $body.hide()
      // $btn.removeClass('is-active')
      $body.each(function() {
        if ($(this).hasClass('is-open')) {
          $(this).show()
        }
      })
      $btn.on('click', function() {
        const $body = $($(this).attr('data-accordion'))
        if ($body.is(':animated')) {
          return false
        } else {
          $(this).toggleClass('is-active')
          $body.stop().slideToggle(800, 'easeOutExpo')
        }
      })
    } else {
      $body.show()
      $btn.off('click')
    }
  }
  toggleAccordionBody()
}
