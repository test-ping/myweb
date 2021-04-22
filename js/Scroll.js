const li = [...document.querySelectorAll('ul li')];
const liobj = li.reduce( (prev,current,index)=>{
    prev[index] = false;
    return prev;
},{})

let liProxy = new Proxy(liobj, {
    get(target,key){
        return target[key];
    },
    set(target,key,value){
       target[key] = value;
       if(value){li[key].classList.add('nowposition')}
       else{li[key].classList.remove('nowposition')}
    }
});
// console.log(liobj);
let ProgressBar = 0;
let ProgressBarHandler = false;
const ProgressBarTime = function(ProgressBarValue,key){
    let TimeSet = setInterval((function(){
      document.querySelectorAll('.ProgressBar')[key].style.width = `${ProgressBar}%`;
      document.querySelectorAll('.ProgressBar')[key].innerHTML = `${ProgressBar}%`;
      ProgressBar += 1 ;
      if(ProgressBar>ProgressBarValue){ clearInterval(TimeSet);}
  }),50)
}

const scrollHandler = function (e){
    const headerY = document.querySelector('header');
    const AboutY = document.querySelectorAll('setion')[0];
    const EducationY = document.querySelectorAll('setion')[1];
    const WorkY = document.querySelectorAll('setion')[2];
    const SkillY = document.querySelectorAll('setion')[3];
    const ContactY = document.querySelectorAll('setion')[4];
    //  console.log(this, this.scrollY);

    if(this.scrollY>=1000){
        if(!ProgressBarHandler){
        for(let i =0 ; i<=document.querySelectorAll('.ProgressBar').length; i++)
            { 
                switch(i){
                                case 0: ProgressBarTime(65,0); break;
                                case 1: ProgressBarTime(50,1); break;
                                case 2: ProgressBarTime(38,2); break;
                                case 3: ProgressBarTime(10,3); break;
                                case 4: ProgressBarTime(3,4); break;
                            }
            }
        ProgressBarHandler = true;
        }
    }
    
    if(this.scrollY < headerY.offsetHeight + headerY.offsetTop)liProxy[0] = true;
    else liProxy[0] = false;
    if(this.scrollY >= headerY.offsetHeight + headerY.offsetTop && this.scrollY < AboutY.offsetHeight + AboutY.offsetTop)liProxy[1] = true;
    else liProxy[1] = false;
    if(this.scrollY >= AboutY.offsetHeight + AboutY.offsetTop && this.scrollY < EducationY.offsetHeight + EducationY.offsetTop)liProxy[2] = true;
    else liProxy[2] = false;
    if(this.scrollY >=EducationY.offsetHeight + EducationY.offsetTop && this.scrollY < WorkY.offsetHeight + WorkY.offsetTop)liProxy[3] = true;
    else liProxy[3] = false;
    if(this.scrollY >=WorkY.offsetHeight + WorkY.offsetTop && this.scrollY < (SkillY.offsetHeight)/2 + SkillY.offsetTop){liProxy[4] = true;}
    else liProxy[4] = false;
    if(this.scrollY >= (SkillY.offsetHeight)/2 + SkillY.offsetTop ) liProxy[5] = true;
    else liProxy[5] = false;




}
window.addEventListener('scroll',scrollHandler);
scrollHandler();