## Sobre o Projeto

Requisitos para rodar o projeto:

- Git.
- Docker.

## Passos para execução

Após clonar o repositorio, abra a pasta do projeto
```
cd concessionaria
```

Clone o arquivo .env.example e crie o .env
```
cp .env.example .env
```

Edite o .env e altere os dados do banco para
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```

Rodar o comando docker
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

Subir o container
```
vendor/bin/sail up -d
```

Criar APP_KEY do projeto
```
vendor/bin/sail artisan key:generate
```

Instalar pacotes
```
vendor/bin/sail npm install
```

Popular base de dados
```
vendor/bin/sail migrate --seed
```

Subir apliacao php e js
```
vendor/bin/sail artisan serve

vendor/bin/sail run dev
```

## Imagem do Projeto

<img src="https://i.postimg.cc/nh4pztjC/concessionaria.png" alt="Imagem do projeto em execução">


