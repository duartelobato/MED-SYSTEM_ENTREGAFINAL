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


    try {
        let ocupadas = await $.ajax({
            url: "http://localhost:3001/api/alas/ocupadas",
            method: "get",
            dataType: "json"
        });
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Alas"
        },
        axisY: {
            title: "Nº de pacientes",
            maximum: 5,
            minimum: 0,
            interval: 1
        },
        data: [{
            color: "lightblue",
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "Número de pacientes/ala",
            dataPoints: [                
                { y: ocupadas[0].count1, label: "Neurologia" },
                { y: ocupadas[0].count2, label: "COVID" },
                { y: ocupadas[0].count3, label: "Urologia" },
                { y: ocupadas[0].count4, label: "Dermatologia" }
            ]  
        }]  
         
    });
    chart.render();
    } catch (err) {
        console.log(err);


}

}

