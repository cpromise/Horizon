import json
import argparse
from utils import path_from_repo

def append_or_update_data(file_name, duration):
    # Load the existing data from the JSON file
    json_file_path = path_from_repo("/src/variables/heavybuild.json")
    print("JSON file path:", json_file_path)

    try:
        with open(json_file_path, 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        data = []  # Initialize an empty list if file does not exist

    # # Check if an entry with the same "file" field exists
    file_exists = False
    for entry in data:
        if entry["file"] == file_name:
            entry["duration"] = duration  # Update the duration if file exists
            file_exists = True
            break

    # # If "file" field not found, add new entry
    if not file_exists:
        data.append({ "file": file_name, "duration": duration })
    
    print("data", data)

    # # Save the updated data back to the JSON file
    with open(json_file_path, 'w') as file:
        json.dump(data, file, indent=4)
        

    print("Data appended or updated successfully!")

# Set up argument parsing
parser = argparse.ArgumentParser(description="Append or update data in JSON file.")
parser.add_argument("file_name", type=str, help="File name to append or update.")
parser.add_argument("duration", type=int, help="Duration to append or update.")

args = parser.parse_args()

# Call the function with arguments from CLI
append_or_update_data(args.file_name, args.duration)