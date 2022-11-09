from model.user import user
from model.database import database
from controller.validation import validator

db = database()

class user_enterarte:
    
    def __init__(self):
        pass 

    def register_user(self, mail, password, alias):
        
        if not validator.user_is_valid(mail, password):
            return {"status":"fail","message": "User/Password not valid"}
        
        new_user = user(mail, password, alias)

        if not (db.insert(new_user, "user")):
            return {"status":"fail","message": "Fail to create user"}
                  
        return {"status":"ok", "message": "User created", "data": new_user.__dict__}

    def log_in_user(self, mail, password):
        if not (validator.user_is_valid(mail, password)):
            return {"status":"fail","message": "User/Password not valid"}

        user_data = db.select("user","mail", mail)
        if not user_data:
            return {"status":"fail","message": "Mail doesnt exist"}
        
        user = user(*user_data.values())
        if not (user.password == password):
            return {"status":"fail","message": "Invalid Password"}

        return  {"status":"ok", "message": "Allowed acces", "data": user.__dict__}

    def list_users(self):
        pass