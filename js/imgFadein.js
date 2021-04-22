options = {
    rootMargin: '0px',
    threshold: [0.25],
};

function imgFadein(entries){
    entries.forEach(e=>{
        if(entries[0].intersectionRatio!=0){
            e.target.getElementsByTagName("img")[0].src = e.target.getElementsByTagName("img")[0].dataset.src;
            e.target.getElementsByTagName("img")[0].classList.add('imgFadein');
            e.target.getElementsByTagName("img")[0].style.visibility = '';
            Edu.unobserve(e.target);
        }
    });
}

let Edu = new IntersectionObserver(imgFadein,options);
document.querySelectorAll('.schoolPhoto').forEach(e=>{
    Edu.observe(e);
})