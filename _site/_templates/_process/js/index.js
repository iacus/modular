/* src/app.js */

'use strict'

import Debug from './debug/debug'
import ScrollTo from './scroll-to/scroll-to'

// new Overlay().init()

const initFun = () => {
  new Debug().init()
  new ScrollTo().init()
}

function documentReady (fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn)
    console.log('Ready!')
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn()
      }
    })
  }
}
documentReady(initFun)
