function modalOpen(name){
    alert(name);
}
function lang_change(type){
    if(type === "en"){
        $('.ko_lang').hide();
        $('.en_lang').show();
    }else{
        $('.en_lang').hide();
        $('.ko_lang').show();
    }
}
//url복사
function fn_copy() {
    var url = document.getElementById('copyMail');
    url.select();
    document.execCommand('copy');
}
