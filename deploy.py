"""
Copy builded files to /www/html/
Usage: /hackathon_0904$ python3 deploy.py
"""

from distutils import dir_util
dir_util.copy_tree("./frontend/build", "./www/html")
