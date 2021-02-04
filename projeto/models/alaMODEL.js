var pool = require("../connection");
module.exports.getAllAlas = async function() {
 try {
 const sql = 'SELECT * FROM ala';
 const alas = await pool.query(sql);
 console.log(sql);
 return alas;
 } catch (err) {
 console.log(err);
 return err;
 }
}