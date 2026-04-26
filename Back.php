<?php
/**
 * Back.php - Backend básico para o Portfólio
 * 
 * Este arquivo funciona como uma API simples para fornecer dados dos projetos
 * e gerenciar cabeçalhos de CORS (Cross-Origin Resource Sharing) para o Front-end em React.
 */

// Configurações de Cabeçalho para permitir acesso do Front-end (Vite/React)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Captura a rota ou ação solicitada (via parâmetro GET 'action')
$action = isset($_GET['action']) ? $_GET['action'] : 'status';

switch ($action) {
    case 'projects':
        // Simulação de busca em banco de dados
        $projects = [
            [
                "id" => 1,
                "title" => "Projeto GSM Auto Help Desk",
                "description" => "Sistema SaaS de auto help desk com Front-end em JS e Back-end em SQLite.",
                "tech" => ["HTML", "CSS", "JavaScript", "SQLite"]
            ],
            [
                "id" => 2,
                "title" => "Projeto To Do List",
                "description" => "App de lista de tarefas com React, C# e PostgreSQL.",
                "tech" => ["React", "C#", "PostgreSQL", "Docker"]
            ],
            [
                "id" => 3,
                "title" => "Projeto Portfólio",
                "description" => "Este projeto atual, focado em apresentar habilidades e contatos.",
                "tech" => ["React", "Vite", "CSS", "PHP"]
            ]
        ];
        echo json_encode(["status" => "success", "data" => $projects]);
        break;

    case 'contact':
        // Lógica básica para receber dados de um formulário de contato via POST
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents("php://input"), true);
            
            if (!empty($data['email']) && !empty($data['message'])) {
                // Aqui entraria a lógica de envio de e-mail ou salvamento em banco
                echo json_encode(["status" => "success", "message" => "Mensagem recebida com sucesso!"]);
            } else {
                http_response_code(400);
                echo json_encode(["status" => "error", "message" => "Dados incompletos."]);
            }
        } else {
            http_response_code(405);
            echo json_encode(["status" => "error", "message" => "Método não permitido."]);
        }
        break;

    case 'status':
    default:
        // Endpoint de saúde da API
        echo json_encode([
            "status" => "online",
            "server_time" => date("Y-m-d H:i:s"),
            "owner" => "Gusttavo Sacco Moreirão"
        ]);
        break;
}
?>
