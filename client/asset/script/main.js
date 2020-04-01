$(document).ready(function(){
    let token = localStorage.getItem('token')
    console.log(token)
    if(token) {
        $(`#error`).empty()
        $(`#todos`).show()
        todoshow()
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

$(`#btn-add`).click(function(){
    $(`#error`).empty()
    $(`#todos`).hide()
    $(`#add`).show()
})

$(`#btn-cancel-add`).click(function(){
    $(`#error`).empty()
    $(`#add`).hide()
    $(`#todos`).show()
})

$(`#btn-cancel-edit`).click(function(){
    $(`#error`).empty()
    $(`#edit`).hide()
    $(`#todos`).show()
})
