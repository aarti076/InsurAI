public class ArraySum {
    public static void main(String[] args) {
        // Initialize an array
        int[] numbers = {10, 25, 30, 45, 50};

        // Calculate sum
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        // Display results
        System.out.println("Array elements:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println("\n\nSum of array elements: " + sum);
        System.out.println("Average: " + (sum / (double)numbers.length));
    }
}