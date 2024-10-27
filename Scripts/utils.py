import os

def path_from_repo(path: str = None):
    start_path = os.getcwd()

    current_path = start_path
    while current_path != os.path.dirname(current_path):
        if os.path.isdir(os.path.join(current_path, '.git')):
            if path is None:
                return current_path
            else:
                return current_path + path
        current_path = os.path.dirname(current_path)
    
    raise FileNotFoundError("Repository root with '.git' folder not found.")
