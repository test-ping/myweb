
let vm = new Vue({
    el:'#skill',
    data:{
        html:0,
        css:0,
        javascript:0,
        vue:0,
        git:0,
        bootstrap:0,
        pro_observe:'',
    },
    computed:{
        progress1:function(){
            return{'width':this.html + '%',}
        },
        progress2:function(){
            return{'width':this.css + '%',}
        },
        progress3:function(){
            return{'width':this.javascript + '%',}
        },
        progress4:function(){
            return{'width':this.vue + '%',}
        },
        progress5:function(){
            return{'width':this.bootstrap + '%',}
        },
        progress6:function(){
            return{'width':this.git + '%',}
        },
    },
    mounted:function(){
        let progress = document.querySelectorAll('.progress');
        this.pro_observe = new IntersectionObserver(this.progressload, {
            rootMargin: '0px',
            threshold:1,
        });
        progress.forEach(e=>{
            this.pro_observe.observe(e);
        });
    },
    methods:{
        progressload(e){
                e.forEach(item=>{
                    if(item.intersectionRatio === 1){
                        if(item.target.dataset.name=='html'){
                            let progressAnimation1 =  setInterval( e=>{
                                this.html ++;
                                if(this.html == 80){
                                    clearInterval(progressAnimation1);
                                }
                            }, 20);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[0]);
                        }
                        else if(item.target.dataset.name=='CSS'){
                            let progressAnimation2 =  setInterval( e=>{
                                this.css ++;
                                if(this.css == 60){
                                    clearInterval(progressAnimation2);
                                }
                            }, 20);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[1]);
                        }
                        else if(item.target.dataset.name=='Javascript'){
                            let progressAnimation3 =  setInterval( e=>{
                                this.javascript ++;
                                if(this.javascript == 45){
                                    clearInterval(progressAnimation3);
                                }
                            }, 20);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[2]);
                        }
                        else if(item.target.dataset.name=='Vue'){
                            let progressAnimation4 =  setInterval( e=>{
                                this.vue ++;
                                if(this.vue == 25){
                                    clearInterval(progressAnimation4);
                                }
                            }, 20);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[3]);
                        }
                        else if(item.target.dataset.name=='bootstrap'){
                            let progressAnimation5 =  setInterval( e=>{
                                this.bootstrap ++;
                                if(this.bootstrap == 30){
                                    clearInterval(progressAnimation5);
                                }
                            }, 20);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[4]);
                        }
                        else if(item.target.dataset.name=='git'){
                            let progressAnimation6 =  setInterval( e=>{
                                this.git ++;
                                if(this.git == 25){
                                    clearInterval(progressAnimation6);
                                }
                            }, 30);
                            this.pro_observe.unobserve(document.querySelectorAll('.progress')[5]);
                        }
                    }
                })
            
        }
    }
});