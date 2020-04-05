function todoshow(){
    console.log('masuk todoshow')
    $(`#usertodo`).empty()
    $(`#list-todos`).empty()
    let token= localStorage.getItem('token')
    $.ajax({
        type: "GET", 
        url: "http://localhost:3000/todos", 
        headers: {token: token},
        success: function(result){
            console.log(result)
            $(`#error`).empty()
            $(`#login`).hide()
            $(`#register`).hide()
            $(`#usertodo`).append(`Hi ${result.user}, welcome to Fancy To-Do Application. To create a new task, please click add task!`)
            for(let i=0; i<result.data.length; i++){
                //format status
                let status = ''
                if(result.data[i].status === true){
                    status = 'done'
                    warna = 'blue'
                } else {
                    status = 'in progress'
                    warna = 'red'
                }
                //check valid due_date
                let a = new Date(result.data[i].due_date)
                let b = new Date()
                let c = new Date('2020-04-11T00:00:00.000Z') - new Date('2020-04-09T00:00:00.000Z') //tow days
                let d = (a-b) //time from not to due_date
                if (a<b && status==='in progress'){
                    back='lightcoral'
                } else if (d<c && status==='in progress'){
                    back='yellow'
                } else if (d>=c && status==='in progress'){
                    back='lightgreen'
                } else {
                    back='cyan'
                }

                //format date
                let tanggal = result.data[i].due_date
                String(tanggal)
                let date= tanggal.substring(0,10)
                $(`#list-todos`).append(`
                <tr style="background-color:${back}">
                    <td style="font-weight: bold;">${result.data[i].title}</td>
                    <td>${result.data[i].description}</td>
                    <td style="color:${warna}">${status}</td>
                    <td>${date}</td>
                    <td>
                        <button type="button" onclick=edit(${result.data[i].id}) class="btn btn-primary" data-toggle="modal" data-target="#modalEdit" data-backdrop="static" data-keyboard="false">
                            Edit
                        </button>
                        <button type="button" onclick=delform(${result.data[i].id}) class="btn btn-danger" data-toggle="modal" data-target="#modalDelete" data-backdrop="static" data-keyboard="false">
                            Delete
                        </button>
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