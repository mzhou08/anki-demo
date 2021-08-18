from flask import Flask, jsonify, request
# from flask_mysqldb import MySQL
import sqlite3
import os
from flask.scaffold import setupmethod
from flask_cors import CORS
from flask import current_app, g

app = Flask(__name__)
CORS(app)

#################################
# TEMPORARILY UNUSED CODE BELOW #
#################################


def setUpDatabase():
    path = os.path.dirname(os.path.abspath(__file__))
    conn = sqlite3.connect(path+'/cards.db')
    cur = conn.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS Cards 
    (id INTEGER PRIMARY KEY, 
    deck TEXT, 
    front TEXT UNIQUE, 
    back TEXT)''')

    '''NEED TO WORK ON THIS DB TO SAVE SPACE'''

    cur.execute('''CREATE TABLE IF NOT EXISTS Decks 
    (id INTEGER PRIMARY KEY, name TEXT UNIQUE)''')

    conn.commit()
    
    return cur, conn



@app.route('/', methods = ['GET', 'POST'])
def index():
    return "Waiting for requests..."

@app.route('/getDecks/', methods = ['GET'])
def getDecks():

    decks = {}

    cur, conn = setUpDatabase()
    cur.execute('SELECT name FROM Decks')
    for c in cur.fetchall():
        decks[c[0]] = []
    for deckName in decks.keys():
        cur.execute('SELECT id, front, back FROM Cards WHERE deck = ?', (deckName,))

        for c in cur:
            card = {
                'id': c[0],
                'front': c[1],
                'back': c[2]
            }
            decks[deckName].append(card)
    conn.close()
    return jsonify(decks)

@app.route('/decks/', methods = ['POST'])
# Creates new deck name for future cards to go into
def addDeck():
    data = request.get_json()

    deckName = data['deckName']

    cur, conn = setUpDatabase()
    cur.execute('INSERT INTO Decks (name) VALUES (?)', (deckName,))
    conn.commit()
    conn.close()

    return jsonify({'newDeck': deckName})

@app.route('/cards/', methods = ['POST'])
# Adds new card to the appropriate deck with unique ID
def addCard():
    data = request.get_json()

    card = {
        'deck': data['deck'],
        'front': data['front'],
        'back': data['back']
    }

    cur, conn = setUpDatabase()
    cur.execute('INSERT INTO Cards (deck, front, back) VALUES (?, ?, ?)', (card['deck'], card['front'], card['back']))
    conn.commit()
    conn.close()

    return jsonify({'card': card})

@app.teardown_appcontext
def close_connection(exception):
    
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

if __name__ == '__main__':
    setUpDatabase()
    app.run(debug=True)