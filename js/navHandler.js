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

        const navHandler = function (e){
            const headerY = document.querySelector('header');
            const AboutY = document.querySelectorAll('[class$="-title"]')[0];
            const EducationY = document.querySelectorAll('[class$="-title"]')[1];
            const SkillY = document.querySelectorAll('[class$="-title"]')[2];
            const ContactY = document.querySelectorAll('[class$="-title"]')[3];
            if(this.scrollY < headerY.offsetHeight + headerY.offsetTop)liProxy[0] = true;
            else liProxy[0] = false;
            if(this.scrollY >= headerY.offsetHeight + headerY.offsetTop && this.scrollY < AboutY.offsetHeight + AboutY.offsetTop)liProxy[1] = true;
            else liProxy[1] = false;
            if(this.scrollY >= AboutY.offsetHeight + AboutY.offsetTop && this.scrollY < EducationY.offsetHeight + EducationY.offsetTop)liProxy[2] = true;
            else liProxy[2] = false;
            if(this.scrollY >=EducationY.offsetHeight + EducationY.offsetTop && this.scrollY < SkillY.offsetHeight + SkillY.offsetTop)liProxy[3] = true;
            else liProxy[3] = false;
            if(this.scrollY >= SkillY.offsetHeight + SkillY.offsetTop ) liProxy[4] = true;
            else liProxy[4] = false;
        }     
        window.addEventListener('scroll',navHandler);
        navHandler();