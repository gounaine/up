// let picture=document.querySelector('img');
// let upward=document.querySelector('.upward');

// window.addEventListener('load',()=>{
//     for (let i = 0; i < 101; i++) {

//         upward.innerHTML= i ;
//         picture.style.opacity= i*100;
//     }
    
// })
let picture = document.querySelector('img');
let upward = document.querySelector('.upward');
let up=document.querySelector('.up')

window.addEventListener('load', () => {
    let i = 0;
    
    function updateOpacityAndCounter() {
        if (i <= 100) {
            upward.textContent = i ; // Update the content of .upward
            picture.style.opacity = i / 100  ; // Update the opacity of the image
            
            i++;
            setTimeout(updateOpacityAndCounter, 50); // Call the function again after 50ms
        }
        removeTheElement();
    }
    function removeTheElement(){
        if(i>100){
            up.remove();
        }
    }
    
    updateOpacityAndCounter();
     // Start the update process
});
