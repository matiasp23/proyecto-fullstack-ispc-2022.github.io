-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-10-2022 a las 00:47:16
-- Versión del servidor: 8.0.29
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `enterarte`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE IF NOT EXISTS `eventos` (
  `id_evento` int NOT NULL,
  `titulo` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventosdata`
--

DROP TABLE IF EXISTS `eventosdata`;
CREATE TABLE IF NOT EXISTS `eventosdata` (
  `id_evento_data` int NOT NULL,
  `id_evento` int NOT NULL,
  `titulo` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `foto` blob NOT NULL,
  `categoria` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `genero` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `localidad` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `calle` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `numero` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `redes` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `provincia` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_evento_data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `bloqueo` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userdata`
--

DROP TABLE IF EXISTS `userdata`;
CREATE TABLE IF NOT EXISTS `userdata` (
  `id_user_data` int NOT NULL,
  `id_user` int NOT NULL,
  `nombres` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_nac` date NOT NULL,
  `tel` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_user_data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
