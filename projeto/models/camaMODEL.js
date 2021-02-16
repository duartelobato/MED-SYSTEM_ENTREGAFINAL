var pool = require("../connection");
module.exports.getAllCamas = async function() {
    try {
    const sql = 'SELECT cama_id, ala_descricao FROM cama c INNER JOIN ala a ON c.cama_ala_id = a.ala_id WHERE c.cama_pac_id = 0';
    const camas = await pool.query(sql);
    console.log(sql);
    return {status:200, data:camas};;
    } catch (err) {
    console.log(err);
    return err;
    }
    }


module.exports.getAllRows = async function() {
    try {
    const sql = 'SELECT cama_id, pac_nome FROM cama c INNER JOIN paciente p ON cama_pac_id = pac_id AND cama_pac_id > 0 ORDER BY cama_id;';
    const rows = await pool.query(sql);
    console.log(sql);
    return {status:200, data:rows};
    } catch (err) {
    console.log(err);
    return err;
    }
    }




module.exports.getIndicador = async function() {
    try {
    const sql = 'SELECT DISTINCT (SELECT COUNT(*) FROM cama) AS count1, (SELECT COUNT(*) FROM cama  where cama_pac_id = 0) AS count2, (SELECT COUNT(*) FROM cama where cama_pac_id > 0) AS count3 FROM cama';
    const ind = await pool.query(sql);
    console.log(sql);
    return {status:200, data:ind};
    } catch (err) {
    console.log(err);
    return err;
    }
   }



module.exports.insertCama = async function(c) {
    try {
    const sql = 'UPDATE cama SET cama_pac_id = ? WHERE cama_id = ?';
    const result2 = await pool.query(sql,[c.cama_pac_id, c.cama_id]);
    console.log(sql);
    return {status:200, data:result2};
    } catch (err) {
    console.log(err);
    return err;
    }
   }


module.exports.putCama = async function(cama_id) {
    try {
    const sql = 'SELECT pac_id FROM paciente INNER JOIN cama ON pac_id = cama_pac_id WHERE cama_id = ?';
    const result = await pool.query(sql,[cama_id]);

    const sql2 = 'UPDATE cama SET cama_pac_id = 0 WHERE cama_id = ?';
    const result2 = await pool.query(sql2,[cama_id]);
    console.log(result);
    return {status:200, data:result};
    } catch (err) {
    console.log(err);
    return err;
    }
   }






