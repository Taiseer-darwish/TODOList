let inputText = document.getElementById("addText");
addButton = document.getElementById("addButton");
parenContent = document.getElementById("parenContent");
count = document.getElementById("count");
popup = document.getElementById("popup");
YESButton = document.getElementById("YES");
NOButton = document.getElementById("NO");
let tasksNum;
let y;


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

    // create object
    let task = {
       textContent: textContent,
       status : true,
       edit: true,
       };

    if(textContent != ''){
        //push data to array
        TaskData.push(task);
    }     
    
    //localStorage s-1
    localStorage.setItem('TASK',JSON.stringify(TaskData));

    //cleardata
    inputText.value='';

   //Run functions
   run() 

}

   //Run create function
    addButton.addEventListener("click",create);


   // showData
    function showData(){
    let content = '';

    //the variable (tasksNum) = number of all tasks 
    tasksNum = TaskData.length;
    let incompleteTasks = 0;

    for(let i=0; i<TaskData.length; i++){

      let paragraph = `paragraph_${i}`;
      let editId = `edit_${i}`;
      let iconClass;
      let editClass;

      //Depending on the state of the object, the following is done
      if (TaskData[i].status) {
        iconClass = "fa-regular fa-circle";
        editClass = "fa-solid fa-pencil";
      } else {
        iconClass = "fa-solid fa-circle-check";
        editClass = "";
        //Add one to the number of tasks that were notcompleted
        incompleteTasks++;
      }  

        content +=`
         <div id="taskContent" class="taskContent">
                <div class="X">
                <div>${i+1}</div>
                   <div class="icon" onclick="toggleStatus(${i})"> 
                   <i class="${iconClass}"></i>
                   </div> 
                   <p id="${paragraph}">${TaskData[i].textContent}</p>
               </div>
                <div class="Y">
                   <i onclick="edite('${i}','${paragraph}','${editId}')" id="${editId}" class="${editClass}"></i>
                   <i onclick="del(${i})" id="deleteid" class="fa-solid fa-trash"></i> 
                </div>
               </div>
             `
        }

        //Update value the (tasksNum )
        tasksNum -= incompleteTasks;

       parenContent.innerHTML= content;
}
    //Run showData 
     showData()

     function toggleStatus(i) {
      TaskData[i].status = !TaskData[i].status;
      localStorage.setItem('TASK', JSON.stringify(TaskData));

      showData();
    }

      //function Edit data
      function edite(i,paragraph,editId) {
         
     //call paragraph 
     let p = document.getElementById(paragraph);
     let text = TaskData[i].textContent;

     if(TaskData[i].edit){

     //create input
     let input = document.createElement("input");
     input.setAttribute("type", "text");
     input.setAttribute("value", text);

     //replase paragraph by iput
     p.parentNode.replaceChild(input, p);

     //call edit icon and create new icon
     let editIcon = document.getElementById(editId);
     let soliedIcon = document.createElement('i');
     soliedIcon.className = 'fa-solid fa-circle-check';

     //replace editIcon icon 
     editIcon.parentNode.replaceChild(soliedIcon, editIcon);

      soliedIcon.addEventListener("click", function (i) {
        //toggle editobject status To change what is needed
        TaskData[i].edit= !TaskData[i].edit;
        input.parentNode.replaceChild(p,input);
        p.innerHTML = input.value;
        soliedIcon.parentNode.replaceChild(editIcon, soliedIcon);  
        localStorage.setItem("TASK", JSON.stringify(TaskData));
      })
    }}


     //function Delete data 
      function deleteData(i) {
        TaskData.splice(i,1)
        localStorage.TASK=JSON.stringify(TaskData);
        y=i;
        showData()
    }  
     //getpopup
     function PopupFUN() {
       popup.style.display='block';
    }

    function del(i){
      PopupFUN();
      y=i;
  }
     //deleteData onclick-No
     NOButton.addEventListener("click", function(){
       popup.style.display='none';
     });

     YESButton.addEventListener("click",function(){
      deleteData(y);
      CountTextContent();
      popup.style.display='none';
     });

// i dont need it -----------------------------------------------
//      function updateTasksCount() {
//       let incompleteTasks = 0;
 
//       for (let i = 0; i < TaskData.length; i++) {
//       if (!TaskData[i].status) {
//        incompleteTasks++;
//      }
//    }
 
//        tasksNum = incompleteTasks;
//        CountTextContent();
//  }
//----------------------------------------------------------------


   //create TextCount
   let TextCount = document.createElement("P");
   TextCount.className = 'TextCount';

   //function CountTextContent
   function CountTextContent(){
    TextCount.textContent=(`You Have (${tasksNum}) Task To Complete`);
}   
   //run 
   CountTextContent();
   //inheart
   count.appendChild(TextCount);

   //Run functions
   function run() {
    showData()
    CountTextContent()
   }
   




    




    

 





 
 





 