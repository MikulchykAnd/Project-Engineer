    const iconMenu = document.querySelector('.menu__icon');
    const HeaderMenu = document.querySelector('.header__menu');
    const menuList = document.querySelector('.menu__list');
    const body = document.querySelector('body');
    

    iconMenu.addEventListener('click', function(e){
        iconMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });

    const menuLink = document.querySelector('.menu__link');

    menuList.addEventListener('click',function(e){
        iconMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');
        document.body.classList.toggle('_lock');

    } )
    

        current = 0;
        const left = document.querySelector('.btn__left');
        const right = document.querySelector('.btn__right');
        const slider = document.querySelector('.project__contain');
        const slideImage = document.querySelectorAll('.slide');

        function reset (){
            for(let i=0; i<slideImage.length; i++){
                slideImage[i].style.display = 'none';
            }
        }

        function startSlide (){
            reset();
            slideImage[0].style.display = 'block';
        }

        function slideLeft (){
            reset();
            slideImage[current - 1].style.display = 'block';
            current --;
        }

        function slideRight (){
            reset();
            slideImage[current + 1].style.display = 'block';
            current ++;
        }

        left.addEventListener('click', function(){
            if(current ===0){
                current = slideImage.length;
            }
            slideLeft()
        })

        right.addEventListener('click', function(){
            if(current ===slideImage.length - 1){
                current = -1;
            }
            slideRight()
        })
       


        startSlide();
