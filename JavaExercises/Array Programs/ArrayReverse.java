public class ArrayReverse {
    public static void main(String[] args) {
        // Initialize an array
        int[] numbers = {10, 20, 30, 40, 50, 60};

        // Display original array
        System.out.println("Original array:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        // Reverse the array
        int start = 0;
        int end = numbers.length - 1;

        while (start < end) {
            // Swap elements
            int temp = numbers[start];
            numbers[start] = numbers[end];
            numbers[end] = temp;

            start++;
            end--;
        }

        // Display reversed array
        System.out.println("\n\nReversed array:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}