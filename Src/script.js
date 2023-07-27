let cardContainers = [...document.querySelectorAll('.card-container')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nextbtn = [...document.querySelectorAll('.next-btn')];
let card = document.querySelector('.card').getBoundingClientRect().width;

console.log(cardContainers[0].getBoundingClientRect());

cardContainers.forEach((items,i)=>{
    let containerdimensions = items.getBoundingClientRect();
    let containerwidth = containerdimensions.width;

    nextbtn[i].addEventListener('click',()=>{
        items.scrollLeft +=(card *2)-50;
    })
    prebtn[i].addEventListener('click',()=>{
        items.scrollLeft -=(card *2) + 50;
    })
})