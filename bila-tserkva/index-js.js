let toLeft = document.querySelectorAll('.arrow-left');
let toRight = document.querySelectorAll('.arrow-right');
let slider = document.querySelectorAll('.item-wrap');


for (let i = 0; i < toRight.length; i++) {
    toRight[i].addEventListener('click', function () {
        let maxScrollRight = slider[i].scrollWidth - slider[i].clientWidth;
        if (slider[i].scrollLeft >= maxScrollRight - 1) {
            slider[i].scrollLeft -= slider[i].scrollWidth;
        }
        else {
            slider[i].scrollLeft += 400;
        }
    })
    
    
}

for (let i = 0; i < toRight[i].length; i++) {
    toRight[i].addEventListener('click', function () {
        let maxScrollRight = slider[i].scrollWidth - slider[i].clientWidth;
        if (slider[i].scrollLeft >= maxScrollRight - 1) {
            slider[i].scrollLeft -= slider[i].scrollWidth;
        }
        else {
            slider[i].scrollLeft += 400;
        }
    })


}


let imgFullShow = document.querySelectorAll('img');

for (let i = 0; i < imgFullShow.length; i++) {
    imgFullShow[i].addEventListener('dblclick', function () {
        let srcImg = this.src;
        let newDiv = document.createElement('div');
        newDiv.classList.add('img-galery');
        newDiv.innerHTML = "<img class = 'img-full-show' src = ' " + srcImg + "'>";
        document.body.prepend(newDiv);
        newDiv.onclick = () => {
            newDiv.remove();
        }
    })
  
}

window.addEventListener('load', function (){
    let preloader = document.querySelector('.preloader');
    window.setTimeout(()=>{
        preloader.style.opacity = 0;
    }, 1000)
    window.setTimeout(()=>{
        preloader.style.display = 'none';
    }, 3000)
})