export default () => {
  const url = location.pathname.split('/')[1]
  $('#js-gnavi a').each(function() {
    const $href = $(this)
      .attr('href')
      .split('/')[1]
    if (url === $href) {
      $(this).addClass('is-active')
    }
  })
}
