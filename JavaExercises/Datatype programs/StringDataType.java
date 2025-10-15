public class StringDataType {
    public static void main(String[] args) {
        // String declaration and initialization
        String firstName = "John";
        String lastName = "Doe";
        String fullName = firstName + " " + lastName;

        // String methods
        System.out.println("=== String Data Type ===");
        System.out.println("Full Name: " + fullName);
        System.out.println("Length: " + fullName.length());
        System.out.println("Uppercase: " + fullName.toUpperCase());
        System.out.println("Lowercase: " + fullName.toLowerCase());
        System.out.println("Character at index 0: " + fullName.charAt(0));
        System.out.println("Contains 'John': " + fullName.contains("John"));
        System.out.println("Substring (0-4): " + fullName.substring(0, 4));

        // String comparison
        String name1 = "Java";
        String name2 = "Java";
        String name3 = "Python";

        System.out.println("\n=== String Comparison ===");
        System.out.println("name1 equals name2: " + name1.equals(name2));
        System.out.println("name1 equals name3: " + name1.equals(name3));
    }
}