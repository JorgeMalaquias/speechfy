## Rodando a aplicação via docker-compose

1. Para sua conveniência lhe foi fonercido arquivos .env para o back end e front end com informações sensíveis necessárias para a aplicação funcionar. Mova cada um para sua respectiva pasta, e dentro das pastas raízes (front e back) altere o nome do arquivo para somente ".env". Isso será importante para o docker-compose fazer uso dos arquivos.
2. Na primeira vez que for executar a aplicação execute neste diretório o comando "docker-compose build".
3. Após isso, execute o comando "docker-compose up" e a aplicação irá rodar. Nas próximas vezes que for executar a aplicação poderá pular o passo 2.

OBS: para consumir tanto a api via postman, thunderclient, entre outros, realizar isso via localhost. O front end também deve ser usado via localhost. Se tentar usar o front end pelo ip da network dele ocorrerá problemas de autenticação no firebase, impedindo a aplicação de funcionar.
