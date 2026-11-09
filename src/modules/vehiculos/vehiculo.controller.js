import { json } from "express";
import {VehiculoModel} from "./vehiculo.model.js"

// obtener todos los estudintes
export const obtenerVehiculos = async (req,res) => {
    try
    {
        const result = await VehiculoModel.findAll();
        res.json({result});
    }
    catch (error)
    {
        res.status(500).json({
            error: `error al listar los vehiculos: ${error}`,

        });
    }
};

// obtener un estudiante por id
export const obtenerVehiculo = async (req,res) => {
    try {
        const result = await VehiculoModel.findById(req.params.id);
        res.json({result});
    } catch (error) {
        res.status(500).json({
            error: `error al consultar estudiante: ${error}`,
        });
    }
};

// crear o registrar un producto
export const crearvehiculo = async (req, res) => {

    if (!req.body || !req.body.placa || !req.body.marca) {
        return res.status(400).json({
            error: "Debes enviar los datos del vehciculo",
        });
    }

    const datos = {
        placa: req.body.placa,
        marca: req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio,
        color: req.body.color,
        kilometraje: req.body.kilometraje,
        propietario: req.body.propietario,
        telefono_propietario: req.body.telefono_propietario,
        estado: req.body.estado,
        fecha_ingreso: req.body.fecha_ingreso,
    };

    try {
        const result = await VehiculoModel.create(datos);
        res.json({ result });
    }
    catch (error) {
        res.status(500).json({
            error: `Error al registrar el vehiculo: ${error}`,
        });
    }
};

// eliminar un estudiante
export const borrarVehiculo = async (req, res) => {
    try {
        const result = await VehiculoModel.delete(req.params.id);
        res.json({ result });
    }
    catch (error) {
        res.status(500).json({
            error: `Error al eliminar un vehiculo: ${error}`,
        });
    }
};

// Actualizar un producto
export const actualizarVehiculo = async (req, res) => {
    try {
        const result = await VehiculoModel.update(
            req.params.id,
            req.body
        );

        res.json({ result });
    }
    catch (error) {
        res.status(500).json({
            error: `Error al actualizar el vehiculo: ${error}`,
        });
    }
};