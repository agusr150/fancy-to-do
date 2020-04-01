$(document).ready(function(){
    if(localStorage.getItem(`token`)) {
        $(`#error`).empty()
        $(`#todos`).show()
        listShow()
    } else {
        $(`#error`).empty()
        $(`#login`).show()
    }
})

$(`#btn-register`).click(function(){
    $(`#error`).empty()
    $(`#login`).hide()
    $(`#register`).show()
})

$(`#btn-login`).click(function(){
    $(`#error`).empty()
    $(`#register`).hide()
    $(`#login`).show()
})