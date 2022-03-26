function callRoll(students) {
    if (!Array.isArray(students)) return;

    students.forEach((students) => {
        console.log(`Are you here, ${students}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);

