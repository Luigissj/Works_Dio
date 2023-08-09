package Ententainment;

import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class Game {
    public static void main(String[] args) {
        try (Scanner teclar = new Scanner(System.in)) {
            int regiao = teclar.nextInt();
            Random valor = new Random();
            boolean golpe = valor.nextBoolean();
            boolean critico = valor.nextBoolean();
            String retorno = ".";
            while (regiao > 3 || regiao < 1) {
                System.out.println("Valor invalido, tente novamente");
                regiao = teclar.nextInt();
            }
            if (regiao == 1) {
                System.out.print("Golpeando na cabeça, e");
                for (int x = 1; x > 3; x++) {
                    espera(1);
                    System.out.print(".");
                }
                if (golpe && !critico) {
                    System.out.println("Acertou!!!");
                    espera(1);
                    retorno = "true";
                } else if (golpe && critico) {
                    System.out.println("ACERTO CRÍTICO!!!");
                    retorno = "true damage";
                } else {
                    System.out.println("O Inimigo desviou");
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    retorno = "false";
                }
            }
            if (regiao == 2) {
                System.out.print("Golpeando no peito, e");
                for (int x = 1; x > 3; x++) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    if (golpe && !critico) {
                        System.out.println("Acertou!!!");
                        try {
                            TimeUnit.SECONDS.sleep(2);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        retorno = "true";
                    } else if (golpe && critico) {
                        System.out.println("ACERTO CRÍTICO!!!");
                        try {
                            TimeUnit.SECONDS.sleep(2);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        retorno = "true damage";
                    } else {
                        System.out.println("O Inimigo desviou");
                        try {
                            TimeUnit.SECONDS.sleep(2);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        retorno = "false";
                    }
                }
            }
            if (regiao == 3) {
                System.out.print("Golpeando nas pernas, e");
                for (int x = 1; x > 3; x++) {
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                if (golpe && !critico) {
                    System.out.println("Acertou!!!");
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    retorno = "true";
                } else if (golpe && critico) {
                    System.out.println("ACERTO CRÍTICO!!!");
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    retorno = "true damage";
                } else {
                    System.out.println("O Inimigo desviou");
                    try {
                        TimeUnit.SECONDS.sleep(2);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    retorno = "false";
                }
            }
            System.out.println(retorno);
        }
    }
    public static void espera(int tempo) {
        try {
            TimeUnit.SECONDS.sleep(tempo);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}