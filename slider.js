//imags=3 (0,1,2)


let flag = 0;

function controller(x){
    flag = flag + x;
    slideshow(flag);


}

slideshow(flag);
function slideshow(num){
    let sliders = document.getElementsByClassName('slider');

   

    if(num == sliders.length){
        flag = 0;
        num = 0;

    }
    if(num < 0){
        flag = sliders.length-1;
        num = sliders.length-1;
    }

    for(let y of sliders){
        y.style.display = "none";
    }
    sliders[num].style.display="block";
}
    
