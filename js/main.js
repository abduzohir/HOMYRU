const slider = document.querySelector('.slider')
const sliderList = document.querySelector('.slider-list')
const sliderItems = document.querySelectorAll('.slider-list__item')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let moveSlide = 100;
let timeMove = 1000;
let activeSlide = 0;

sliderItems.forEach(function(slide, key){
  if(key != activeSlide){
    slide.style.transform = `translateX(${moveSlide}%)`
  }
  if(key == sliderItems.length - 1){
    slide.style.transform = `translateX(${-moveSlide}%)`
  }
})

prevBtn.addEventListener('click', function(){move(prevBtn)})
nextBtn.addEventListener('click', function(){move(nextBtn)})

function move(btn){
  nextBtn.disabled = true
  prevBtn.disabled = true
  setTimeout(function(){
    nextBtn.disabled = false
    prevBtn.disabled = false
  }, timeMove + 200)
  let btnPrevOrNext = btn == nextBtn ? -moveSlide : moveSlide;
  sliderItems.forEach(function(slide, key){
    if(key != activeSlide){
      slide.style.transform = `translateX(${-btnPrevOrNext}%)`
      slide.style.transition = `0ms`
    }
  })
  setTimeout(function(){
    sliderItems[activeSlide].style.transform = `translateX(${btnPrevOrNext}%)`
    sliderItems[activeSlide].style.transition = `${timeMove}ms`
    sliderDotsLi[activeSlide].classList.remove('active')
    if(btn == nextBtn){
      activeSlide++
      if(activeSlide > sliderItems.length - 1){
        activeSlide = 0
      }
    }else if(btn == prevBtn){
      activeSlide--
      if(activeSlide < 0){
        activeSlide = sliderItems.length - 1
      }
    }
    sliderItems[activeSlide].style.transform = `translateX(0%)`
    sliderItems[activeSlide].style.transition = `${timeMove}ms`
    sliderDotsLi[activeSlide].classList.add('active')
  }, 200)
}

// dots
const ul = document.createElement('ul')
ul.classList.add('slider-dots')
sliderItems.forEach(function(){
  const li = document.createElement('li')
  ul.append(li)
})
slider.append(ul)
const sliderDotsLi = document.querySelectorAll('.slider-dots li')
sliderDotsLi[activeSlide].classList.add('active')
sliderDotsLi.forEach(function(dot, key){
  dot.addEventListener('click', function(){controllers(key)})
})
let active = true
function controllers(dotKey){
  if(active && dotKey != activeSlide){
    sliderItems.forEach(function(slide){
      slide.style.transition = '0ms'
    })
    active = false
    nextBtn.disabled = true
    prevBtn.disabled = true
    sliderDotsLi.forEach(function(dot){dot.classList.remove('active')})
    let moveLeftOrRight = dotKey > activeSlide ? -moveSlide : moveSlide
    sliderItems[dotKey].style.transform = `translateX(${-moveLeftOrRight}%)`
    setTimeout(function(){
      sliderItems[activeSlide].style.transform = `translateX(${moveLeftOrRight}%)`
      sliderItems[activeSlide].style.transition = `${timeMove}ms`
      sliderDotsLi[activeSlide].classList.remove('active')
      activeSlide = dotKey
      sliderItems[activeSlide].style.transform = `translateX(0%)`
      sliderItems[activeSlide].style.transition = `${timeMove}ms`
      sliderDotsLi[activeSlide].classList.add('active')    
    }, 100)
    setTimeout(function(){
      active = true
      nextBtn.disabled = false
      prevBtn.disabled = false
    },timeMove + 200)
  }
}

class SLIDER{
  constructor(option){
    this.parentGlobl = option.slider
    this.sliderListGlobl = this.parentGlobl.querySelector('.product_list')
    this.sliderItemsGlobl = this.parentGlobl.querySelectorAll('.product-item')
    this.prevBtnGlobl = this.parentGlobl.querySelector('.prevGlobl')
    this.nextBtnGlobl = this.parentGlobl.querySelector('.nextGlobl')
    this.moveSlideGlobl = 100;
    this.timeMoveGlobl = 1000;
    this.activeSlideGlobl = 0;
    // dots
    this.active = true  
    // ==================
    this.sliderItemsGlobl.forEach((slide, key)=>{
      if(key != this.activeSlideGlobl){
        slide.style.transform = `translateX(${this.moveSlideGlobl}%)`
      }
      if(key == this.sliderItemsGlobl.length - 1){
        slide.style.transform = `translateX(${-this.moveSlideGlobl}%)`
      }
    })
    this.prevBtnGlobl.addEventListener('click', ()=>{this.moveGlobl(this.prevBtnGlobl)})
    this.nextBtnGlobl.addEventListener('click', ()=>{this.moveGlobl(this.nextBtnGlobl)})
  }
  moveGlobl(btnGlobl){
    this.nextBtnGlobl.disabled = true
    this.prevBtnGlobl.disabled = true
    setTimeout(()=>{
      this.nextBtnGlobl.disabled = false
      this.prevBtnGlobl.disabled = false
    }, this.timeMoveGlobl + 200)
    let btnPrevOrNextGlobl = btnGlobl == this.nextBtnGlobl ? -this.moveSlideGlobl : this.moveSlideGlobl;
    this.sliderItemsGlobl.forEach((slide, key)=>{
      if(key != this.activeSlideGlobl){
        slide.style.transform = `translateX(${-btnPrevOrNextGlobl}%)`
        slide.style.transition = `0ms`
      }
    })
    setTimeout(()=>{
      this.sliderItemsGlobl[this.activeSlideGlobl].style.transform = `translateX(${btnPrevOrNextGlobl}%)`
      this.sliderItemsGlobl[this.activeSlideGlobl].style.transition = `${this.timeMoveGlobl}ms`
      if(btnGlobl == this.nextBtnGlobl){
        this.activeSlideGlobl++
        if(this.activeSlideGlobl > this.sliderItemsGlobl.length - 1){
          this.activeSlideGlobl = 0
        }
      }else if(btnGlobl == this.prevBtnGlobl){
        this.activeSlideGlobl--
        if(this.activeSlideGlobl < 0){
          this.activeSlideGlobl = this.sliderItemsGlobl.length - 1
        }
      }
      this.sliderItemsGlobl[this.activeSlideGlobl].style.transform = `translateX(0%)`
      this.sliderItemsGlobl[this.activeSlideGlobl].style.transition = `${this.timeMoveGlobl}ms`
    }, 200)
  }
  controllers(dotKey){
    if(this.active && dotKey != this.activeSlideGlobl){
      this.sliderItemsGlobl.forEach((slide)=>{
        slide.style.transition = '0ms'
      })
      this.active = false
      this.nextBtnGlobl.disabled = true
      this.prevBtnGlobl.disabled = true
      let moveLeftOrRight = dotKey > this.activeSlideGlobl ? -this.moveSlideGlobl : this.moveSlideGlobl
      this.sliderItemsGlobl[dotKey].style.transform = `translateX(${-moveLeftOrRight}%)`
      setTimeout(()=>{
        this.sliderItemsGlobl[this.activeSlideGlobl].style.transform = `translateX(${moveLeftOrRight}%)`
        this.sliderItemsGlobl[this.activeSlideGlobl].style.transition = `${this.timeMoveGlobl}ms`
        this.activeSlideGlobl = dotKey
        this.sliderItemsGlobl[this.activeSlideGlobl].style.transform = `translateX(0%)`
        this.sliderItemsGlobl[this.activeSlideGlobl].style.transition = `${this.timeMoveGlobl}ms`   
      }, 100)
      setTimeout(()=>{
        this.active = true
        this.nextBtnGlobl.disabled = false
        this.prevBtnGlobl.disabled = false
      }, this.timeMoveGlobl + 200)
    }
  }
}

const sliders = document.querySelectorAll('.product')
for(const slider of sliders){
  new SLIDER({
    slider: slider 
  })
}