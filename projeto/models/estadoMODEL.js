var pool = require("../connection");
module.exports.getAllEstados = async function() {
 try {
 const sql = 'SELECT ala_id, cama_id, pac_estado FROM ala a INNER JOIN cama c ON a.ala_id = c.cama_ala_id INNER JOIN paciente p ON c.cama_pac_id = pac_id';
 const estados = await pool.query(sql);
 console.log(sql);
 return estados;
 } catch (err) {
 console.log(err);
 return err;
 }
}