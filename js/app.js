CV = Ember.Application.create();

// modèle d'une expérience
CV.Experience = DS.Model.extend({
   // période
   date_de_debut : DS.attr('string'),
   date_de_fin : DS.attr('string'),
   periode : function() {
      if (this.get('date_de_fin') == null) {
         return this.get('date_de_debut') + " - " + "à présent";
      } else {
         return this.get('date_de_debut') + " - " + this.get('date_de_fin');
      }
   }.property('date_de_debut', 'date_de_fin'),

   // titre
   titre : DS.attr('string'),

   // résumé
   resume : DS.attr('string')
});

CV.Experience.FIXTURES = [ 
   {"id": 1, "titre": "Expé 1", "date_de_debut": "01/2010"},
   {"id": 2, "titre": "Expé 2", "date_de_debut": "01/2009", "date_de_fin": "12/2009"},
   {"id": 3, "titre": "Expé 3", "date_de_debut": "01/2008", "date_de_fin": "12/2008"},
];

CV.fixtureStore = DS.Store.create({
    revision : 4,
    adapter : DS.fixtureAdapter
});

CV.experienceController = Em.ArrayController.create({
    content : CV.fixtureStore.findAll(CV.Experience)
});

/**
var CV = Ember.Application.create();

// modèle d'une expérience
CV.Experience = Ember.Object.extend({
   // période
   date_de_debut : '',
   date_de_fin : '',
   periode : function() {
      if (!this.get('date_de_fin')) {
         return this.get('date_de_debut') + " - " + this.get('date_de_fin');
      } else {
         return this.get('date_de_debut') + " - " + "à présent";
      }
   }.property('date_de_debut', 'date_de_fin'),
   // titre
   titre : null,
   // résumé
   resume : null
});
 
// contrôleur des expériences
CV.experiencesController = Ember.ArrayController.create({
   content: [],

   add : function(titre) {
      var experience = CV.Experience.create({titre : titre});
      this.pushObject(experience);
   }
});
*/