function addMore() {

      document.getElementById('error').innerHTML="";
       let name=document.getElementById('name').value;
       if(name=='')
       {
          document.getElementById('error').innerHTML= "please enter value";
    }else{

      let newTask = document.getElementById("name").value
          let item = document.createTextNode(newTask)
          let newitem = document.createElement("li")
         newitem.appendChild(item)
    document.getElementById("box1").appendChild(newitem)
    document.getElementById("name").value="";
       }

      }


























