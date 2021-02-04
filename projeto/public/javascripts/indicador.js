window.onload = async function(){
    
    try {
        let ind = await $.ajax({
            url: "http://localhost:3001/api/camas/ind",
            method: "get",
            dataType: "json"
        });
        document.getElementById("bed").innerHTML = ind.data[0].count1;
        document.getElementById("beddisp").innerHTML = ind.data[0].count2;
        document.getElementById("bedocup").innerHTML = ind.data[0].count3;
    } catch (err) {
        console.log(err);
        let mainElem = document.getElementById("main");
        if (err.status == 404)
            mainElem.innerHTML = 
            "<h1>"+err.responseJSON.msg+"</h1>"+
            "<h2>Informação não encontrada</h2>";
        else mainElem.innnerHTML = 
        "<h1>Server problems, please try later</h1>";
    }


    try {
        let ind = await $.ajax({
            url: "http://localhost:3001/api/pacientes/ind",
            method: "get",
            dataType: "json"
        });
        console.log(ind);
        document.getElementById("pacalt").innerHTML = ind.data[0].count1;
        document.getElementById("pacest").innerHTML = ind.data[0].count2;
        document.getElementById("pacgra").innerHTML = ind.data[0].count3;
    } catch (err) {
        console.log(err);
        let mainElem = document.getElementById("main");
        if (err.status == 404)
            mainElem.innerHTML = 
            "<h1>"+err.responseJSON.msg+"</h1>"+
            "<h2>Informação não encontrada</h2>";
        else mainElem.innnerHTML = 
        "<h1>Server problems, please try later</h1>";
    }




}









