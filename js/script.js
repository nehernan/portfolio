const btnVermas1 = document.getElementById('btnVermas1');
const btnVermas2 = document.getElementById('btnVermas2');
const btnVermas3 = document.getElementById('btnVermas3');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

btnVermas1.addEventListener('click', () => {
   if(text1.classList.contains('fa-angle-down')){
        text1.classList.remove('fa-angle-down');
        text1.classList.add('fa-angle-up');
    }else{
        text1.classList.remove('fa-angle-up');
        text1.classList.add('fa-angle-down');
   }
});
btnVermas2.addEventListener('click', () =>{
    if(text2.classList.contains('fa-angle-down')){
         text2.classList.remove('fa-angle-down');
         text2.classList.add('fa-angle-up');
     }else{
         text2.classList.remove('fa-angle-up');
         text2.classList.add('fa-angle-down');
    }
 });
 btnVermas3.addEventListener('click', () => {
    if(text3.classList.contains('fa-angle-down')){
         text3.classList.remove('fa-angle-down');
         text3.classList.add('fa-angle-up');
     }else{
         text3.classList.remove('fa-angle-up');
         text3.classList.add('fa-angle-down');
    }
 });