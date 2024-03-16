let counting = 0;

const content = document.querySelector('#count');

const inc = document.querySelector('#inc');

const dec = document.querySelector('#dec');

const clear = document.querySelector('#clear');

let errorAppended = false;

let clrpressed = false;

inc.addEventListener('click',()=>{
    counting++;
    content.innerText= counting;
    if(counting>0) clear.style.display = 'inline';
    if (errorAppended) {
        const errorElement = document.querySelector('.error');
        if (errorElement) {
            errorElement.remove();
        }
        errorAppended = false;
    }
    clrpressed = false;
})



dec.addEventListener('click',()=>{
    if(counting==1){
        clear.style.display = 'none';
    }
    if(counting<=0 && !errorAppended){
        const error = document.createElement('p');
        error.className = 'error';
        error.innerText = '\' Error :Cannot go below 0 \'';
        const conDiv = document.querySelector('.con');
        conDiv.insertAdjacentElement('afterend', error);
        error.style.color = 'red';
        error.style.marginTop = '2em';
        errorAppended=true;
    }
    else if(counting>0){
        counting--;
        content.innerText= counting;
    }

    clrpressed = false;
})


clear.addEventListener('click',()=>{
    counting=0;
    content.innerText= 0;
    clear.style.display = 'none';
    if (errorAppended) {
        const errorElement = document.querySelector('.error');
        if (errorElement) {
            errorElement.remove();
        }
        errorAppended = false;
    }
    clrpressed = true;
})