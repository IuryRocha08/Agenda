# Instalação

Clone repositorio 
```
git clone https://github.com/IuryRocha08/Agenda.git
```

Criar imagem api
```
docker build -t agenda_api .
```

Iniciar containers 
- banco de dados
- servidor web
```
docker-compose up
```

# Acesso 
http://localhost:5000/pessoas.html