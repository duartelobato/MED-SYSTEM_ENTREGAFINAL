async function addpacient() {
    let res = document.getElementById("result");
    let paciente = {
        pac_nome: document.getElementById("name").value,
        pac_idade: parseInt(
            document.getElementById("age").value),
        pac_altura: parseFloat(
            document.getElementById("height").value),
        pac_peso: parseFloat(
            document.getElementById("weight").value),
        pac_doenca: document.getElementById("disease").value,
        pac_entrada: document.getElementById("date").value,
        pac_estado: document.getElementById("state").value
        }
    
    
    try {
        let result = await $.ajax({
            url:"http://localhost:3001/api/pacientes",
            method:"post",
            data: JSON.stringify(paciente),
            contentType: "application/json",
            dataType:"json"
        });
     console.log(result.status);
     if(result.status==200){
        res.innerHTML = "Ficha médica criada com sucesso!";
     } else {
        res.innerHTML = result.data.msg;
    }
        
    } 
    
    catch(err) {
        console.log(err);
           if (err.responseJSON) {
               res.innerHTML = err.responseJSON.msg;
           } else {
               res.innerHTML = result.data.msg;
           }
    }

}


