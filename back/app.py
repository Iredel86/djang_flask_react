from flask import Flask
import json
from flask_cors import CORS


api = Flask(__name__)
CORS(api)
prods= [
          {
           "desc": "pizza",
           "price": 28,
           "id": 1
          },
          {
           "desc": "milk" ,
           "price": 5,
           "id": 2
          },
          { 
           "desc": "sugar" ,
           "price": 6, 
           "id": 3
          },
          { "desc": "pasta" ,
           "price": 4,
            "id": 4
          },
          { "desc": "cookies" ,
           "price": 9,
            "id": 5
          },
          { "desc": "coffee" ,
           "price": 21
           , "id": 6
          }
        ]

@api.route('/')
def hello():
    return 'Hello, World!'

@api.route('/prods')
def getData():
    return json.dumps(prods)


if __name__ == '__main__':
    api.run(debug=True)
