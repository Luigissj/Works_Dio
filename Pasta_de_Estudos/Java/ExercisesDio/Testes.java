package ExercisesDio;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Testes {
    public static void main(String[] args) {
        Scanner valor = new Scanner(System.in);
        Set<Televisao> contas = new HashSet<Televisao>();
        String nomeConta;
        while (true) {
            System.out.println("Escolha sua opção:\n[1]Criar nova conta [2]Sacar [3]Depositar [4]Informações da Conta [5]Transferir [6] Sair\n");
            int escolha = valor.nextInt();
            System.out.println("\n");
            if (escolha > 6 || escolha <= 0) {
                System.out.println("Valor invalido, tente novamente!\n");
                continue;
            } else {
                switch (escolha) {
                    case 1:
                        System.out.println("Criando conta...");
                        System.out.print("Digite seu nome: ");
                        String nome = valor.next();
                        System.out.print("Digite seu SALDO: ");
                        float saldo = valor.nextFloat();
                        System.out.print("Digite seu SALDO LIMITE: ");
                        float saldolimite = valor.nextFloat();
                        contas.add(new Televisao(nome, saldo, saldolimite));
                        System.out.println("Conta Criada!!! \n");
                        for (Televisao conta : contas) {
                            System.out.println(conta.correntista);
                        }
                        System.out.println("\n");
                        break;
                    case 2:
                        System.out.print("Digite o nome da sua conta: ");
                        nomeConta = valor.next();
                        int numero = contas.size();
                        for (Televisao name : contas) {
                            if (nomeConta.equalsIgnoreCase(name.correntista)) {
                                System.out.println("Conta encontrada!!!");
                                System.out.println("\n");
                                name.sacar();
                            } else if (numero == 0) {
                                System.out.println("Conta inexistente");
                            }
                            numero -= 1;
                        }
                        break;
                    case 3:
                        int numeros = contas.size();
                        System.out.print("Digite o nome da sua conta: ");
                        nomeConta = valor.next();
                        for (Televisao name : contas) {
                            if (nomeConta.equalsIgnoreCase(name.correntista)) {
                                System.out.println("Conta encontrada!!!");
                                System.out.println("\n");
                                name.depositar();
                            } else if (numeros == 0) {
                                System.out.println("Conta inexistente");
                            }
                            numeros -= 1;
                        }
                        break;
                    case 4:
                        int numeral = contas.size();
                        System.out.println("Digite o nome da sua conta: ");
                        nomeConta = valor.next();
                        for (Televisao name : contas) {
                            if (nomeConta.equalsIgnoreCase(name.correntista)) {
                                System.out.println("Conta encontrada!!!");
                                name.info();
                            } else if (numeral == 0) {
                                System.out.println("Conta inexistente");
                            }
                            numeral -= 1;
                        }
                        break;
                    case 5:
                        int numerico = contas.size();
                        System.out.println("Digite o nome da sua conta: ");
                        nomeConta = valor.next();
                        for (Televisao name : contas) {
                            if (nomeConta.equalsIgnoreCase(name.correntista)) {
                                System.out.println("Conta encontrada!!!\n");
                                System.out.print("Digite o nome da conta que deseja transferir: ");
                                String nomeConta2 = valor.next();
                                numerico = contas.size();
                                for (Televisao nomes : contas) {
                                    if (nomeConta2.equalsIgnoreCase(nomes.correntista)) {
                                        System.out.println("Conta encontrada!!!");
                                        name.transferir(nomes);
                                    } else if (numerico == 0) {
                                        System.out.println("Conta inexistente");
                                    }
                                    numerico -= 1;
                                }
                            } else if (numerico == 0) {
                                System.out.println("Conta inexistente");
                            }
                            numerico -= 1;
                        }
                        break;
                    case 6:
                        System.out.println("Encerrando...");
                        valor.close();
                }
            }
            if (escolha == 6)
                break;
        }
    }
}
