import java.time.Period;
import java.time.LocalDate;
import java.util.Scanner;

public class AgeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your birth year: ");
        int year = scanner.nextInt();
        System.out.print("Enter your birth month: ");
        int month = scanner.nextInt();
        System.out.print("Enter your birth day: ");
        int day = scanner.nextInt();

        AgeCalculator(year, month, day);
        Calculator(year, month, day);

        scanner.close();
    }

    public static void AgeCalculator(int year, int month, int day) {
        LocalDate dob = LocalDate.of(year, month, day);
        LocalDate curdob = LocalDate.now();
        Period date = Period.between(dob, curdob);

        System.out.printf("Age: %d years, %d months, and %d days%n", date.getYears(), date.getMonths(), date.getDays());
    }

    public static void Calculator(int year, int month, int day) {
        LocalDate dob = LocalDate.of(year, month, day);
        LocalDate curdob = LocalDate.now();
        Period date = Period.between(dob, curdob);

        if (curdob.getMonthValue() == dob.getMonthValue() && curdob.getDayOfMonth() == dob.getDayOfMonth()) {
            System.out.println("Happy Birthday!");
        } else {
            System.out.printf("Age: %d years, %d months, and %d days%n", date.getYears(), date.getMonths(), date.getDays());

            // Calculate remaining days to the next birthday
            LocalDate nextBirthday = dob.withYear(curdob.getYear());
            if (nextBirthday.isBefore(curdob) || nextBirthday.isEqual(curdob)) {
                nextBirthday = nextBirthday.plusYears(1);
            }
            Period remainingDays = Period.between(curdob, nextBirthday);
            System.out.printf("Remaining Days to Next Birthday: %d Days%n", remainingDays.getDays());
        }
    }
}
