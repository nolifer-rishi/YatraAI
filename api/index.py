import os
import sys

# Add the backend folder to sys.path so we can import app
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'backend'))

from app.main import app
