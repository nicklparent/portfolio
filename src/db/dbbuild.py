import pymongo
import os
from dotenv import load_dotenv

load_dotenv()
address = os.getenv("DB_CONNECTION")