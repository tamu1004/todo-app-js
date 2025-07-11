const humburger = document.getElementById('humburger-menu')
humburger.addEventListener('click',function(){
    humburger.classList.toggle('active')
})

const slide = document.getElementById('second-container')
    humburger.addEventListener('click',function(){
    slide.classList.toggle('active')
})

function ClickAdd(){
    const deadLine = document.getElementById('deadline')
    const InputDeadLine = deadline.value
    const TaskInput = document.getElementById("Tasktxt")
    const TaskText = TaskInput.value
    const CheckBox = document.createElement('button')
    const addBox = document.createElement('button')
    const ToDoContainer = document.getElementById('ToDo-container')
    const ToDoInfo = document.createElement('div')
    ToDoInfo.classList.add('ToDoInfo')
    const TaskBox = document.createElement('div')
    TaskBox.classList.add('TaskBox')
    const DeadLineBox = document.createElement('div')
    DeadLineBox.classList.add('DeadLineBox')
    const CompletedBox = document.createElement('div')
    CompletedBox.classList.add('CompletedBox')
    CheckBox.textContent = "完了"
    addBox.textContent = '追加'
    CheckBox.classList.add('delete-btn')
    addBox.classList.add('delete-btn')
    
    DeadLineBox.textContent = InputDeadLine
    TaskBox.textContent = TaskText
    // CompletedBox.appendChild(CheckBox)
    // ToDoInfo.append(TaskBox,DeadLineBox,CompletedBox)
    // ToDoContainer.appendChild(ToDoInfo)

    CheckBox.addEventListener('click',function(){
        ToDoInfo.remove()
    })

    addBox.addEventListener('click', function(){
        const slide = document.getElementById('second-container')
        slide.classList.toggle('active')
    })

    if(TaskText !== ''){
        TaskInput.value = ""  
        deadLine.value = ""
        CompletedBox.appendChild(CheckBox)
        ToDoInfo.append(TaskBox,DeadLineBox,CompletedBox)
        ToDoContainer.appendChild(ToDoInfo)
    }else{
        alert('やるべきことを追加してください')
        return;
    }
}

function Discovered(){
    const white = document.getElementById('white')
    const CreateForm = document.getElementById('CreateForm')
    CreateForm.style.display = "block"
    white.style.display = 'block'
}

function Canceled(){
    const CreateForm = document.getElementById('CreateForm')
    CreateForm.style.display = "none"
}

let listCount = 0
let buttonCount = 0
function CreateList(){
    listCount++
    buttonCount++
    const data_Id = listCount
    const CreateForm = document.getElementById('CreateForm')
    const Addfield = document.getElementById('Addfield')
    const white = document.getElementById('white')
    const AddText = document.getElementById('AddText')
    const SecondContainer = document.getElementById('second-container')
    const div = document.createElement('div')
    div.classList.add('buttonContainer')
    const button = document.createElement('button')
    const displayButton = document.createElement('button')
    button.classList.add('createdname')
    displayButton.classList.add('displaybutton')
    button.dataset.id = data_Id
    displayButton.dataset.id = data_Id
    button.textContent = (AddText.value)
    displayButton.textContent = '表示'
    const addListButton = document.createElement('button')
    addListButton.textContent = '追加'
    addListButton.classList.add('addlistbutton')
    addListButton.dataset.id = data_Id
    AddText.value = ''

    div.append(button,addListButton,displayButton)
    Addfield.appendChild(div)
    SecondContainer.appendChild(Addfield)

    white.style.display = 'none'
    CreateForm.style.display = 'none'

    const button_Id = buttonCount
    const humburgerMenu = document.getElementById('humburger-menu')
    const AddedToDoView = document.getElementById('AddedToDo-view')
    const ThirdContainer = document.createElement('div')
    const back = document.createElement('div')
    ThirdContainer.dataset.id = button_Id
    const BackButton = document.createElement('button')
    BackButton.classList.add('BackButton')
    ThirdContainer.classList.add('third-container')
    
    back.appendChild(BackButton)
    ThirdContainer.appendChild(back)
    AddedToDoView.appendChild(ThirdContainer)
    BackButton.textContent = "< back"

    if(AddedToDoView.style.display = 'none'){
        AddedToDoView.style.display = 'block'
        humburgerMenu.style.display = 'none'
    }else{
        AddedToDoView.style.display = 'none'
    }

    addListButton.addEventListener('click',function(){
        const TaskInput = document.getElementById("Tasktxt")
        document.querySelectorAll('.displaybutton').forEach(button => {
            button.addEventListener('click', function(){
                const targetList = button.getAttribute('data-id')
                document.querySelectorAll('.third-container').forEach(div =>{
                    div.style.display = 'none'
                    if(div.getAttribute('data-id') === targetList){
                        div.style.display = "block"
                        humburgerMenu.style.display = 'none'
                    }
                    else{
                        div.style.display = 'none'
                    }
                })
            })
        })
        
        
    })
    
    humburgerMenu.style.display = 'block'

    BackButton.addEventListener('click', function(){
        ThirdContainer.style.display = 'none'
        humburgerMenu.style.display = 'block'
    })
    
}



const AddList = document.getElementById('addListButton')
AddList.addEventListener('click',function(){
    const TaskInput = document.getElementById("Tasktxt")
    const TaskText = TaskInput.value
    const slide = document.getElementById('second-container')
    slide.classList.toggle('active')
    const humburger = document.getElementById('humburger-menu')
    humburger.classList.toggle('active')
    const humburgerMenu = document.getElementById('humburger-menu')

    document.querySelectorAll('.addlistbutton').forEach(button => {
        button.addEventListener('click', function(){
            const targetList = button.getAttribute('data-id')
            document.querySelectorAll('.third-container').forEach(div =>{
                 // div.style.display = 'none'
                if(div.getAttribute('data-id') === targetList && TaskInput.value !== ""){
                    const deadLine = document.getElementById('deadline')
                    const InputDeadLine = deadLine.value
                    const TaskInput = document.getElementById("Tasktxt")
                    const TaskText = TaskInput.value
                    const CheckBox = document.createElement('button')
                    const ToDoInfo = document.createElement('div')
                    ToDoInfo.classList.add('ToDoInfo')
                    const TaskBox = document.createElement('div')
                    TaskBox.classList.add('TaskBox')
                    const DeadLineBox = document.createElement('div')
                    DeadLineBox.classList.add('DeadLineBox')
                    const CompletedBox = document.createElement('div')
                    CompletedBox.classList.add('CompletedBox')
                    CheckBox.textContent = "完了"
                    CheckBox.classList.add('delete-btn')
                    DeadLineBox.textContent = InputDeadLine
                    TaskBox.textContent = TaskText
                    CompletedBox.appendChild(CheckBox)
                    ToDoInfo.append(TaskBox,DeadLineBox,CompletedBox) 
                    TaskInput.value = ""
                    deadLine.value = ""
                    div.appendChild(ToDoInfo)
                    alert(TaskText +'を追加しました')
                    div.style.display = "block"
                    humburgerMenu.style.display = 'none'
                    CheckBox.addEventListener('click',function(){
                        ToDoInfo.remove()
                    })
                }else{
                    alert('none')
                }
            })  

        })

    })
    
})


// function AddList(){
//     const slide = document.getElementById('second-container')
//     slide.classList.toggle('active')
//     const humburger = document.getElementById('humburger-menu')
//     humburger.classList.toggle('active')

//     // document.querySelectorAll('.createdname').forEach(button => {
//     //     button.addEventListener('click', function(){
//     //         const targetList = button.getAttribute('data-id')
//     //         document.querySelectorAll('.third-container').forEach(div =>{
//     //             // div.style.display = 'none'
//     //             if(div.getAttribute('data-id') === targetList){
//     //                 const deadLine = document.getElementById('deadline')
//     //                 const InputDeadLine = deadLine.value
//     //                 const TaskInput = document.getElementById("Tasktxt")
//     //                 const TaskText = TaskInput.value
//     //                 const CheckBox = document.createElement('button')
//     //                 const ToDoInfo = document.createElement('div')
//     //                 ToDoInfo.classList.add('ToDoInfo')
//     //                 const TaskBox = document.createElement('div')
//     //                 TaskBox.classList.add('TaskBox')
//     //                 const DeadLineBox = document.createElement('div')
//     //                 DeadLineBox.classList.add('DeadLineBox')
//     //                 const CompletedBox = document.createElement('div')
//     //                 CompletedBox.classList.add('CompletedBox')
//     //                 CheckBox.textContent = "完了"
//     //                 CheckBox.classList.add('delete-btn')
//     //                 DeadLineBox.textContent = InputDeadLine
//     //                 TaskBox.textContent = TaskText
//     //                 CompletedBox.appendChild(CheckBox)
//     //                 ToDoInfo.append(TaskBox,DeadLineBox,CompletedBox) 
//     //                 TaskInput.value = ""
//     //                 deadLine.value = ""
//     //                 div.appendChild(ToDoInfo)
//     //                 div.style.display = "block"
//     //             }
//     //             else{
//     //                 div.style.display = 'none'
//     //             }
//     //         })
//     //         // humburgerMenu.style.display = 'none'
//     //     })
//     // })



//     CheckBox.addEventListener('click',function(){
//         ToDoInfo.remove()
//     })
// }
aaaaaaaa
