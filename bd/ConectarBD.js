class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async ConectarMySql(){
      try {
        this.conexion=await this.mysql.createConnection({
            host: process.env.HOSTMYSQL,
            user: process.env.USERMYSQL,
            password: process.env.PASSWORDMYSQL,
            database: process.env.DATABASEMYSQL,
            port: process.env.PORTMYSQL
        });
        console.log("Conexión creada en MySql");
        
      } catch (error) {
        console.error("Error al conectar con MySql" +error);
      }
    }
    async cerrarConeccion(){
      try {
        await this.conexion;
        console.log("Desconeción de MySql");
      } catch (error) {
        console.error("Error al desconectar de MySql" +error);
      }
    }
}
module.exports=ConectarBD;