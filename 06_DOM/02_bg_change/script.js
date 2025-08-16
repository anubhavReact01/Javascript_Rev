const body = document.querySelector('body')
const buttons =  document.querySelectorAll('.button')
//querySelectAll kr rahe hao to we get nodelist and in the nodelist we have forEach method jo help krega trace krne mai btn ko or fir uspe events lagane mai

buttons.forEach((button)=>{
    // console.log(button)
    //now eventcalling

    button.addEventListener('click',(e)=>{
        // console.log(e);
        //  console.log(e.target);
         if(e.target.id==='white') body.style.backgroundColor = e.target.id
         if(e.target.id==='grey') body.style.backgroundColor = e.target.id
         if(e.target.id==='blue') body.style.backgroundColor = e.target.id
         if(e.target.id==='yellow') body.style.backgroundColor = e.target.id

    })
})
