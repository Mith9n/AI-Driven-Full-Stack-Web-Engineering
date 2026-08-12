function generateLeaderboard(students) {

    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (
            typeof student !== "object" ||
            student === null ||
            !("name" in student) ||
            !("score" in student) ||
            typeof student.name !== "string" ||
            typeof student.score !== "number"
        ) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(student => {
        return student.name.toUpperCase();
    });

    return names.slice(0, 3);
}
