export default () => {
  const $pagetop = $('#js-pagetop')

  $pagetop.on('click', () => {
    $('html,body').animate(
      {
        scrollTop: '0'
      },
      1000,
      'easeOutExpo'
    )
  })
}
