import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter student's marks (0-100): ");
        int marks = sc.nextInt();

        // Validate input
        if (marks < 0 || marks > 100) {
            System.out.println("Invalid marks! Please enter between 0-100");
        } else {
            // Nested if-else for grade calculation
            String grade;
            String remark;

            if (marks >= 90) {
                grade = "A+";
                remark = "Outstanding";
            } else if (marks >= 80) {
                grade = "A";
                remark = "Excellent";
            } else if (marks >= 70) {
                grade = "B";
                remark = "Very Good";
            } else if (marks >= 60) {
                grade = "C";
                remark = "Good";
            } else if (marks >= 50) {
                grade = "D";
                remark = "Average";
            } else {
                grade = "F";
                remark = "Fail";
            }

            System.out.println("\n--- Result ---");
            System.out.println("Marks: " + marks);
            System.out.println("Grade: " + grade);
            System.out.println("Remark: " + remark);
        }

        sc.close();
    }
}