# pipeline-ci-cd
Pipeline de CI/CD com GitHub Actions e Testes Automatizados
Este repositório contém um projeto simples para demonstrar a configuração de uma pipeline de integração contínua/entrega contínua (CI/CD) utilizando GitHub Actions, juntamente com testes automatizados.

Configuração da Pipeline
A pipeline de CI/CD foi configurada usando o GitHub Actions para automatizar os testes e a entrega contínua do projeto. Ela é acionada automaticamente em cada push realizado no branch main.

Estrutura do Projeto
O projeto segue a seguinte estrutura de diretórios:

bash
Copiar código
.
├── test/                   # Diretório contendo os arquivos de teste
│   └── welcome.test.js    # Arquivo de teste automatizado
├── src/                    # Diretório contendo o código-fonte do projeto
│   └── welcome.js         # Arquivo principal do projeto
├── jest.config.js          # Configuração do framework de teste Jest
├── package.json            # Arquivo de manifesto do projeto
└── README.md               # Documentação do projeto
Testes Automatizados
Este projeto inclui testes automatizados para garantir a integridade do código. Atualmente, há um teste unitário implementado para a função welcome() no arquivo welcome.test.js. Esse teste verifica se a função de boas-vindas retorna a mensagem correta.

Como Utilizar
Para utilizar este projeto, siga as instruções abaixo:

Clone este repositório em sua máquina local:

bash
Copiar código
git clone https://github.com/andppires/pipeline-ci-cd.git
Navegue até o diretório do projeto:

bash
Copiar código
cd pipeline-ci-cd
Instale as dependências do projeto:

bash
Copiar código
npm install
Execute os testes automatizados:

bash
Copiar código
npm test
(Opcional) Modifique o código-fonte conforme necessário e repita o passo 4 para garantir que os testes passem com as suas alterações.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novos recursos.

Licença
Este projeto é licenciado sob a licença ISC. Consulte o arquivo LICENSE para obter mais informações.