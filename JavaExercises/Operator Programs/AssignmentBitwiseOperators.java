public class AssignmentBitwiseOperators {
    public static void main(String[] args) {
        System.out.println("=== Assignment Operators ===");
        int num = 10;
        System.out.println("Initial value: " + num);

        num += 5;  // num = num + 5
        System.out.println("After num += 5: " + num);

        num -= 3;  // num = num - 3
        System.out.println("After num -= 3: " + num);

        num *= 2;  // num = num * 2
        System.out.println("After num *= 2: " + num);

        num /= 4;  // num = num / 4
        System.out.println("After num /= 4: " + num);

        num %= 5;  // num = num % 5
        System.out.println("After num %= 5: " + num);

        System.out.println("\n=== Bitwise Operators ===");
        int a = 5;   // Binary: 0101
        int b = 3;   // Binary: 0011
        System.out.println("a = " + a + " (Binary: 0101)");
        System.out.println("b = " + b + " (Binary: 0011)");

        System.out.println("a & b (AND): " + (a & b));     // 0001 = 1
        System.out.println("a | b (OR): " + (a | b));      // 0111 = 7
        System.out.println("a ^ b (XOR): " + (a ^ b));     // 0110 = 6
        System.out.println("~a (NOT): " + (~a));           // Inverts bits
        System.out.println("a << 1 (Left Shift): " + (a << 1));   // 1010 = 10
        System.out.println("a >> 1 (Right Shift): " + (a >> 1));  // 0010 = 2
    }
}