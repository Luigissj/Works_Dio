import Ententainment.Game;

public class Televisao{
    boolean ligada;
    int volume;
    int canal;

    public Televisao(){
        ligada = false;
        volume = 0;
        canal = 0;
    }

    public void status(){
        System.out.println("Volume: " + volume + "\nCanal Atual: " + canal);
        Game.espera(1);
    }
    public void diminuirVolume(){
        if(!(ligada && volume == 0)){
            System.out.println("Houve um Problema:\n    → Verifique se o Dispositivo está ligado");
            System.out.println("    → Verifique se o Volume já está no zero");
            Game.espera(5);
        } else {
            volume -= 1;
            System.out.println("\nVolume Diminuído");
            Game.espera(1);
        }
    }
    public void trocarCanal(int escolhacanal){
        if (ligada){
        System.out.println("Trocando para o canal Nº" + (escolhacanal));
        for(int x = 0; x<2; x++){
                Game.espera(1);
                System.out.print(".");
        }
        canal = escolhacanal;
        System.out.println("Canal trocado!! Canal Atual: " + canal);
    } else {
        
    }
}

    public void ligar(){
        if(ligada){
            System.out.println("Desligando");
            for(int x = 0; x<2; x++){
                Game.espera(1);
                System.out.print(".");
            }
            System.out.println("Desligado!");
            ligada = false;
            Game.espera(1);
        } else {
            System.out.println("Ligada!");
            ligada = true;
            Game.espera(1);
        }
    }
}