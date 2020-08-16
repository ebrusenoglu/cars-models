let models = [
    {
        name: 'Jeep Compass',
        image: 'img/jeep.jpg',
        link: 'http://www.arabalar.com.tr/jeep/compass/2020/1-3-limited'
    },
    {
        name: 'Ford Puma',
        image: 'img/ford.jpg',
        link: 'http://www.arabalar.com.tr/ford/puma/2020/1-0-hibrit-st-line'
    },
    {
        name: 'Kia Rio',
        image: 'img/kia.jpg',
        link: 'http://www.arabalar.com.tr/jeep/compass/2020/1-3-limitedhttp://www.arabalar.com.tr/kia/rio/2020/yeni-1-0-cool-dct'
    },
    {
        name: 'Audi A7',
        image: 'img/audi.jpg',
        link: 'http://www.arabalar.com.tr/audi/a7/2020/sportback-3-0-tdi'
    },
    {
        name: 'Volkswagen Golf',
        image: 'img/valkswagen.jpg',
        link: 'http://www.arabalar.com.tr/volkswagen/golf/2020/1-0-tsi-midline-plus'
    }
];

let index = 4;
let slaytCount = models.length;
let interval;
let settings = {
    duration: '2000',
    random: false,
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {

    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {

    index++;
    showSlide(index);

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings) {

    let prev;
    interval=setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;

        }
        showSlide(index);

    }, settings.duration)

}




function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    };
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
};




