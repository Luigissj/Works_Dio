package ExercisesDio;
import java.util.Scanner;
public class Televisao{
        Scanner escolha = new Scanner(System.in);
        String correntista;
        float saldo;
        float limiteSaque;

        public Televisao(String nome, float grana, float limites){
                correntista = nome;
                saldo = grana;
                limiteSaque = limites;
        }
//E os métodos:
        
        void sacar(){
                System.out.println("Qual é o valor do SAQUE?");
                float valor = escolha.nextInt();
                if (valor > saldo){
                        System.out.println("Você não tem saldo suficiente");
                } else if (valor > limiteSaque){
                        System.out.println("Você está excedendo o Limite de Saque\n");
                } else {
                saldo -= valor;
                System.out.println("\n");
                System.out.printf("Valor sacado: %.2f\n", valor);
                System.out.printf("SALDO: %.2f\n", saldo);
                }
        }
        
        void depositar(){
                System.out.println("Qual é o valor do DEPÓSITO?");
                float valor = escolha.nextInt();
                saldo += valor;
                System.out.println("\n");
                System.out.printf("Valor depositado: %.2f\n", valor);
                System.out.printf("SALDO: %.2f \n", saldo);
        }
        
        public void info(){
                System.out.println("\n");
                System.out.println("Nome do Correntista: " + correntista);
                System.out.println("Saldo do Correntista: " + saldo);
                System.out.println("Limite de Saque: " + limiteSaque);
                System.out.println("\n");
        }

        public void transferir(Televisao individuo){
                System.out.println("Qual vai ser o valor transferido?");
                float valor = escolha.nextInt();
                if (valor > saldo){
                        System.out.println("Você não tem saldo suficiente");
                } else if (valor > limiteSaque){
                        System.out.println("Você está excedendo o Limite de Saque\n");
                } else {
                        individuo.saldo += valor;
                        saldo -= valor;
                        System.out.printf("Valor Transferido: %.2f\n", valor);
                        System.out.printf("Seu saldo: %.2f\n", saldo);
                }
        }
}