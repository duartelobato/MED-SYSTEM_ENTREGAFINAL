
window.onload = async function(){
    
   
    try {
        let estados = await $.ajax({
            url: "http://localhost:3001/api/estados",
            method: "get",
            dataType: "json"
        });
        
        let id;
        for (i=0;i<estados.length;i++){
            switch(estados[i].pac_estado){
                case 'nada':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'lightblue';
                    break;
                case 'ALTA':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'green';
                    break;
                case 'ESTAVEL':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'yellow';
                    break;  
                case 'GRAVE':
                    id = i+1;
                    document.getElementById(id.toString()).style.backgroundColor = 'red';
                    break;
                default:
                    console.log('error in getting state'); 
            }
         
        }

      
    } catch(err) {
        console.log(err);
        
    }



    
    



       
}





function getPopup(element){
    var content = element.nextElementSibling;
    if (element.style.backgroundColor == 'lightblue'){
        return;
    } else {
        if (content.style.display === "none") {
            getFicha(element.id);
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }     
    }
    
    
}


function closePopup(element){
    
    while(element.className!="hover_bkgr_fricc"){
        console.log(element);    
        element = element.parentElement;
         
    }
    var content = element.previousElementSibling;
    getPopup(content);
}



async function getFicha(cama_id) {
   
    try {
        let ficha = await $.ajax({
            url:"http://localhost:3001/api/pacientes/"+cama_id,
            method:"get",
            dataType:"json"
        });
        document.getElementById("name"+cama_id).innerHTML = ficha.data[0].pac_nome;
        document.getElementById("cama"+cama_id).innerHTML = cama_id;
        document.getElementById("pacient"+cama_id).innerHTML = ficha.data[0].pac_id;
        document.getElementById("age"+cama_id).innerHTML = ficha.data[0].pac_idade;
        document.getElementById("height"+cama_id).innerHTML = ficha.data[0].pac_altura;
        document.getElementById("weight"+cama_id).innerHTML = ficha.data[0].pac_peso;
        document.getElementById("disease"+cama_id).innerHTML = ficha.data[0].pac_doenca;
        document.getElementById("date"+cama_id).innerHTML = ficha.data[0].pac_entrada;
        document.getElementById("state"+cama_id).innerHTML = ficha.data[0].pac_estado;
    }
    catch(err) {
        console.log(err);
        if (err.status == 404)
            mainElem.innerHTML = 
            "<h1>"+err.responseJSON.msg+"</h1>"+
            "<h2>Please select an existing product</h2>";
        else mainElem.innerHTML = 
        "<h1>Server problems, please try later</h1>";


        //error processing
    }
}