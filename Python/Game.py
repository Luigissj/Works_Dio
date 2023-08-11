import time

def start_game():
    print("You wake up in your room. It's dark and quiet. You realize you need to escape from your house.")
    time.sleep(2)
    print("You can see a window, a door, and a staircase.")
    time.sleep(1)
    print("What do you do?")
    time.sleep(1)
    print("1. Go to the window")
    print("2. Go to the door")
    print("3. Go to the staircase")
    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == "1":
        window()
    elif choice == "2":
        door()
    elif choice == "3":
        staircase()
    else:
        print("Invalid choice. Please try again.")
        start_game()

def window():
    print("You approach the window. It's locked, but you notice a key on the table nearby.")
    time.sleep(1)
    print("What do you do?")
    time.sleep(1)
    print("1. Take the key and unlock the window")
    print("2. Go back")
    choice = input("Enter your choice (1 or 2): ")

    if choice == "1":
        print("You unlock the window and climb out. Congratulations, you escaped!")
    elif choice == "2":
        start_game()
    else:
        print("Invalid choice. Please try again.")
        window()

def door():
    print("You try to open the door, but it's locked. You need a key to unlock it.")
    time.sleep(1)
    print("What do you do?")
    time.sleep(1)
    print("1. Look for the key")
    print("2. Go back")
    choice = input("Enter your choice (1 or 2): ")

    if choice == "1":
        print("You search around the room and find the key hidden under your bed.")
        time.sleep(1)
        print("You take the key and unlock the door. Congratulations, you escaped!")
    elif choice == "2":
        start_game()
    else:
        print("Invalid choice. Please try again.")
        door()

def staircase():
    print("You head towards the staircase, but you hear a strange noise coming from downstairs.")
    time.sleep(1)
    print("What do you do?")
    time.sleep(1)
    print("1. Go downstairs to investigate")
    print("2. Go back")
    choice = input("Enter your choice (1 or 2): ")

    if choice == "1":
        print("You cautiously go downstairs, but the noise gets louder and scarier.")
        time.sleep(1)
        print("Suddenly, a ghostly figure appears in front of you. You scream and run back to your room.")
        time.sleep(1)
        print("Game Over!")
    elif choice == "2":
        start_game()
    else:
        print("Invalid choice. Please try again.")
        staircase()

start_game()