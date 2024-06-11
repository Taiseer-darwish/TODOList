let inputText = document.getElementById("addText");
addButton = document.getElementById("addButton");
parenContent = document.getElementById("parenContent");
count = document.getElementById("count");
popup = document.getElementById("popup");
YESButton = document.getElementById("YES");
NOButton = document.getElementById("NO");

let x ='create';
let y;
let z=0;
let w;
let tNotcomplet;



//console.log(inputText.value);

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

    if(textContent != ''){
      if(x === 'create'){
        //push data to array
        TaskData.push(task);
      }else{
        //edit elelment
       TaskData[y]=task;
       x ='create';
      }
    }     
    
    //localStorage s-1
    localStorage.setItem('TASK',JSON.stringify(TaskData));

    //cleardata
    inputText.value='';

   //Run functions
    showData()
    CountTextContent()

    
}

   //Run create function
    addButton.addEventListener("click",create);


   // showData
    function showData(){
    let content = '';
    w = TaskData.length -1;

    for(let i=1; i<TaskData.length; i++){

      let taskId = `task_${i}`;
      let editId = `edit_${i}`;
    
        content +=`
         <div id="taskContent" class="taskContent">
                <div class="X">
                <div>${i}</div>  
                  <i id="${taskId}" onclick="rightMatk('${taskId}', '${editId}')" class="fa-regular fa-circle"></i>
                   <p id="textTask">${TaskData[i].textContent}</p>
               </div>
                <div class="Y">
                   <i onclick="edite(${i})" id="${editId}" class="fa-solid fa-pencil"></i>
                   <i onclick="del(${i})" id="deletei" class="fa-solid fa-trash"></i> 
                </div>
               </div>
             `
        }

      parenContent.innerHTML= content;
}
    //Run showData 
     showData()

      //Edite data
      function edite(i) {
        inputText.value=TaskData[i].textContent;
        y=i;
        x='edite';
    }

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


   // ** function rightMatk **
    function rightMatk(taskId, editId) {

  let markIcon = document.getElementById(taskId);
  let soliedIcon = document.createElement('i');
  soliedIcon.className = 'fa-solid fa-circle-check';

  //replace markIcon icon by solid icon
  markIcon.parentNode.replaceChild(soliedIcon, markIcon);
  z+=1;
  tNotcomplet= w - z;
  TextCount.textContent = `You Have Task (${tNotcomplet}) To Complete`;

  // remove edit icon when complete task
  removeEdite();

  function removeEdite() {
    let rEdite = document.getElementById(editId);
    rEdite.style.display = 'none';
  }

  function jj() {
    //replace solid icon by markIcon icon
    soliedIcon.parentNode.replaceChild(markIcon, soliedIcon);

    //show edit icon 
    let rEdite = document.getElementById(editId);
    rEdite.style.display = 'block';
    
  }
  //run function when click on solied icon
  soliedIcon.addEventListener("click", function () {
    jj();
    z=z-1;
    tNotcomplet= w - z;
    TextCount.textContent = `You Have Task (${tNotcomplet}) To Complete`;
  });
 
}
// end function rightmark--------------------------------


   //create TextCount
   let TextCount = document.createElement("P");
   TextCount.className = 'TextCount';
   //function textCount
   function CountTextContent(){
    TextCount.textContent=(`You Have Task (${w}) To Complete`);
}   
   //run 
   CountTextContent();
   //inheart
   count.appendChild(TextCount);








    

 





 