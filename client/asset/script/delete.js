function delform(id){
    console.log('masuk del')
    let token= localStorage.getItem('token')
    $.ajax({
        type: "GET", 
        url: `https://boiling-taiga-85460.herokuapp.com/todos/${id}`, 
        headers: {token: token},
        success: function(result){
            console.log(result)
            let kata=''
            if (result.data.status === true){
                kata = `
                <h5 style="font-weight:bold; background-color:lightblue">Congratulation, you completed this task!</h5><br>
                <p>You can delete this task peacefully</p>
                `
            } else {
                kata = `
                <h5 style="font-weight:bold; background-color:red">This task is not completed yet!</h5><br>
                <p>Are you sure to delete this task?!?</p>
                `
            }
            $(`#errormodaldelete`).empty()
            $(`#delete-form`).empty()
            $(`#delete-form`).append(`
                <input type="hidden" id="id-edit" value="${result.data.id}">
                <div>
                    ${kata}
                </div>
                <button type="submit" onclick=deltodo(${result.data.id}) class="btn btn-danger mb-3">Delete</button><br>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> 
            `)
        },
        error: function(err){
            console.log(err)
            $(`#errormodaldelete`).empty()
            $(`#errormodaldelete`).append(`Error : ${err.responseJSON}`)
        }
    })
}


function deltodo(id){
    console.log('masuk delete')
    let token= localStorage.getItem('token')
    $.ajax({
        type: "DELETE", 
        url: `https://boiling-taiga-85460.herokuapp.com/todos/${id}`, 
        headers: {token: token},
        success: function(result){
            console.log(result)
            $(`#errormodaldelete`).empty()
            $(`#modalDelete`).modal('hide')
            $(`#todos`).show()
            todoshow()
        },
        error: function(err){
            console.log(err)
            $(`#errormodaldelete`).empty()
            $(`#errormodaldelete`).append(`Error : ${err.responseJSON}`)
        }
    })
}