Crie um novo projeto, realizando nele o setup básico dos projetos vistos em aula, com todas as dependências necessárias para a boa utilização e compilação do TypeScript e do Jest.

Tendo como repositório de dados os arquivos vegetables.json (disponível  aqui: https://ead.ifms.edu.br/pluginfile.php/1554421/mod_assign/intro/vegetables.json) e vegetables.csv (disponível aqui: https://ead.ifms.edu.br/pluginfile.php/1554421/mod_assign/intro/vegetables.csv), implemente o model necessário para modelar os dados salvos no arquivo.

Após, utilizando os conceitos de polimorfismo vistos em aula, implemente as classes VegetableJsonDAO e VegetableCsvDAO para realizar as seguintes operações de consulta sobre os seus respectivos repositórios de dados:

Recuperar um vegetal pelo seu id
Recuperar vegetais por parte do seu nome,  ignorando casos (case insensitive)
Recuperar vegetais pelos seus benefícios, ignorando casos (case insensitive)
Por fim, implemente testes unitários para ambos os DAOs implementados para testar cada uma das operações implementadas.

Ao finalizar, crie um repositório próprio para o seu projeto no Github e então envie o link do repositório exclusivamente aqui pelo Moodle até as 23:59 do dia 21/09/2023. Esta avaliação deve ser realizada individualmente e vale até 10 pontos.