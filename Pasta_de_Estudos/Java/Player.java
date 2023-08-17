package Ententainment;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;
import java.util.Random;

public class Player {
    private Scanner teclar = new Scanner(System.in);
    private Random value = new Random();
    public String nome;
    public int vida = 50;
    private boolean stunado;
    public int forca;
    public int velocidade;

    public Player(String nome) {
        this.nome = nome;
    }

    // --------------------------------------------------------------------

    public String golpear(int regiao, int veloz) {
        boolean golpe = acerto(regiao, veloz);
        boolean critico = acertocrítico();
        String retorno = "";
        while (regiao > 3 || regiao < 1) {
            System.out.println("Valor invalido, tente novamente");
            regiao = teclar.nextInt();
        }
        if (regiao == 1) {
            System.out.print("Golpeando na cabeça, e");
            Game.espera(1);
            esperaResultado();
            if (golpe && !critico) {
                System.out.println("Acertou!!!");
                Game.espera(1);
                retorno = "true";
            } else if (golpe && critico) {
                System.out.println("ACERTO CRÍTICO!!!");
                Game.espera(1);
                retorno = "true damage";
            } else {
                System.out.println("O Inimigo desviou");
                Game.espera(1);
                retorno = "false";
            }
        }
        if (regiao == 2) {
            System.out.print("Golpeando no peito, e");
            Game.espera(1);
            esperaResultado();
            if (golpe && !critico) {
                System.out.println("Acertou!!!");
                Game.espera(1);
                retorno = "true";
            } else if (golpe && critico) {
                System.out.println("ACERTO CRÍTICO!!!");
                Game.espera(1);
                retorno = "true damage";
            } else {
                System.out.println("O Inimigo desviou");
                Game.espera(1);
                retorno = "false";
            }
        }
        Game.espera(1);
        if (regiao == 3) {
            System.out.print("Golpeando nas pernas, e");
            esperaResultado();
            if (golpe && !critico) {
                System.out.println("Acertou!!!");
                Game.espera(1);
                retorno = "true";
            } else if (golpe && critico) {
                System.out.println("ACERTO CRÍTICO!!!");
                Game.espera(1);
                retorno = "true damage";
            } else {
                System.out.println("O Inimigo desviou");
                Game.espera(1);
                retorno = "false";
            }
        }
        return retorno;
    }

    private boolean acerto(int regiao, int veloz) {
        boolean retorno = true;
        while (regiao > 3 || regiao < 1) {
            switch (regiao) {
                case 1:
                    if (value.nextInt(100) > (40 + (veloz * 2))) {
                        retorno = false;
                    } else {
                        retorno = true;
                    }
                    break;
                case 2:
                    if (value.nextInt(100) > (20 + (veloz * 2))) {
                        retorno = false;
                    } else {
                        retorno = true;
                    }
                    break;
                case 3:
                    if (value.nextInt(100) > (30 + (veloz * 2))) {
                        retorno = false;
                    } else {
                        retorno = true;
                    }
                    break;
                default:
                    System.out.println("Valor Invalido, tente novamente!");
                    Game.espera(2);
            }
        }
        return retorno;
    }

    public void stunar() {
        if (stunado)
            stunado = false;
        else
            stunado = true;
    }
    // --------------------------------------------------------------------

    public static void esperaResultado(){
        for (int x = 1; x > 3; x++) {
            try {
                TimeUnit.SECONDS.sleep(tempo);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.print(".");
        }
    }

    private boolean acertocrítico() {
        if (value.nextInt(10) == 7) {
            return true;
        } else {
            return false;
        }
    }
}