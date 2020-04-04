function edit(id){
    console.log('masuk edit')
    let token= localStorage.getItem('token')
    $.ajax({
        type: "GET", 
        url: `http://localhost:3000/todos/${id}`, 
        headers: {token: token},
        success: function(result){
            console.log(result)
            $(`#errormodaledit`).empty()
            //$(`#todos`).hide()
            $(`#edit-form`).empty()
            $(`#edit`).show()
            // format date
            console.log(result.data.due_date)
            let tanggal = result.data.due_date
            String(tanggal)
            let date= tanggal.substring(0,10)
            console.log(date)
            // format status
            let status1=''
            let status2=''
            if(result.data.status===false){
                status1 = 'selected'
            } else {
                status2 = 'selected'
            }
            $(`#edit-form`).append(`
                <input type="hidden" id="id-edit" value="${result.data.id}">
                <div class="form-group">
                    <label for="title-edit">Title</label>
                    <input type="text" class="form-control" id="title-edit" value="${result.data.title}">
                </div>
                <div class="form-group">
                    <label for="description-edit">Description</label>
                    <input type="text" class="form-control" id="description-edit" value="${result.data.description}">
                </div>
                <div class="form-group">
                    <label for="description-edit">Status</label>
                    <select class="custom-select" id="status-edit">
                        <option ${status1} value="false">In progress</option>
                        <option ${status2} value="true">Done</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="due_date-edit">Status</label>
                    <input type="date" class="form-control" id="due_date-edit" value="${date}">
                </div>
                <button type="submit" class="btn btn-primary mb-3">Save</button><br>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> 
            `)
        },
        error: function(err){
            console.log(err)
            $(`#errormodaledit`).empty()
            $(`#errormodaledit`).append(`Error : ${err.responseJSON}`)
        }
    })
}

$(`#edit-form`).submit(function (event){
    event.preventDefault()
    console.log('masuk edit')
    let token= localStorage.getItem('token')
    let id = $(`#id-edit`).val()
    console.log(id+"<<id")
    let newUpdate={}
    newUpdate.title = $(`#title-edit`).val()
    newUpdate.description= $(`#description-edit`).val()
    newUpdate.status = $(`#status-edit`).val()
    newUpdate.due_date = $(`#due_date-edit`).val()
    console.log(newUpdate)
    let a = new Date(newUpdate.due_date)
    let b = new Date()
    if (a<b && newUpdate.status==="false"){
        console.log('due date err')
        $(`#errormodaledit`).empty()
        $(`#errormodaledit`).append(`Your due date is expired and your task is not completed. Update your due date`)
    } else {
        $.ajax({
            type: "PUT", 
            url: `http://localhost:3000/todos/${id}`, 
            headers: {token: token},
            data: newUpdate,
            success: function(result){
                $(`#errormodal`).empty()
                $(`#modalEdit`).modal('hide')
                $(`#todos`).show()
                todoshow()
            },
            error: function(err){
                console.log(err.responseJSON)
                $(`#errormodaledit`).empty()
                $(`#errormodaledit`).append(`Error : ${err.responseJSON}`)
            }
        })
    }
})