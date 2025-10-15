public class RelationalLogicalOperators {
    public static void main(String[] args) {
        int a = 15, b = 10, c = 15;

        System.out.println("=== Relational Operators ===");
        System.out.println("a = " + a + ", b = " + b + ", c = " + c);
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= c: " + (a >= c));
        System.out.println("a <= b: " + (a <= b));

        System.out.println("\n=== Logical Operators ===");
        boolean x = true, y = false;
        System.out.println("x = " + x + ", y = " + y);
        System.out.println("x && y (AND): " + (x && y));
        System.out.println("x || y (OR): " + (x || y));
        System.out.println("!x (NOT): " + (!x));

        // Practical example
        int age = 25;
        boolean hasLicense = true;
        System.out.println("\n=== Practical Example ===");
        System.out.println("Age: " + age + ", Has License: " + hasLicense);
        System.out.println("Can drive? " + (age >= 18 && hasLicense));
    }
}