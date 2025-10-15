public class ArithmeticOperators {
    public static void main(String[] args) {
        int a = 20, b = 10;

        System.out.println("=== Arithmetic Operators ===");
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition (a + b): " + (a + b));
        System.out.println("Subtraction (a - b): " + (a - b));
        System.out.println("Multiplication (a * b): " + (a * b));
        System.out.println("Division (a / b): " + (a / b));
        System.out.println("Modulus (a % b): " + (a % b));

        // Increment and Decrement
        System.out.println("\n=== Increment/Decrement ===");
        int x = 5;
        System.out.println("x = " + x);
        System.out.println("x++ (post-increment): " + (x++));
        System.out.println("After post-increment, x = " + x);
        System.out.println("++x (pre-increment): " + (++x));
        System.out.println("x-- (post-decrement): " + (x--));
        System.out.println("After post-decrement, x = " + x);
    }
}