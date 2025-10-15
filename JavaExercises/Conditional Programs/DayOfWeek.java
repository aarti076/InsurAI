import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter day number (1-7): ");
        int day = sc.nextInt();

        // Using switch-case statement
        switch (day) {
            case 1:
                System.out.println("Monday");
                System.out.println("Start of the work week!");
                break;
            case 2:
                System.out.println("Tuesday");
                System.out.println("Keep going strong!");
                break;
            case 3:
                System.out.println("Wednesday");
                System.out.println("Midweek already!");
                break;
            case 4:
                System.out.println("Thursday");
                System.out.println("Almost there!");
                break;
            case 5:
                System.out.println("Friday");
                System.out.println("TGIF - Weekend is near!");
                break;
            case 6:
                System.out.println("Saturday");
                System.out.println("Weekend vibes!");
                break;
            case 7:
                System.out.println("Sunday");
                System.out.println("Relax and recharge!");
                break;
            default:
                System.out.println("Invalid input! Please enter a number between 1-7");
        }

        // Additional check using if-else
        if (day >= 1 && day <= 5) {
            System.out.println("Type: Weekday");
        } else if (day == 6 || day == 7) {
            System.out.println("Type: Weekend");
        }

        sc.close();
    }
}