class user:
    
    def __init__(self, mail, password, alias = None, id = None):
        self.mail = mail
        self.password = password
        self.alias = alias
        self.id  = id 
         

    def __str__(self):
        return f"User id: {self.id} with mail: {self.mail}, has password: {self.password}, and named {self.alias}"
