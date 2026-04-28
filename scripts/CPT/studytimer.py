subjects = [
    {"name": "Math",    "minutes": 0},
    {"name": "Science", "minutes": 0},
    {"name": "English", "minutes": 0},
    {"name": "History", "minutes": 0},
]

def analyze(goal):
    total      = 0
    needs_more = []

    for subject in subjects:
        total += subject["minutes"]
        if subject["minutes"] < goal:
            needs_more.append(subject["name"])

    average = total / len(subjects)
    return needs_more, average

print("=== Study Timer ===")
print("Subjects:", [s["name"] for s in subjects])
print()

for subject in subjects:
    mins = int(input(f"Minutes studied for {subject['name']}: "))
    subject["minutes"] = mins

goal = int(input("\nGoal minutes per subject: "))

needs_more, average = analyze(goal)

print("\n=== Results ===")
for subject in subjects:
    print(f"  {subject['name']}: {subject['minutes']} mins")

print(f"\nAverage study time : {average:.1f} mins")
print(f"Goal               : {goal} mins")

if needs_more:
    print(f"Needs more time    : {', '.join(needs_more)}")
else:
    print("All subjects on track!")