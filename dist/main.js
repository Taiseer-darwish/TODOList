let inputText = document.getElementById("addText");
addButton = document.getElementById("addButton");
parenContent = document.getElementById("parenContent");
popup = document.getElementById("popup");
YESButton = document.getElementById("YES");
NOButton = document.getElementById("NO");

let x ='create';
let y;


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
    
}

   //Run create function
    addButton.addEventListener("click",create);


   // showData
    function showData(){
    let content = '';
    for(let i=1; i<TaskData.length; i++){

      let taskId = `task_${i}`;
       //let iconId = `icon2_${i}`;
       //<i id="${iconId}" class="fa-solid fa-circle-check"></i line 69

        content +=`
         <div id="taskContent" class="taskContent">
                <div class="X">
                  <i id="${taskId}" onclick="rightMatk('${taskId}')" class="fa-regular fa-circle"></i>
                   <p id="textTask">${TaskData[i].textContent}</p>
               </div>
                <div class="Y">
                   <i onclick="edite(${i})" id="edite" class="fa-solid fa-pencil"></i>
                   <i onclick="PopupFUN()" id="deletei" class="fa-solid fa-trash"></i> 
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

     //Delete data 
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
     //deleteData onclick-No
     NOButton.addEventListener("click", function(){
       popup.style.display='none';
     });

     YESButton.addEventListener("click",function(){
      deleteData(y);
        popup.style.display='none';
     });


     // first way
    // function rightMatk(taskId) {
    //   let mark = document.getElementById(taskId);
    //   let newIcon = document.getElementById(iconId);
    
    //   mark.style.display = 'none';
    //   newIcon.style.display = 'block';
    // }



    function rightMatk(taskId) {
      let mark = document.getElementById(taskId);
      let newIcon = document.createElement('i');
      newIcon.className = 'fa-solid fa-circle-check';
      
      mark.parentNode.replaceChild(newIcon, mark);
      
      removeEdite()
      function removeEdite() {
        let rEdite = document.getElementById("edite");
        rEdite.style.display = 'none';
      }
      
      function jj() {
       // mark.parentNode.replaceChild(mark, newIcon);
        let rEdite = document.getElementById("edite");
        rEdite.style.display = 'block';
      }
      
      newIcon.addEventListener("click", function () {
        jj();
      });
    }






















    //  function rightMatk(taskId) {
    //   let mark = document.getElementById(taskId);
    //   let newIcon = document.createElement('i');
    //   newIcon.className = 'fa-solid fa-circle-check';
      
    //   mark.parentNode.replaceChild(newIcon, mark);
      


    //     removeEdite()
    // function removeEdite(){
    //   let rEdite = document.getElementById("edite");
    //   rEdite.style.display = 'none';

    //   }
     

    //   function jj(){
    //   mark.parentNode.replaceChild( mark,newIcon);
    //   rEdite.style.display = 'block';

    //   }
    //   newIcon.addEventListener("click",function(){
    //     jj();
      
    //    });

    // }

 





 