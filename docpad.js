module.exports = {

  prompts: false,

  // Aqui estão as variáveis que serão acessadas pelos templates
  templateData: {

    // Informações da ONG
    conf: {
      name: "Minha ong",
      description: "Descrição simples da ONG",
      // date: "November 15",
      // price: "$100",
      // venue: "Coco Bongo",
      address: "Boulevard Kukulcan, 30",
      city: "Minha Cidade",
      state: "Meu estado"
    },

    // Informações do site
    site: {
      theme: "default",
      url: "http://confboilerplate.com",
      googleanalytics: "UA-33656081-1"
    },

    // Sessões ativas do site
    // comente com '//' para desativar
    // Você também pode mudar a ordem de aparição no site
    sections: [
      'about',        // Quem somos?
      'initiatives',  // Iniciativas
      'help',         // Como ajudar?
      'members',      // Membros, pessoas
      'schedule',     // Agenda
      'contact',      // Contato
      'location',     // Localização
      'partners'      // Parceiros, apoio
    ],

    // Use para traduzir os nomes das sessões ou mudar para algo que te sirva melhor
    labels: {
      about: "Quem somos?",
      initiatives: "Iniciativas",
      help: "Como ajudar?",
      members: "Associados",
      schedule: "Agenda",
      contact: "Contato",
      location: "Localização",
      partners: "Apoio"
    },

    members: [
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      },
      {
        name: "Associado 1",
        position: "Presidente",
        photo: "img/profile.jpg",
        bio:"Bio",
        email: "email@email.com",
        twitter: "twitter-associado", //Ficando http://twitter.com/twitter-associado
        facebook: "fb-do-associado" //Ficando http://facebook.com/fb-do-associado
      }
    ],

    // List of Sponsors
    // sponsors: [
    //   {
    //     name: "Eventick",
    //     logo: "themes/yellow-swan/img/sponsor.png",
    //     url: "http://eventick.com.br"
    //   }
    // ],

    // List de parceiros e apoios
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};