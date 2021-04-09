var FakeSeL = document.querySelector('.selected-list');
var getSelected = document.querySelectorAll('#test option');

var display = document.querySelector('#dis');
// console.log(display);
getSelected.forEach(opt => {    
    let LI = document.createElement('li');
    let A = document.createElement('a');
    
    LI.appendChild(A)
    FakeSeL.appendChild(LI);
    // LI.innerHTML = LI.innerHTML+opt.value;
    A.innerHTML= opt.innerHTML;
    LI.style.display = 'none';
    // for(let i = 0; i <= getSelected.length;i++){
    //     LI.setAttribute('id',i);
    //     console.log(i);
    // }

});
FakeSeL.onclick = function(e){
    e.preventDefault();
    if(FakeSeL.classList.contains('list-active')){
        FakeSeL.classList.remove('list-active');
    }else {
        FakeSeL.classList.add('list-active');
    }
}
var chose = FakeSeL.querySelectorAll('.selected-list li a');
chose.forEach(c => {
    c.onclick = function(e){
        // let listItem = FakeSeL.querySelector('li:first-child');
        let listItem = FakeSeL.querySelector('li #dis');
        // let newItem = document.createElement('li');
        // newItem.innerHTML += c;
        var test =  listItem.innerHTML.replace(listItem.innerHTML,c.innerHTML);
        listItem.innerHTML = " ";
        listItem.innerHTML = test;
        console.log(test);
        getSelected.forEach(sel=> {
            if(test == sel.innerHTML)
            {
                sel.selected = 'selected';
            }
        })
        // let dis = FakeSeL.querySelector('.selected-list li a span');
        // if(dis.innerHTML != c.querySelector('span').innerHTML){
        //     // dis.innerHTML = " ";
        //     console.log('test');
        // }
        // dis.innerHTML += c.innerHTML;
        // listItem.parentNode.replaceChild(listItem,newItem);
        // console.log(c.innerHTML);
        // listItem.replaceWith(newItem);
    }
})
// chose.onclick = function(e){
//     // let cont = chose.value;
//     // let dis = Array.from(chose);
//     // chose.forEach(c=> {
//     //     console.log(c.innerHTML);
//     // })    
//     chose.forEach(c => {console.log('test');})
    
// }



