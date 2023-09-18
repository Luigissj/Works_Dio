package ExercisesDio;
import java.util.Random;

public class Treinamento {
    public static void main(String[] args) {
        Random valor = new Random();
        String[] candidatos = { "Pedro", "Carlos", "João", "Henrique", "Paulo", "Martha", "Golias", "Greig", "Dereck",
                "Jonas" };
        int[] valores = { valor.nextInt(4000), valor.nextInt(4000), valor.nextInt(4000),
                valor.nextInt(4000), valor.nextInt(4000), valor.nextInt(4000), valor.nextInt(4000),
                valor.nextInt(4000), valor.nextInt(4000), valor.nextInt(4000) };
        boolean[] candidatoaceitos = { false, false, false, false, false, false, false, false, false, false };
        int basesalarial = 2000;
        for (int x = 0; x < candidatos.length; x++) {
            System.out.println("Verificando proposta de " + candidatos[x] + "\n");
            System.out.println("R$" + valores[x]);
            if (valores[x] < basesalarial) {
                System.out.println("Proposta Aceita\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n");
                candidatoaceitos[x] = true;
            } else if (valores[x] == basesalarial) {
                System.out.println("Proposta Aceita com Contra-Proposta\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n");
                candidatoaceitos[x] = true;
            } else {
                System.out.println("Esperando os Demais...\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n");
            }
        }
        String [] aceitos = {"","","","","","","","","",""};
        int posicao = 0;
        for (int x = 0; x < candidatos.length; x++) {
            if (candidatoaceitos[x] == true) {
                aceitos[posicao] = candidatos[x];
                posicao++;
            }
        }
        System.out.println("Candidatos Aceitos: ");
        for (String x : aceitos){
            if (x != ""){
                System.out.print(x + ", ");
            }
        }
        System.out.println("\n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n");
        int atendimento = 0;
        boolean[] atendeu = { false, false, false, false, false, false, false, false, false, false };
        for (int x = 0; x < aceitos.length; x++) {
            while (atendimento < 3 && aceitos[x] != "") {
                System.out.println("Ligando Para " + aceitos[x]+":");
                int valoralea = valor.nextInt(3);
                if (valoralea == 1) {
                    System.out.println("Atendeu!!!\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_");
                    atendeu[x] = true;
                    atendimento = 0;
                    break;
                } else {
                    System.out.print("Não Atendeu!!!");
                    atendimento++;
                    if (atendimento == 3){
                        System.out.println(" Foi Rejeitado!\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n");
                        atendimento = 0;
                        break;
                    } else {
                        System.out.println(" Tentando novamente\n");
                    }
                }
            }
        }
        System.out.println("Candidatos Que Atenderam:\n");
        for (int y = 0; y<aceitos.length; y++){
            if (aceitos[y] != "" && atendeu[y] == true){
                System.out.println(aceitos[y]);
            }
        }
    }
}