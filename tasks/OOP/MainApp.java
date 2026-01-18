public class MainApp {
    public static void main(String[] args) {
        Machine[] machines = {
                new Excavator(),
                new Bulldozer(),
                new Truck()
        };
        for (Machine machine : machines) {
            machine.doWork();
            machine.stopWork();
            System.out.println();
        }
    }
}