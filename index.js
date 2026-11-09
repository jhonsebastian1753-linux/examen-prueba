import express from "express";
import cors from "cors";
import vehiculosRoutes from "./src/modules/vehiculos/vehiculo.routes.js";

const app = express();
const PORT = 4100;

app.use(express.json());
app.use(cors());
app.use("/vehiculos",vehiculosRoutes);

app.get("/", (req, res) => {
    res.send("en funcionamiento");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});