import { Router } from "express";

import {
    obtenerVehiculos,
    obtenerVehiculo,
    crearvehiculo,
    borrarVehiculo,
    actualizarVehiculo
} from "./vehiculo.controller.js";

const router = Router();

// Consultar todos los estudiantes
router.get("/", obtenerVehiculos);

// Consultar un estudiante por ID
router.get("/:id", obtenerVehiculo);

// Registrar un estudiante
router.post("/", crearvehiculo);

// Eliminar un estudiante
router.delete("/:id", borrarVehiculo);

// Actualizar un estudiante
router.put("/:id", actualizarVehiculo);

export default router;