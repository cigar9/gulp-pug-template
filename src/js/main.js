// jQueryの"$"を使えるようにする
// import $ from 'jquery'

// TweenMax
// import TweenMax from 'gsap'

// ScrollMagic
// import ScrollMagic from 'scrollmagic'

// ScrollMagicのgsapプラグイン（要imports-loader）
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

// jQuery easing
import 'jquery.easing'

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ページトップへ戻る
import pagetop from './modules/pagetop'
pagetop()

import spNavi from './modules/sp-navi'
spNavi()

import accordion from './modules/accordion-collapse'
accordion()

import faqAccordion from './modules/faq-accordion'
faqAccordion()

import formSubjectChange from './modules/form-subject-change'
formSubjectChange()

import floatingBanner from './modules/floating-banner'
floatingBanner()

import gnaviActive from './modules/gnavi-active'
gnaviActive()
