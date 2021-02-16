var pool = require("../connection");
module.exports.getAllEstados = async function() {
    try {
    const sql = 'SELECT ala_id, cama_id, pac_estado FROM ala a INNER JOIN cama c ON a.ala_id = c.cama_ala_id INNER JOIN paciente p ON c.cama_pac_id = pac_id';
    const estados = await pool.query(sql);
    console.log(sql);
    return {status:200, data:estados};;
    } catch (err) {
    console.log(err);
    return err;
    }
   }


module.exports.getAllOcupadas = async function() {
    try {
    const sql = 'SELECT distinct (SELECT COUNT(*) FROM cama  where cama_pac_id > 0 AND cama_ala_id = 1) AS count1, (SELECT COUNT(*) FROM cama  where cama_pac_id > 0 AND cama_ala_id = 2) AS count2, (SELECT COUNT(*) FROM cama  where cama_pac_id > 0 AND cama_ala_id = 3) AS count3, (SELECT COUNT(*) FROM cama  where cama_pac_id > 0 AND cama_ala_id = 4) AS count4;';
    const ocupadas = await pool.query(sql);
    console.log(sql);
    return {status:200, data:ocupadas};;
    } catch (err) {
    console.log(err);
    return err;
    }
   }


