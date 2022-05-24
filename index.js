var id = document.getElementById('txtID');
var Name = document.getElementById('txtName');

function ktraId(){
    var kt = /^[1-2][0-9]{7,}$/;
    var mes = document.getElementById('mes-ID');
    if(id.value == ''){
        mes.innerText = 'Đang trống !';
        return false;
    }
    var kt2 = /^[1-2]/
    if(!kt2.test(id.value)){
        mes.innerText = 'Bắt đầu bằng 1 và 2 !';
        return false;
    }
    if(!kt.test(id.value)){
        mes.innerText = 'ID gồm có 8 số !'
        return false;
    }else{
        mes.innerText = ''
        return true;
    }
}

function ktraName(){
    var kt = /^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){1,}$/;
    var mes = document.getElementById('mes-Name');
    if(Name.value == ''){
        mes.innerText = 'Đang trống !';
        return false;
    }
    if(!kt.test(Name.value)){
        mes.innerText = 'Họ tên cần viết hoa chữ cái đầu và không dấu !'
        return false;
    }else{
        mes.innerText = ''
        return true;
    }
}

function User(stt,id,name){
    this.stt = stt;
    this.id = id;
    this.name = name;
    this.addTable = function(){
        return `<tr><td>${stt}</td><td>${id}</td><td>${name}</td></tr>`
    }
}

var chuoi ='';
var stt =0;
function addTableHTML(){
    var user = new User(stt,id.value,Name.value);
    stt++;
    chuoi += user.addTable();
    
    document.getElementById('addUser').innerHTML = chuoi;
}

function ktraAdd(){
    ktraId(); ktraName();
    var a = document.getElementById('saveValue');
    if(ktraId() && ktraName()){
        addTableHTML();
        a.setAttribute("data-dismiss",'modal') ;
        console.log(a);
    }else{
        a.removeAttribute("data-dismiss",'modal');
        console.log(a);   
    }
}