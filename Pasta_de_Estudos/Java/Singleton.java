public class Singleton {
    private static Singleton instancia = new Singleton();

    private  Singleton(){
        
    }

    public static Singleton getInstancia(){
        return instancia;
    }
}
