public class ArrayMaxMin {
    public static void main(String[] args) {
        // Initialize an array
        int[] numbers = {45, 12, 78, 23, 91, 5, 67};

        // Initialize max and min with first element
        int max = numbers[0];
        int min = numbers[0];

        // Find maximum and minimum
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }

        // Display results
        System.out.println("Array elements:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println("\n\nMaximum element: " + max);
        System.out.println("Minimum element: " + min);
        System.out.println("Difference: " + (max - min));
    }
}