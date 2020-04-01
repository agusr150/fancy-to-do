function todoshow(){
    console.log('masuk todoshow')
    let token= localStorage.getItem('token')
    $.ajax({
        type: "GET", 
        url: "http://localhost:3000/todos", 
        headers: {token: token},
        success: function(result){
            console.log(result)
            $(`#error`).empty()
            $(`#login`).hide()
            $(`#usertodo`).append(`Hi ${result.user}, welcome to Fancy To-Do Application. <br> To create new task, please click add todo`)
            for(let i=0; i<result.data.length; i++){
                //format status
                let status = ''
                if(result.data[i].status === true){
                    status = 'done'
                } else {
                    status = 'in progress'
                }
                //format date
                console.log(result.data[i].due_date)
                let tanggal = result.data[i].due_date
                String(tanggal)
                let date= tanggal.substring(0,10)
                console.log(date)
                $(`#list-todos`).append(`
                <tr>
                    <td>${result.data[i].title}</td>
                    <td>${result.data[i].description}</td>
                    <td>${status}</td>
                    <td>${date}</td>
                    <td>
                        <button type="button" onclick=edit(${result.data[i].id})  class="btn btn-success" id="btn-edit">Edit</button>
                        <button type="button" onclick=deltodo(${result.data[i].id}) class="btn btn-danger" id="btn-delete">Delete</button>
                    </td>
                </tr>
                `)
            }
            
        },
        error: function(err){
            console.log(err)
            $(`#error`).empty()
            $(`#error`).append(`Error : ${JSON.stringify(err.responseJSON)}`)
        }
    })
}