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
      'location',     // Localização
      'initiatives',   // Iniciativas
      'members',      // Membros, pessoas
      'schedule',     // Agenda
      'help',         // Como ajudar?
      'partners',     // Parceiros, apoio
      'contact'       // Contato
    ],

    // Use para traduzir os nomes das sessões ou mudar para algo que te sirva melhor
    labels: {
      about: "Quem somos?",
      location: "Localização",
      initiatives: "Iniciativas",
      members: "Membros",
      schedule: "Agenda",
      partners: "Apoio",
      contact: "Contato",
      help: "Como ajudar?"
    },

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