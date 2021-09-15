var slideIndex = 3;
var filter_type="javascript";
function plusSlides(n){
    showProjects(slideIndex +=n);
}


function showProjects(n){
    var slides = slides = document.getElementsByClassName("project");
    
    console.log(slides);
    console.log(filter_type);
    
    if (n > slides.length) {slideIndex = slides.length}
    if (n < 3) {slideIndex = 3;}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display="none";  
    }
    slides[slideIndex-3].style.display = "block";
    slides[slideIndex-2].style.display = "block";
    slides[slideIndex-1].style.display = "block";
    
}

function filter(type,id){
    let btn = document.getElementById(id);
    let btns = document.getElementsByClassName("btn");
    let tags = document.getElementsByTagName("a");
    for(var i=0; i< btns.length; i++){
        btns[i].classList.remove("button-fill");
    }
    btn.classList.add("button-fill");
    if(type =='all'){
       
        for(var k=0; k< tags.length; k++){
            tags[k].style.display = "block";
        }
        filter_type = 'all';
        display(filter_type);
    }
    else if(type=='javascript'){
        filter_type = 'javascript';
        for(var k=0; k< tags.length; k++){
            tags[k].style.display = "none";
        }
        display(filter_type);
    }
    else{
        for(var k=0; k< tags.length; k++){
            tags[k].style.display = "none";
        }
        filter_type='responsive';
        display(filter_type);
    }
}

function display(filter_type){
    var slides = document.getElementsByClassName("project");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display="none";  
    }

    if(filter_type == 'all'){
        slides = document.getElementsByClassName("project");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display="block";  
        }
    }
    else if(filter_type == 'javascript'){
        slides = document.getElementsByClassName("type-js");
        console.log(slides);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display="block";  
        }
    }
    else{
        slides = document.getElementsByClassName("type-responsive");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display="block";  
        }
    }

}

