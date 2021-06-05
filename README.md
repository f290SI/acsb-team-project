# Team Project Acessibilidade

Este projeto será desenvolvido em conjunto times formados pelo componente curricular `Acessibilidade` do curso `Sistemas para Internet` utilizando sistema de versionamento no desenvolvimento.

## Instruções

Vamos utilizar o CBL Framework para padronizar a pesquisa, base de cnhecimento e o planejamento de tarefas no início do projeto.
Para controle de tarefas, iremos utilizar o `Microsoft Planner` com base nos quadros **Kanban**, com o planner poderemos acompanhar o desenvolvimento das tarefas e minimizar os **gargalos** de execução e minimizar o possível **caminho crítico**, provendo transparência à todos os membros de cada time.

A Comunicação ocorrerá pelo `Microsoft Teams`, evitem ferramentas que não possuam `threads` de conversas, ou seja cada conversa com um tema definido no Teams fica mais facil de localiza-las.

O controle codificação e versões ocorrerão com a utilização do git/github; cada time irá trabalhar em uma branch específica, as instruções estão logo abaixo.

As especificações funcionais (requisitos ou histórias), como cores, fontes, critérios de aceite de descrição de imagens, critérios de sucesso e afins, serão atribuidas no `README` também, elas serão definidas durante o desenvolvimento com o aval dos times para ques nossos `entregáveis` sejam coerentes com as tarefas criadas pelos times.

### Clonar o projeto
Clone o projeto em um diretorio de sua escolha atraves do `Git-Bash`:
```shell
git clone https://github.com/f290SI/acsb-team-project.git
```

### Atualizar o projeto
Certifique-se que voce esta trabalhando na branch `main`.
```shell
git branch
```
O resultado deve apontar para a branch master com um asterisco como prefixo
```shell
* main
```

### Criar a branch do seu time

Iremos definir as páginas exatas para cada time ainda hoje, assim poderemos focar no trabalho!

### Criar a branch do seu time
#### Times
Time | Integrantes | Tema | Página
-- | -- | -- | --
TIME X | Alunos | Cegueira e Baixa Visão | Tema
TIME Y | Alunos | Auditiva | Tema e página Sobre
TIME Z | Alunos | Cognitiva | Tema e página Contato
TIME @ | Alunos | Motora | Tema e página Principal

##### Crie a branch de seu time, com exceção do time-3
Para criar sua branch digite o comando abaixo tocando o `X` pelo numero do seu time.
```shell
git checkout -b team-nome-incrivel
```
O comando acima cria a branch especifica e realiza a mudanca da branch `main` para a branch de seu time `team-nome-incrivel`.

### Realize as alterações e crie seus commits
Após criar seus arquivos e realizar as alterações, verifique se esta trabalhando na branch de seu time.
```shell
git branch
team-nome-incrivel
* main
```
Após confirmar, realize os `commits`.
```shell
git add .
git commit -m "Mensagem descritiva do commit (descrição das alterações realizadas)"
```
Visualize o log para confirmar a criação do commit.
```shell
git log
```
Se ouverem muitos commits, pressione a tecla `Q` para sair da visualização de LOG.

### Enviar suas aterações para o repositorio remoto
No primeiro envio ao repositorio remoto, suas alterações existem apenas na sua máquina.
Voce precisa informar o destino da branch `team-nome-incrivel`.
Para enviar suas alterações para o repositorio remoto, digite o comando abaixo.
```shell
git push -u origin team-nome-incrivel
```
ou
```shell
git push --set-upstream origin team-nome-incrivel
```
Depois de ter criado a branch no prepositorio remoto com o comando acima; voce pode realizar os demais pushes simplesmente com o comando abaixo.
```shell
git push
```

## Mesclar o código de trabalho
Após todos enviarem as alterações iremos realizar os `Pull Requests` para integrar as páginas e concluir o projeto.
O `Pull Request` será realizado diretamente no `GitHub`.

# Um Ótimo Trabalho à todos

