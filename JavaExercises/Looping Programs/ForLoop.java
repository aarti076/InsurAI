// Program 1: Print numbers 1 to 10 using for loop
class ForLoopExample {
    public static void main(String[] args) {
        System.out.println("For Loop - Numbers 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}

// Program 2: Print multiplication table using while loop
class WhileLoopExample {
    public static void main(String[] args) {
        System.out.println("\nWhile Loop - Multiplication Table of 5:");
        int i = 1;
        while (i <= 10) {
            System.out.println("5 x " + i + " = " + (5 * i));
            i++;
        }
    }
}

// Program 3: Print even numbers from 2 to 20 using do-while loop
class DoWhileLoopExample {
    public static void main(String[] args) {
        System.out.println("\nDo-While Loop - Even Numbers 2 to 20:");
        int i = 2;
        do {
            System.out.println(i);
            i += 2;
        } while (i <= 20);
    }
}