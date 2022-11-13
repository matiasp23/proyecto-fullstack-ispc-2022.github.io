import re
mail_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
passwor_regex = r"^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

class validator:

    @classmethod
    def user_is_valid(self, mail, password):
        if re.match(mail_regex, mail) and \
           re.match(passwor_regex, password):
            return True
        else:
            return False
        

