import mysql.connector

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='classenterarte',
                                         user='root',
                                         password='')

    mySql_Create_Table_Query = """DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tipo_carrito` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `simbolo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `moneda` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `evento` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_carrito`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------


DROP TABLE IF EXISTS `evento`;
CREATE TABLE IF NOT EXISTS `evento` (
  `id_evento` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_ticket` int(11) UNSIGNED NOT NULL,
  `id_carrito` int(20) UNSIGNED NOT NULL,
  `cantidad` double NOT NULL,
  `precio_compra` double NOT NULL,
  `fecha_compra` date NOT NULL,
  `precio_venta` double DEFAULT NULL,
  `fecha_venta` date DEFAULT NULL,
  `beneficio` double DEFAULT NULL,
  PRIMARY KEY (`id_evento`),
  KEY `id_cartera` (`id_ticket`),
  KEY `id_activo` (`id_carrito`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------


DROP TABLE IF EXISTS `ticket`;
CREATE TABLE IF NOT EXISTS `ticket` (
  `id_ticket` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_ticket`),
  KEY `id_Usuario` (`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------


DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `alias` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `contrasenia` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
COMMIT; """


    cursor = connection.cursor()
    result = cursor.execute(mySql_Create_Table_Query)
    print("tabla productos creada con exito,,!! ")

except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")





