function modalOpen(name){
    alert(name);
}
function lang_change(type){
    if(type === "en"){
        $('.ko_lang').hide();
        $('.ko_lang_btn').removeClass('active');
        $('.en_lang').show();
        $('.en_lang_btn').addClass('active');
    }else{
        $('.en_lang').hide();
        $('.en_lang_btn').removeClass('active');
        $('.ko_lang').show();
        $('.ko_lang_btn').addClass('active');


    }
}
//url복사
function fn_copy() {
    var url = document.getElementById('copyMail');
    url.select();
    document.execCommand('copy');
}
