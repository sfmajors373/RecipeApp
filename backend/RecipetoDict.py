#! /bin/python3
import pymongo
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client.recipes
recipes = db.recipes

# open a file to read
nameOfFile = 'AppleStrudelMuffins.tex'
NAME = nameOfFile.strip('.tex')

def findIfCommented(line):
    if line.strip()[0] == '%':
        return True
    else:
        return False

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

def findPrepTime(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    prepTime = ''
    for line in RECIPE_FILE:
        if line.find('preparationtime') != -1:
            if findIfCommented(line) == True:
                bakeTime = None
                break;
            else:
                line = line.strip()
                line = line.strip('preparationtime = {\\unit[')
                if line.find('min') == -1:
                    prepTime= line.strip(']{h}},')
                    prepTime = prepTime + ' hours'
                    break;
                else:
                    prepTime = line.strip(']{min}},')
                    prepTime = prepTime + ' minutes'
                    break;
               #  else:
               #      prepTime = null
    RECIPE_FILE.close()
    return(prepTime)



def findbakingTime(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    bakeTime = ''
    for line in RECIPE_FILE:
        if line.find('bakingtime') != -1:
            if findIfCommented(line) == True:
                bakeTime = None
                break;
            else:
                line = line.strip()
                line = line.strip('bakingtime={\\unit[')
                if line.find('min') == -1:
                    bakeTime = line.strip(']{h}},')
                    bakeTime = bakeTime + ' hours'
                    break;
                else:
                    bakeTime = line.strip(']{min}},')
                    bakeTime = bakeTime + ' minutes'
                    break;
               #  else:
               #      bakeTime = null
    RECIPE_FILE.close()
    return(bakeTime)

def findBakingTemp(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    bakeTemp = ''
    for line in RECIPE_FILE:
        if line.find('fanoven') != -1:
            if findIfCommented(line) == True:
                bakeTemp = None
                break;
            else:
                line = line.strip()
                line = line.strip('fanoven=\\unit[')
                bakeTemp = line.strip(']{°F}}},')
                bakeTemp = bakeTemp + ' °F'
                break;
    RECIPE_FILE.close()
    return(bakeTemp)

def findPortions(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    portions = ''
    for line in RECIPE_FILE:
        if line.find('portion') != -1:
            if findIfCommented(line) == True:
                portions = None
                break;
            else:
                line = line.strip()
                line = line.strip('portion = {\\portion{')
                portions = line.strip('}},')
                break;
    RECIPE_FILE.close()
    return(portions)

def findSource(nameOfFile):
    RECIPE_FILE = open(nameOfFile, 'r')
    source = ''
    for line in RECIPE_FILE:
        if line.find('source') != -1:
            if findIfCommented(line) == True:
                source = None
                break;
            else:
                line = line.strip()
                line = line.strip('source = {')
                source = line.strip('}')
                break;
    RECIPE_FILE.close()
    return source

PREPTIME = findPrepTime(nameOfFile)
SOURCE = findSource(nameOfFile)
PORTIONS = findPortions(nameOfFile)
BAKETEMP = findBakingTemp(nameOfFile)
BAKETIME = findbakingTime(nameOfFile)
STEPS = findSteps(nameOfFile)
RECIPE = {"name": NAME,
          "prepTime": PREPTIME,
          "bakeTime": BAKETIME,
          "bakeTemp": BAKETEMP,
          "portions": PORTIONS,
          "source": SOURCE,
          "ingredients": ingredients,
          "steps": STEPS}
recipe_id = recipes.insert_one(RECIPE).inserted_id
print('recipe added')
print(RECIPE)
