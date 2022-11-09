from controller.user_enterarte import user_enterarte


user_enterarte = user_enterarte()


print("Test register user: ")
print(user_enterarte.register_user("franciscogemoo@gmail.com", "123", "FranGemo1"))

print("Test login user: ")
print(user_enterarte.log_in_user("franciscogemoo@gmail.com", "123"))