// importamos de config/dbconexion.js
import pool from "../../config/dbconexion.js";

// crear la funcion para hacer la funcion y traer todo
export const VehiculoModel = {
    findAll: async () => {
        const sql = "SELECT * FROM vehiculos ORDER BY placa";
        const [rows] = await pool.query(sql);
        return rows;
    },

    // buscar por id
    findById: async (id_vehiculo) => {
        const sql = "SELECT * FROM vehiculos WHERE id_vehiculo = ?";
        const [rows] = await pool.query(sql,[id_vehiculo]);
        return rows;
    },

    // crear o registrar
    create: async (data) => {
        const sql = "INSERT INTO vehiculos SET ?";
        const [rows] = await pool.query(sql,[data]);
        return rows;
    },

    // actualizar un producto
    update: async (id_vehiculo,data) => {
        const sql = "UPDATE vehiculos SET ? WHERE id_vehiculo = ?";
        const [rows] = await pool.query(sql,[data,id_vehiculo]);
        return rows;
    },

    // eliminar un producto
    delete: async (id_vehiculo) => {
        const sql = "DELETE FROM vehiculos WHERE id_vehiculo = ?";
        const [rows] = await pool.query(sql,[id_vehiculo]);
        return rows;
    }
}