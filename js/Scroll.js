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
    
}
window.addEventListener('scroll',scrollHandler);
scrollHandler();