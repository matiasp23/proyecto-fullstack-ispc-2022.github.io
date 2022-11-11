import mysql.connector
from mysql.connector import Error

# Registro de usuarios con clases
class Init():

    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host= "localhost",
                port= 3306,
                user="root",
                password="",
                db="classenterarte"
            )

        except Error as ex:
            print("Error al intentar la conexion: {0}".format(ex))
        finally:
            self.conexion.close()

    def registar_usuario(self, values):
        self.conexion.connect() 
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sql = "INSERT INTO usuario(mail, contrasenia, alias) VALUES ('{0}', '{1}', '{2}')"
                cursor.execute(sql.format(values[0], values[1], values[2]))
                self.conexion.commit()
                print("¡Datos registrado!\n")
            except Error as ex:
                print("El error es: ", ex)
            finally:
                self.conexion.close()

    def obtener_usuario(self,mail):
        self.conexion.connect()
        if self.conexion.is_connected():  
            try:
                cursor=self.conexion.cursor()
                sql = "SELECT * FROM usuario WHERE mail=('{0}')"
                cursor.execute(sql.format(mail))
                resultados=cursor.fetchone()
                print("Consulta exitosa...",resultados)
                return resultados
            except Error as ex:
                print("El error es: ", ex)
            finally:
                self.conexion.close()

    def eliminar_usuario(self, mail):
        self.conexion.connect()
        if self.conexion.is_connected():  
            try:
                cursor=self.conexion.cursor()
                sql = "DELETE FROM usuario WHERE mail=('{0}')"
                cursor.execute(sql.format(mail))
                self.conexion.commit()
                print("Eliminacion exitosa...")
            except Error as ex:
                print("El error es: ", ex)
            finally:
                self.conexion.close()
                
    def actualizar_usuario(self, mail, values):
        self.conexion.connect()
        if self.conexion.is_connected():  
            try:
                cursor = self.conexion.cursor()
                sql = "UPDATE usuario SET mail = '{0}', contrasenia = '{1}', alias = '{2}' WHERE mail = '{3}'"
                cursor.execute(sql.format(values[0], values[1], values[2], mail))
                self.conexion.commit()
                print("¡Registro actualizado!\n")
            except Error as ex:
                print("Error al intentar la conexión: {0}".format(ex))








init = Init()

valores = ["Juan.perez@gamil.com", "123A", "juanP"]
init.actualizar_usuario("j.perez@gamil.com",valores)