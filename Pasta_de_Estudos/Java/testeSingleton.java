public class testeSingleton {
    public static void main(String[] args) {
        Singleton teste = Singleton.getInstancia();
        System.out.println(teste);
        Singleton azul = Singleton.getInstancia();
        System.out.println(azul);   
    }
}
