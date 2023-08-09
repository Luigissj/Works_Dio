package Ententainment;

import java.util.Random;

public class Computer<o> extends Player {
    Random valor = new Random();
    int velocidade = valor.nextInt(20);
    int forca = valor.nextInt(20);

    public Computer(String nome) {
        super(nome);
        this.nome = "Computador";
        while (forca + velocidade > 20) {
            this.velocidade = valor.nextInt(20);
            this.forca = valor.nextInt(20);
        }
    }
}
