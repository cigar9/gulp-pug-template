// レスポンシブ対応（幅をグリグリ変えても大丈夫）のアコーディオン
// .js-accordion-btnのdata-accordionに対応したidを持つDOMが開閉ターゲットとなる。
// .js-accordion-btn, .js-accordion-body に'data-mq'を設定し、アコーディオン化するウィンドウ幅を決定する。
// lg = 全ての幅でアコーディオン化
// md = 960px以下でアコーディオン化
// sm = 600px以下でアコーディオン化
//
// ex.
// <p class="js-accordion-btn" data-accordion="#hogehoge" data-mq="lg">hogehogeアコーディオンを開く</p>
// <div id="hogehoge" class="js-accordion-body" data-mq="lg">
//   hogehogeアコーディオンのコンテンツ
// </div>
//
// ※「PC幅ではアコーディオンだけど、SP幅ではアコーディオンやめる」というのはできない。

export default () => {
  const $btn = $('.js-accordion-btn'),
    $body = $('.js-accordion-body')

  // is-openがついていたら初期表示でオープン
  $body.each(function() {
    if ($(this).hasClass('is-open')) {
      $(this).show()
    }
  })

  // クリック時の処理
  $btn.on('click', function() {
    const $body = $($(this).attr('data-accordion'))

    const mq = $(this).attr('data-mq')
    if (mq == 'sm') {
      // console.log('sm')

      if (window.innerWidth <= 600) {
        const $body = $($(this).attr('data-accordion'))
        toggleAccordion($(this), $body)
      }
    } else if (mq === 'md') {
      // console.log('md')
      if (window.innerWidth <= 960) {
        const $body = $($(this).attr('data-accordion'))
        toggleAccordion($(this), $body)
      }
    } else {
      // console.log('lg')
      const $body = $($(this).attr('data-accordion'))
      toggleAccordion($(this), $body)
    }
  })

  function toggleAccordion(btn, body) {
    if (body.is(':animated')) {
      return false
    } else {
      btn.toggleClass('is-active')
      body.stop().slideToggle(800, 'easeOutExpo')
    }
  }

  // resize時の処理
  window.matchMedia('(max-width: 600px)').addListener(mqSm)
  window.matchMedia('(max-width: 960px)').addListener(mqMd)
  function mqSm() {
    const $bodySm = $('.js-accordion-body[data-mq="sm"]')
    if (window.innerWidth > 600) {
      // console.log('size is sm')
      $bodySm.show()
    }
  }
  function mqMd() {
    const $bodyMd = $('.js-accordion-body[data-mq="md"]')
    if (window.innerWidth > 960) {
      // console.log('size is md')
      $bodyMd.show()
    }
  }
}
