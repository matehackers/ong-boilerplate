# ONG Boilerplate

![image](http://f.cl.ly/items/2i1m3z3i1a3Z0I1X472B/logo.jpg)

Uma iniciativa do [Matehackers](http://matehackers.org) e amigos para ajudar aqueles que querem construir sites para ONGs e instituições filantrópicas, mas não tem muito tempo para isso. Tudo baseado no projeto [conf-boilerplate](https://github.com/matehackers/ong-boilerplate).

## Índice

* [Veja o demo (Breve)](#)
* [Como funciona?](#como-funciona)
* [Primeiros passos](#primeiros-passos)
* [Estrutura](#estrutura)
* [Customização](#customizao)
* [Deploy](#deploy)
* [Contribuindo](#contribuindo)
* [Quem está por trás disso?](#quem-est-por-trs-disso)
* [Licença](#licena)

## Como funciona?

Nós usamos o [DocPad](https://github.com/bevry/docpad), um gerador estático em NodeJS, para criar esse modelo extremamente simples de customizar. Além disso, a hospedagem é gratuita via [Github Pages](http://pages.github.com) e você ainda pode usar seu próprio domínio *(mais informações sobre isso em [Deploy](#domnio-personalizado))*.

(No futuro planejamos facilitar mais opções de hospedagem gratuita)

Por padrão, definimos as seguintes seções:

* *About* (*Quem Somos*) - Para que você possa descrever o objetivo e público da sua ONG.
* *Initiatives* (*Iniciativas*) - Para descrever as iniciativas da sua ONG
* *Help* (*Como ajudar?*) - Liste maneiras que a sua ONG aceita ajuda e trabalho voluntário.
* *Location* (*Localização*) - Para que você possa exibir a localização através do Google Maps.
* *Members* (*Membros*) - Para que você possa listar informações sobre os participantes de sua ONG.
* *Schedule* (*Agenda*) - Para que você possa mostrar sua agenda de eventos (integrado ao Google Calendar).
* *Media* (*Multimídia*) - Inclua fotos e vídeos de suas atividades.
* *Partners* (*Apoio*) - Para listar grupos parceiros e apoiadores.

## Primeiros passos

Pré-requisitos: Instale o [Git](http://git-scm.com/downloads) e o [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

1. Instale [Git](http://git-scm.com/downloads) e [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

2. Abra seu terminal e instale o [DocPad](https://github.com/bevry/docpad) através do comando:

    [sudo] npm install -fg docpad@6.30

3. Clone o repositório:

    git clone git://github.com/matehackers/ong-boilerplate.git

4. Vá para pasta do projeto:

    cd ong-boilerplate

5. Instale todas as dependências:

    docpad install

6. E finalmente rode:

    docpad run

Agora você irá ver o site rodando em `localhost:9778` :D

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

<pre>
.
|-- out/
|-- src/
|   |-- documents
|   |-- files
|   |-- layouts
|   |-- partials
|-- docpad.js
|-- package.json
`-- publish.sh
</pre>

### out/

É onde os arquivos gerados são armazenados, uma vez que o DocPad tenha sido rodado. Porém, esse diretório se torna desnecessário no versionamento, por isso está ignorado ([.gitignore](https://github.com/matehackers/ong-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/matehackers/ong-boilerplate/blob/master/src/documents)

Contém o arquivo responsável por importar todas as seções da aplicação. Além disso contém o tema com todos seus arquivos como imagens, arquivos CSS e JS.

### [src/files](https://github.com/matehackers/ong-boilerplate/tree/master/src/files)

Possui o arquivo [CNAME](https://github.com/matehackers/ong-boilerplate/blob/master/src/files/CNAME) que indica o domínio personalizado que deve ser usado *(mais informações sobre como usar seu domínio próprio em [Deploy](#domnio-personalizado))*.

### [src/layouts](https://github.com/matehackers/ong-boilerplate/tree/master/src/layouts)

Contém o template padrão da aplicação.

### [src/partials](https://github.com/matehackers/ong-boilerplate/tree/master/src/partials)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/matehackers/ong-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.js](https://github.com/matehackers/ong-boilerplate/blob/master/docpad.js)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [package.json](https://github.com/matehackers/ong-boilerplate/blob/master/package.json)

Lista as dependências de módulos do NodeJS.

### [publish.sh](https://github.com/matehackers/ong-boilerplate/blob/master/publish.sh)

Shell Script responsável pela publicação do site via [Github Pages](http://pages.github.com).

## Customização

O projeto já vem com um template visual pronto, use-o à vontade, mas nós recomendamos que você crie seu próprio, a fim de colocar a própria cara da organização.

De qualquer forma, nós preparamos algo altamente customizável para você, portanto para maioria das alterações do projeto basta ir até o `docpad.js` e alterar o valor das variáveis.

### Informações básicas sobre a organização

Quer alterar o nome, endereço, cidade? É só mudar.

```
    conf: {
      name: "Minha ong",
      description: "Descrição simples da ONG",
      disqus: "ongboilerplate",
      googleCalendar: "lkcl6337orvldan0l52h0sfj4k@group.calendar.google.com",
      address: "Largo Jorn. Glênio Peres, Centro",
      city: "Porto Alegre",
      state: "RS"
    },
```

### Informações básicas sobre o site

Quer mudar a imagem de capa, código do Google Analytics ou o favicon? Vá em frente!

```
    site: {
      theme: "default",
      url: "http://ongboilerplate.com",
      googleanalytics: "UA-33656081-1"
    },
```

### Seções ativas

Mexendo nessa parte você pode escolher quais são as partes interessantes para aparecerem no seu site. Para esconder uma seção faça um comentário com '//'. Veja o exemplo abaixo:

```
    // Escondendo a sessão de membros e agenda
    sections: [
      'about',        // Quem somos?
      'initiatives',  // Iniciativas
      'help',         // Como ajudar?
      // 'members',      // Membros, pessoas
      // 'schedule',     // Agenda
      'contact',      // Contato
      'media',        // Midia(fotos, videos)
      'location',     // Localização
      'partners'      // Parceiros, apoio
    ],
```

Você ainda pode trocar a order em que eles aparecem na página e na navegação ao trocar a ordem das linhas!

### Labels (i18n)

Se você quiser usar palavras diferentes do padrão ou diferentes línguas
é só trocar o valor das labels correspondentes:

```
    labels: {
      about: "Quem somos?",
      initiatives: "Iniciativas",
      help: "Como ajudar?",
      members: "Associados",
      schedule: "Agenda",
      contact: "Contato",
      location: "Localização",
      partners: "Apoio",
      media: 'Multimídia'
    },
```

Você ainda pode usar esse objeto para definir outras labels que você gostaria de acessar nos seus templates.

### Agenda

### Iniciativas

### Membros

### Multimídia

### Lista de Parceiros/Apoio

Para adicionar qualquer parceiro ou apoiador da instituição, é só recorrer a variável `partners`.

```
partners: [
	name: "BrazilJS"
	logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
	url: "http://braziljs.org"
]
```

## Deploy

Nós não gostamos de centralizar o poder de deploy em uma pessoa, portanto utilizaremos o recurso de [Github Pages](http://pages.github.com) que ainda é gratuito. Para realizar o deploy basta rodar:

```
docpad deploy-ghpages
```

Espere alguns minutos até que o Github lhe envie um e-mail avisando que tudo ocorreu bem. Depois é só acessar: `http://seuUsuario.github.com/seuFork`

OBS: Lembre-se de remover o arquivo `CNAME` que está na pasta `src/files` do seu projeto, caso você queira utilizar a URL pré-definida pelo Github.

### Domínio personalizado

Caso você não queira utilizar o domínio do Github, é possível usar seu próprio com alguns passos.

1. Altere o arquivo `CNAME` que está na pasta `src/files` do seu projeto e preencha com o nome do seu domínio: `seuevento.com`. [Veja o exemplo](https://github.com/matehackers/ong-boilerplate/blob/master/src/files/CNAME).
2. Altere o DNS do seu domínio seguindo as [instruções do Github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### Como fazer Deploy sem utilizar Github Pages

Se você prefere utilizar seu próprio servidor para hospedar o site:

* Rode `docpad generate` na raíz do projeto.

Esse comando irá gerar uma pasta `out` contendo apenas arquivos estáticos, depois é só fazer o upload do conteúdo dessa pasta para sua hospedagem.

## Contribuindo

Se quiser enviar um pull request, por favor faça-o na branch `dev`.

* `master` contém a versão estável disso.
* `dev` contém as funcionalidades que estão em desenvolvimento.

## Quem está por trás disso?

Este trabalho foi desenvolvido pelo [Matehackers](http://matehackers.org) e amigos como parte de um [Random Hacks of Kindness](http://www.rhok.org/) e é baseado inteiramente (um fork) no trabalho do pessoal da [BrazilJS](http://braziljs.org/) com o [conf-boilerplate](https://github.com/braziljs/conf-boilerplate).

## Licença

[MIT License](http://braziljs.mit-license.org/)
