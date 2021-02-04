var pool = require("../connection");

module.exports.getAllPacientes = async function() {
 try {
 const sql = 'SELECT * FROM paciente WHERE pac_id NOT IN (SELECT pac_id FROM paciente INNER JOIN cama ON pac_id = cama_pac_id) AND pac_id > 0;';
 const pacientes = await pool.query(sql);
 console.log(sql);
 return pacientes;
 } catch (err) {
 console.log(err);
 return err;
 }
}
 
function validateAtributes(p){
    if(p.pac_nome==null||p.pac_idade==null||p.pac_altura==null||p.pac_peso==null||p.pac_doenca==null||p.pac_entrada==null||p.pac_estado==null){
        return false;
    }
    return true;
}



module.exports.createPaciente = async function(p) {
    if(!validateAtributes(p)){
        return{status:400, data:{msg:"Erro ao inserir paciente, falta de dados!"}};
    };
    try {
        
    const sql = 'INSERT INTO paciente(pac_nome,pac_idade,pac_altura,pac_peso,pac_doenca,pac_entrada,pac_estado) values(?,?,?,?,?,?,?)';
    const result = await pool.query(sql,[p.pac_nome,p.pac_idade,p.pac_altura,p.pac_peso,p.pac_doenca,p.pac_entrada,p.pac_estado]);
    console.log(sql);
    return {status:200, data:result};
    } catch (err) {
    console.log(err);
    var result = "Erro no servidor!"
    return {status:500, data:result};
    }
   }

   module.exports.getAllDistest = async function() {
    try {
    const sql = 'SELECT DISTINCT pac_estado FROM paciente';
    const distest = await pool.query(sql);
    console.log(sql);
    return distest;
    } catch (err) {
    console.log(err);
    return err;
    }
   }  



   module.exports.getPaciente = async function(cama_id) {
    try {
    const sql = 'SELECT pac_id, pac_nome, pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado FROM cama c INNER JOIN paciente p ON c.cama_pac_id = pac_id WHERE cama_id = ?';
    const paciente = await pool.query(sql,[cama_id]);
    console.log(sql);
    return {status:200, data:paciente};
    } catch (err) {
    console.log(err);
    return err;
    }
    }


    module.exports.getIndicador = async function() {
        try {
        const sql = 'SELECT DISTINCT (SELECT COUNT(*) FROM paciente WHERE pac_estado = "ALTA") AS count1, (SELECT COUNT(*) FROM paciente WHERE pac_estado = "ESTÁVEL") AS count2, (SELECT COUNT(*) FROM paciente WHERE pac_estado = "GRAVE") AS count3 FROM paciente';
        const ind = await pool.query(sql);
        console.log(sql);
        return {status:200, data:ind};
        } catch (err) {
        console.log(err);
        return err;
        }
       }


       module.exports.deletePaciente = async function(pac_id) {
        try {
        const sql = 'DELETE FROM paciente WHERE pac_id = ?; ';
        const result = await pool.query(sql,[pac_id]);
        console.log(result)

        return {status:200, data:result};
        console.log(data.result)
        } catch (err) {
        console.log(err);
        return err;
        }
       }