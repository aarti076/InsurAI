public class ArrayDataType {
    public static void main(String[] args) {
        // Integer array
        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println("=== Integer Array ===");
        System.out.println("Array length: " + numbers.length);
        System.out.print("Array elements: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();

        // String array
        String[] fruits = {"Apple", "Banana", "Orange", "Mango"};

        System.out.println("\n=== String Array ===");
        System.out.println("Array length: " + fruits.length);
        System.out.println("Array elements:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }

        // Multi-dimensional array
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        System.out.println("\n=== 2D Array (Matrix) ===");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        // Calculate sum of array
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("\nSum of numbers array: " + sum);
    }
}