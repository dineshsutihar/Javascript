const selectBtn = document.querySelectorAll('.button');

selectBtn.forEach((btn)=> {
    btn.addEventListener('click',(e)=>document.body.style.backgroundColor = e.target.id )
});
