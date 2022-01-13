$("#SubmitBtn").click(function () {
   /* Declares variables*/
    let assignments, quiz, project, exam, intex, finalGrade, letterGrade, letterResponse;

    /*Passes values from form into variables*/
    assignments = +$("#assignments").val();
    quiz = +$("#quizzes").val();
    project = +$("#project").val();
    exam = +$("#exams").val();
    intex = +$("#intex").val();

    /*Assigns initial phrases to response variables */
    response = "Final Score Prediction: ";
    letterResponse = "Letter Grade Prediction: ";
    letterGrade = '';

    /*Calculates final grade*/
    finalGrade = (.55 * assignments) + (.05 * project) + (.1 * quiz) + (.2 * exam) + (.1 * intex);

    /*Uses final grade calculation to determine letter grade*/
    if (finalGrade >= 94) {
        letterGrade = "A"
    } else if (finalGrade >= 90) {
        letterGrade = "A-"
    } else if (finalGrade >= 87) {
        letterGrade = "B+"
    } else if (finalGrade >= 84) {
        letterGrade = "B"
    } else if (finalGrade >= 80) {
        letterGrade = "B-"
    } else if (finalGrade >= 77) {
        letterGrade = "C+"
    } else if (finalGrade >= 74) {
        letterGrade = "C"
    } else if (finalGrade >= 70) {
        letterGrade = "C-"
    } else if (finalGrade >= 67) {
        letterGrade = "D+"
    } else if (finalGrade >= 64) {
        letterGrade = "D"
    } else if (finalGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    };

    /*Combines response variables along with calculated variables*/
    response += finalGrade + "\n" + letterResponse + letterGrade;

    /*Displays final response through an alert*/
    alert(response);
})