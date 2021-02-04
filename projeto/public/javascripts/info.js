window.onload = async function(){

  let stateElem = document.getElementById("state");
  try {
      let distest = await $.ajax({
          url: "http://localhost:3001/api/pacientes/estados",
          method: "get",
          dataType: "json"
      });
      let html="";
      for(let state of distest)
          html += "<option value="+state.pac_estado+">"+
                   state.pac_estado+"</option>";
      stateElem.innerHTML = html;
  } catch (err) {
      // Error handling
  }
  
  
  document.getElementById("defaultOpen").click();
  // Get the element with id="defaultOpen" and click on it
}





async function loadAtrib(){
    let bedElem = document.getElementById("bed");
  try {
      let camas = await $.ajax({
          url: "http://localhost:3001/api/camas",
          method: "get",
          dataType: "json"
      });
      let html="";
      for(let bed of camas)
          html += "<option value="+bed.cama_id+">"+
                   bed.cama_id+"</option>";
      bedElem.innerHTML = html;
  } catch (err) {
      // Error handling
  }

  let pacientElem = document.getElementById("pacient");
  try {
      let pacientes = await $.ajax({
          url: "http://localhost:3001/api/pacientes",
          method: "get",
          dataType: "json"
      });
      let html="";
      for(let pacient of pacientes)
          html += "<option value="+pacient.pac_id+">"+
                   pacient.pac_id+"</option>";
      pacientElem.innerHTML = html;
      var table = document.getElementById("tableCama");
      for(var i = table.rows.length-1; i > 0; i--){
        table.deleteRow(i);
    }
      generateTableCama(table,pacientes);
  } catch (err) {
      console.log(err);
      // Error handling
  }
}




async function atributebed() {
    let res = document.getElementById("result2");
    let cama = {
        cama_id: parseInt(
            document.getElementById("bed").value),
        cama_pac_id: parseInt(
            document.getElementById("pacient").value)
        }
            try {
                let result2 = await $.ajax({
                    url:"http://localhost:3001/api/camas",
                    method:"put",
                    data: JSON.stringify(cama),
                    contentType: "application/json",
                    dataType:"json"
                });
             
                res.innerHTML = "Atribuição feita com sucesso!";
            } 
            
            catch(err) {
                console.log(err);
                   if (err.responseJSON) {
                       res.innerHTML = err.responseJSON.msg;
                   } else {
                       res.innerHTML = "Falha na atribuição de cama ao paciente";
                   }
            }
        loadAtrib();
}







function openTab(TabName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(TabName).style.display = "block";
    elmnt.style.backgroundColor = color; 
    if (TabName == "Gestao"){
        getTable()}
    else {
        var table = document.getElementById("tableGestao");
        for(var i = table.rows.length-1; i > 0; i--){
            table.deleteRow(i);
        }
        if(TabName=="Cama"){
            loadAtrib();
        }
    };
            
  }


  




  async function getTable() {
  try {
      let result = await $.ajax({
          url: "http://localhost:3001/api/camas/rows",
          method: "get",
          dataType: "json"
      });
      let table = document.getElementById("tableGestao");
      generateTable(table, result.data);
    } 
 catch (err) {
      // Error handling
}

}


  
function generateTable(table, data) {
    for (i = 0; i < data.length; i++){
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cellInstruction = row.insertCell(2);
        cell1.innerHTML = data[i].cama_id;
        cell2.innerHTML = data[i].pac_nome;
        cellInstruction.innerHTML = '<button class="Remover" type="button" onClick="removePacient(this)">';
    } 
}
  
  
  
  
async function removePacient(button) {
    let row = button.parentNode.parentNode;
    let table = document.getElementById("tableGestao");
    let cama_id = table.rows[row.rowIndex].cells.item(0).innerHTML;
    try {
        let result = await $.ajax({
            url:"http://localhost:3001/api/camas/"+cama_id,
            method:"put",
            contentType: "application/json",
            dataType:"json"
        });

        let result2 = await $.ajax({
            url:"http://localhost:3001/api/pacientes/"+result.data[0].pac_id,
            method:"delete",
            contentType: "application/json",
            dataType:"json"
        });
        
        document.getElementById("tableGestao").deleteRow(row.rowIndex);
     
       
    } 
    
    catch(err) {
        console.log(err);
    }

}


function generateTableCama(table, data) {
    for (i = 0; i < data.length; i++){
        var row = table.insertRow(-1);
        var id = row.insertCell(0);
        var nome = row.insertCell(1);
        var idade = row.insertCell(2);
        var estado = row.insertCell(3);
        var entrada = row.insertCell(4);
        id.innerHTML = data[i].pac_id;
        nome.innerHTML = data[i].pac_nome;
        idade.innerHTML = data[i].pac_idade;
        estado.innerHTML = data[i].pac_estado;
        entrada.innerHTML = data[i].pac_entrada;
    } 
}


