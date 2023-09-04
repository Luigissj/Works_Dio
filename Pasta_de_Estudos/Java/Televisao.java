import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Televisao {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numLogs = Integer.parseInt(scanner.nextLine());

        Map<String, Integer> logCounts = new HashMap<>();
        String maiorServico = null;
        String menorServico = null;
        int maiorQuantidade = Integer.MIN_VALUE;
        int menorQuantidade = Integer.MAX_VALUE;

        for (int i = 0; i < numLogs; i++) {
            String logEntry = scanner.nextLine();
            String[] parts = logEntry.split(",");
            String servico = parts[1].trim();

            // Atualiza a contagem para o serviço
            logCounts.put(servico, logCounts.getOrDefault(servico, 0) + 1);

            // Verifica se é o maior ou menor até agora
            int quantidadeAtual = logCounts.get(servico);
            if (quantidadeAtual > maiorQuantidade) {
                maiorQuantidade = quantidadeAtual;
                maiorServico = servico;
            } else if (quantidadeAtual < menorQuantidade) {
                menorQuantidade = quantidadeAtual;
                menorServico = servico;
            }
            if (quantidadeAtual <= menorQuantidade) {
                menorQuantidade = quantidadeAtual;
                menorServico = servico;
            }
        }

        System.out.println("Eventos por servico:");
        for (Map.Entry<String, Integer> entry : logCounts.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }

        System.out.println("Maior:" + maiorServico);
        System.out.println("Menor:" + menorServico);
        scanner.close();
    }
}
