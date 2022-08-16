document.getElementById('btnAdd').addEventListener('click', addList);
document.getElementById('btnDelAll').addEventListener('click',delAllEle);
document.getElementById('btnDelLast').addEventListener('click',delLastEle);
document.getElementById('DeleteSel').addEventListener('click',delSelected);
//getElementById 선택된 요소의 특성 속성의 값을 가져온다.



function addList()  {
    var contents = document.querySelector('.text-basic');
    //querySelector는 css 선택자로 요소를 선택하게 해준다.
    if(!contents.value){
        alert('내용을 입력해주세요');
        contents.focus();
        return false;
    }

    var tr = document.createElement('tr');
    var input = document.createElement('inpput');
    input.setAttribute('type','checkbox');
    input.setAttribute('class','btn-chk');

    var td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);

    var td02 = document.createElement('td');
    td02.innerHTML = contents.value;
    tr.appendChild(td02);

    document.getElementById('listBody').appendChild(tr);
    contents.value ='';
    contents.focus();
}

function delAllEle(){
    var list = document.getElementById('listBody');
    var listChild = list.children;
    for(var i=0; i<listChild.length;i++){
        list.removeChild(listChild[i])
        i--;
    }
}

function delLastEle() {
    var body = document.getElementById('listBody');
    var list = document.querySelectorAll('#listBody > tr');
    if(list.length >0){
        var liLen = list.length-1;
        body.removeChild(list[liLen]);
    }else{
        alert('삭제할 항목이 없습니다.')
        return false;
    }
}

function delSelected() {
    var body = document.getElementById('listBody');
    var chkbox = document.querySelectorAll('#listBody .btn-chk');
    for(var i in chkbox){
        if(chkbox[i].nodeType == 1 && chkbox[i].checked == true){
            body.removeChild(chkbox[i].parentNode.parentNode)
        }
    }
}