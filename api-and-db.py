from ast import Str
import sqlite3
from urllib import request
import os
import json
import csv

def setUp(name):
    path = os.path.dirname(os.path.abspath(__file__))
    conn = sqlite3.connect(path+'/'+name)
    cur = conn.cursor()
    return cur, conn

def writeCards(fields, data):
    with open('cards.csv', 'w', encoding = 'utf-8', newline = '') as csvfile:
        w = csv.writer(csvfile, delimiter = ',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        #w.writerow(fields)
        #Anki recognizes these as card inputs
        '''how to map to tags?'''
        for d in data:
            w.writerow(d)

def createCard(deck:str, ques: str, ans: str, cats: list):
    '''
    Using the Basic card template for this.
    The Cloze format is harder to generate from transcripts
    Media insertion is weird with this API.
    '''
    
    params = {
        "note": {
            "deckName": deck,
            "modelName": "Basic",
            "fields": {
                "Front": ques,
                "Back": ans
            },
            "options": {
                "closeAfterAdding": True
            },
            "tags": cats
        }
    }

    return params

def addCard(infoDict):
    req = {'action': "guiAddCards",
    'params': infoDict,
    'version': 6}

    r = request.Request('http://localhost:8765', json.dumps(req).encode('utf-8'))
    
    result = json.load(request.urlopen(r))
    print(result)

    basicDict = {
        "action": "version",
        "version": 6
    }

    syncr = request.Request('http://localhost:8765', json.dumps(basicDict).encode('utf-8'))
    res = json.load(request.urlopen(syncr))
    print(res)

if __name__ == '__main__':
    # cur, conn = setUpDatabase('cards.db')
    params = createCard("Testing", "What is 9 + 10?", "21", ["advanced math"])
    addCard(params)
    #writeCards(['Front', 'Back'], [['q', 'a']])
    # conn.close()
