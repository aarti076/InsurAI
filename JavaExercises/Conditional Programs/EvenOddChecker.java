import java.util.Scanner;

public class EvenOddChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        // Using if-else condition
        if (number % 2 == 0) {
            System.out.println(number + " is an EVEN number");
        } else {
            System.out.println(number + " is an ODD number");
        }

        // Additional check for positive/negative
        if (number > 0) {
            System.out.println("The number is POSITIVE");
        } else if (number < 0) {
            System.out.println("The number is NEGATIVE");
        } else {
            System.out.println("The number is ZERO");
        }

        sc.close();
    }
}