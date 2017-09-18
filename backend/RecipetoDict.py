#! /bin/python3
# import pymongo
# from pymongo import MongoClient
# client = MongoClient('mongodb://localhost:27017/')
# db = client.pymongo_test
# recipes = db.recipes

# open a file to read
nameOfFile = 'ApplesauceNutBread.tex'
NAME = nameOfFile.strip('.tex')

def findIngredients(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    ingredients = []
    for line in RECIPE_FILE:
        if line.find('\ingredients{%') != -1:
            while line.find('}') == -1:
                line = RECIPE_FILE.readline()
                line = line.strip()
                line = line.strip('\\')
                line = line.replace('&', '')
                ingredients.append(line)
            ingredients.pop()
    RECIPE_FILE.close()
    return ingredients

ingredients = findIngredients(nameOfFile)

def findSteps(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    STEPS = []
    for line in RECIPE_FILE:
        if line.find('\preparation{%') != -1:
            while line.find('}') == -1:
                line = RECIPE_FILE.readline()
                line = line.strip()
                line = line.strip('\step ')
                STEPS.append(line)
            STEPS.pop()
    RECIPE_FILE.close()
    return STEPS


STEPS = findSteps(nameOfFile)
RECIPE = {"name": NAME,
          "ingredients": ingredients,
          "steps": STEPS}
# recipe_id = recipes.insert_one(recipe).inserted_id
print(RECIPE)
