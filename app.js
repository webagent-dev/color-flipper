const mainContainer = document.querySelector('.main-wrapper');
const add = document.querySelector('.add');
const ele = true


function addUi(){
  const divEle = document.createElement('div');
      divEle.classList.add('dragged');
      const drag = document.createAttribute('draggable')
      drag.value = ele
      divEle.setAtrributeNode = drag
  divEle.innerHTML = ` 
              <div class="tool"> 
                    <div class="btn edit">  <i class="fas fa-edit"></i></div>
                    <div class="btn delete"> <i class="fas fa-times"></i> </div> 
                    <div class="add__btn">  <i class="fas fa-plus"></i></div>
            </div>
            <div class="main-container">
              <div class="main">

                </div> 
           <form class=" text hidden">
              <textarea id="word"></textarea>
        </form>  
            </div>`

    mainContainer.append(divEle);
const editBtn  = divEle.querySelector('.edit');
const deleteBtn = divEle.querySelector('.delete');
const mainText = divEle.querySelector('.main');
  const form = divEle.querySelector('.text');
const textArea = divEle.querySelector('#word');
const plus = divEle.querySelector('.add__btn')
.addEventListener('click', insideUi)
deleteBtn.addEventListener('click',(e) => {
  e.currentTarget.parentElement.parentElement.remove()
});

  editBtn.addEventListener('click', () =>{
    if(!form.classList.contains('hidden')){
      form.classList.add('hidden');
      const value = textArea.value
        if(value){
          mainText.innerHTML = value
        }else{
          mainText.innerHTML = ''
        }
  
    }else{
      form.classList.remove('hidden');
    }
  });

}

add.addEventListener('click', () =>{
     addUi()
});

function insideUi(){
  addUi()
}