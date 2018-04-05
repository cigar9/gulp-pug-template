export default () => {
  const $btn = $('#js-spnavi-toggle'),
    $body = $('#js-spnavi-body')

  $btn.on('click', function() {
    $(this).toggleClass('is-active')
    $body.toggleClass('is-show')
  })
}
