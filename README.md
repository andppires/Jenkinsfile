# Projeto Pipeline CI/CD

Este projeto demonstra uma pipeline de CI/CD utilizando Jenkins e Node.js, com testes automatizados realizados com Jest. O objetivo é fornecer um exemplo funcional de como configurar e gerenciar um pipeline de integração e entrega contínua.

## Estrutura do Projeto

Abaixo está a organização dos diretórios e arquivos do projeto:

```
pipeline-ci-cd/
├── .github/
│ └── workflows/Jenkinsfile
├── src/
│ └── welcome.js
├── test/
│ └── welcome.test.js
├── README.md
├── jest.config.js
└── package.json
```

Detalhes dos arquivos mais importante dessa estrutura em um projeto Jenkins:

- `.github/workflows/Jenkinsfile`: Arquivo de configuração do Jenkins Pipeline.
- `src/welcome.js`: Código fonte da função de boas-vindas.
- `test/welcome.test.js`: Testes automatizados utilizando Jest.
- `jest.config.js`: Configuração do Jest para testes.
- `package.json`: Dependências e scripts do projeto Node.js.

## Jenkinsfile

O `Jenkinsfile` contém a configuração completa do pipeline, abrangendo:

- **Agente:** Utiliza qualquer agente disponível.
- **Variáveis de Ambiente:** Define variáveis como `NODE_ENV`, `BUILD_VERSION`, e `CREDENTIALS_ID`.
- **Opções:** Configura timeout e retenção de builds.
- **Parâmetros:** Define parâmetros para o pipeline, como `BRANCH_NAME` e `RUN_TESTS`.
- **Triggers:** Configura um cron job para execução semanal.
- **Estágios:**
  - **Checkout:** Faz o checkout do código fonte.
  - **Build:** Fase de construção do projeto.
  - **Test:** Executa testes, se o parâmetro `RUN_TESTS` for verdadeiro.
  - **Deploy:** Requer aprovação manual para implantação.
  - **Parallel Steps:** Executa estágios em paralelo.
  - **Matrix Example:** Executa estágios com combinações de variáveis.
- **Pós-Build:** Ações a serem executadas após o build, dependendo do sucesso ou falha.

## Configuração do Jenkins

- **Instalação:** O Jenkins está instalado na porta 8080.
- **Integração com GitHub:** Configure o Jenkins para usar a URL pública gerada pelo ngrok e mantenha a URL atualizada no GitHub.
- **Pipeline:** Utilize o `Jenkinsfile` fornecido para configurar o pipeline CI/CD.

## Como Executar

1. **Configuração Inicial:** Certifique-se de que o Jenkins está instalado e configurado.
2. **Configuração do Pipeline:** Adicione o `Jenkinsfile` ao repositório.
3. **Executar Pipeline:** O pipeline será acionado conforme o cron job configurado ou manualmente no Jenkins.

## Dependências

- [Jenkins](https://www.jenkins.io/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra um issue ou envie um pull request para adicionar novas funcionalidades ou corrigir problemas.

## Contato

- **Repositório GitHub:** [pipeline-ci-cd](https://github.com/andppires/pipeline-ci-cd)
- **Issues:** [Problemas](https://github.com/andppires/pipeline-ci-cd/issues)
