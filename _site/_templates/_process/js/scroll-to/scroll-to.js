'use strict'

import SmoothScroll from 'smooth-scroll'

export default class ScrollTo {
  constructor () {
    this.config = {

    }

  }
   init () {
     var scroll = new SmoothScroll('a[href*="#"]',{
       speed: 1000,
       speedAsDuration: true,
       easing: 'easeInOutCubic'
     });
   }
}
