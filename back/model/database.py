class database:
    user = []
    def __init__(self):
        pass

    def insert(self, entity, table_name):
        try:
            database.__dict__[table_name].append(entity)
            return True
        except Exception as e:
            print(e)
    
    def select(self, table_name, criteria, criteria_value):
        try:
            records = database.__dict__[table_name]
            entity = next(x for x in records if x.__dict__[criteria] == criteria_value)
            return entity.__dict__
        except Exception as e:
            print(e)