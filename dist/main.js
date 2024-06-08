let inputText = document.getElementById("addText");
addButton = document.getElementById("addButton");
parenContent = document.getElementById("parenContent");
taskContent = document.getElementById("taskContent");
mark = document.getElementById("mark");
textTask = document.getElementById("textTask");
edite = document.getElementById("edite");
deletei = document.getElementById("deletei");

console.log(inputText.value);

  // first step put all data in array
     let TaskData;

   // handel the (localStorage s-2) to save data when reload
      if(localStorage.TASK != null){
          TaskData = JSON.parse(localStorage.TASK)
      }else{
        TaskData=[];
      }

   // first function create function
   function create(){
    let textContent =inputText.value;

    // createb object
    let task = { textContent: textContent };

    //push data to array
    TaskData.push(task);

    //localStorage s-1
    localStorage.setItem('TASK',JSON.stringify(TaskData));

    //cleardata
    inputText.value='';

   //Run functions
    showData()
}

   //Run create function
    addButton.addEventListener("click",create);


   // showData
    function showData(){
    let content = '';
    for(let i=0; i<TaskData.length; i++){

        content +=`
         <div id="taskContent" class="taskContent">
                <div class="X">
                   <i  onclick="rightMatk()"  id="mark"  class="fa-regular fa-circle"></ii9i9i9i9i9i9i9kll></i>
                   <p id="textTask">${TaskData[i].textContent}</p>
               </div>
                <div class="Y">
                   <i onclick="edite(${i})" id="edite" class="fa-solid fa-pencil"></i>
                   <i onclick="deleteData(${i})" id="deletei" class="fa-solid fa-trash"></i> 
                </div>
               </div>
             `
        }
      parenContent.innerHTML= content;
}
    //Run showData 
     showData()

      //Delete data
      function deleteData(i) {
        TaskData.splice(i,1)
        localStorage.TASK=JSON.stringify(TaskData);
        showData()
    }

      //Edite data
      function edite(i) {
        inputText.value=TaskData[i].textContent;
    }

     //right matk
     function rightMatk(){
        let mark = document.getElementById("mark");
        mark.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }




 