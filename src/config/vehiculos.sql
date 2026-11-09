-- phpMyAdmin SQL Dump
-- version 5.2.3-2.fc44
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-11-2026 a las 15:55:40
-- Versión del servidor: 8.4.10
-- Versión de PHP: 8.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id_vehiculo` int NOT NULL,
  `placa` varchar(45) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `anio` date NOT NULL,
  `color` varchar(45) NOT NULL,
  `kilometraje` int NOT NULL,
  `propietario` varchar(45) NOT NULL,
  `telefono_propietario` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `fecha_ingreso` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id_vehiculo`, `placa`, `marca`, `modelo`, `anio`, `color`, `kilometraje`, `propietario`, `telefono_propietario`, `estado`, `fecha_ingreso`) VALUES
(1, 'abc123', 'toyota', 'viejo', '2026-11-01', 'azul', 0, 'jhon', '3124634336', 'bueno', '2026-11-09'),
(2, 'abc123456', 'cybertron', 'nuevo', '2026-11-02', 'gris', 20, 'jh de la cruz', '300000000', 'excelente', '2026-11-09'),
(4, 'zzzz123', 'renault', 'bueno', '2026-11-01', 'azul', 30, 'mia khalifa', '30000000000', 'bueno', '2026-11-03'),
(5, 'abc123', 'toyota', 'viejo', '2026-11-01', 'azul', 0, 'alok', '3124634336', 'bueno', '2026-11-09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id_vehiculo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id_vehiculo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
