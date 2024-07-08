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
      if (localStorage.TASK != null) {
        let datedata = JSON.parse(localStorage.TASK);
        TaskData = datedata.map((item) => ({
          ...item,
          date: new Date(item.date) // تحويل القيمة إلى كائن Date
        }));
      } else {
        TaskData = [];
      }

// first function create function
 function create(){
    let textContent =inputText.value;

    // create object
    let task = {
       textContent: textContent,
       status : true,
       date: new Date(),
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


//create TextCount
   let TextCount = document.createElement("P");
   TextCount.className = 'TextCount';
   TextCount.textContent=(`You Have (0) Task To Complete`);
   //inheart
   count.appendChild(TextCount);
//function CountTextContent to call it easly
   function CountTextContent(){
    TextCount.textContent=(`You Have (${tasksNum}) Task To Complete`);
}   


// start function showData
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

      let thedate = TaskData[i].date;
      console.log(thedate );
      let formattedDate = '';
    
      if (thedate) {
        let day = thedate.getDate();
        let month = thedate.getMonth() + 1; 
        let year = thedate.getFullYear();
        formattedDate = `${day}-${month}-${year}`;
      }
      console.log(thedate );

        content +=`
         <div id="taskContent" class="taskContent">
              <div class="X" id"x">
                   <div class="icon" onclick="toggleStatus(${i})"> 
                   <i class="${iconClass}"></i>
                   </div> 
                   <p id="${paragraph}">${TaskData[i].textContent}</p>
               </div>
                <div class="Y">
                <div class="icons">
                   <i onclick="edite('${i}','${paragraph}','${editId}')" id="${editId}" class="${editClass}"></i>
                   <i onclick="del(${i})" id="deleteid" class="fa-solid fa-trash"></i> 
                   </div>
                   <div class="date">${formattedDate}</div>
                </div>
                </div> 
             `
        }
        parenContent.innerHTML= content;


        //Update value the (tasksNum)
        tasksNum -= incompleteTasks;
        CountTextContent()
     
}
    //Run showData 
     showData()



//toggleStatus onclick div class="icon"     
     function toggleStatus(i) {
      TaskData[i].status = !TaskData[i].status;
      localStorage.setItem('TASK', JSON.stringify(TaskData));
      showData();
}


// start function Edit data
function edite(i, paragraph, editId) {
  // call paragraph
  let p = document.getElementById(paragraph);
  let text = TaskData[i].textContent;

    // create input
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", text);
    input.style.background = "transparent";
    input.style.border = "3px solid black";
    input.style.padding = "2px 6px";
    input.style.width = "100%";
    input.focus();

    // replace paragraph by input
    p.parentNode.replaceChild(input, p);

    // call edit icon and create new icon
    let editIcon = document.getElementById(editId);
    let soliedIcon = document.createElement('i');
    soliedIcon.className = 'fa-solid fa-circle-check';

    // replace editIcon icon
    editIcon.parentNode.replaceChild(soliedIcon, editIcon);
    soliedIcon.addEventListener("click", function () {
      // toggle edit object status to change what is needed
      
      input.parentNode.replaceChild(p, input);
      TaskData[i].textContent =input.value;
      p.innerHTML = TaskData[i].textContent ;
      soliedIcon.parentNode.replaceChild(editIcon, soliedIcon);
      localStorage.setItem("TASK", JSON.stringify(TaskData));
    })
  } 

//create function Delete data 
      function deleteData(i) {
        TaskData.splice(i,1)
        localStorage.TASK=JSON.stringify(TaskData);
        showData()  
    }  

//function getpopup
     function PopupFUN() {
       popup.style.display='block';
    }

//run function Deletedata after show PopupFUN;
    function del(i){
      PopupFUN();
    //deleteData onclick-YES
      YESButton.addEventListener("click",function(){
        deleteData(i);
        CountTextContent();
        popup.style.display='none';
       });
    //dont deleteData onclick-No
      NOButton.addEventListener("click", function(){
      popup.style.display='none';
    });
  }

//Run functions
   function run() {
    showData()
    CountTextContent()
   }


    




    

 





 
 





 