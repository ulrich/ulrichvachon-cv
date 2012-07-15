App = Ember.Application.create();

//TECH
App.store = DS.Store.create({
    revision : 4,
    adapter : DS.fixtureAdapter
});

/**
 * MODELES
 */
App.Profil = DS.Model.extend({
	nom : DS.attr('string'),
	prenom : DS.attr('string'),
	titre : DS.attr('string'),
	compte_email : DS.attr('string'),
	compte_twitter : DS.attr('string'),
	date_naissance : DS.attr('string'),
	telephone : DS.attr('string'),
	ville_residence : DS.attr('string')
});

App.Profil.FIXTURES = [
   { "id": 1,
	 "nom": "VACHON",
	 "prenom": "Ulrich",
	 "titre": ["Développeur JAVA", "Scrum Master"],
	 "compte_email": "uvachon@reservoircode.net",
	 "compte_twitter": "twitter.com/ulrich",
	 "date_naissance": "23 septembre 1974",
	 "telephone": "06 22 07 79 34",
	 "ville_residence": "Poissy"
   }
];

//////////////////

// Experience
App.Experience = DS.Model.extend({
   date_de_debut : DS.attr('string'),
   date_de_fin : DS.attr('string'),
   titre : DS.attr('string'),
   resume : DS.attr('string'),

   periode : function() {
      if (this.get('date_de_fin') == null) {
         return this.get('date_de_debut') + " - " + "à présent";
      } else {
         return this.get('date_de_debut') + " - " + this.get('date_de_fin');
      }
   }.property('date_de_debut', 'date_de_fin')
});

App.Experience.FIXTURES = [
   { "id": 1,
	 "date_de_debut": "12/11",
	 "titre": "Développeur via Reservoir Code, chez Dagobert",
	 "resume": "Je suis intervenu en qualité de développeur sénior, afin d’accompagner une équipe de trois personnes sur un projet Java. Cette application est la refonte complète d’un site internet de gestion de compte en ligne, pour une banque française. Cette expérience m’a conforté dans le choix d’une stack JQuery/Spring MVC/CXF. Il s’agit d’une expérience d’autant plus enrichissante pour moi, car n’ayant jamais travaillé en Scrum au forfait."},
   { "id": 2,
     "date_de_debut": "03/11",
     "date_de_fin": "11/11",
     "titre": "Développeur, Scrum Master chez Finance Active",
     "resume": "Scrum Master et développeur au sein d’une équipe de trois personnes dédiée à la refonte globale d’une application de gestion et de valorisation du risque de change. L’application souffrant d’un manque de performance et quasi impossible à maintenir, nous avons redéveloppé entièrement une application, qui est à présent basée sur une approche DDD et la programmation fonctionnelle avec Tapestry 5."},
   { "id": 3,
     "date_de_debut": "04/07",
     "date_de_fin": "03/11",
     "titre": "Développeur, Scrum Master chez Vidal",
     "resume": "Responsable de projets Java SE, EE et Web au sein d’une équipe de 5 à 8 personnes. En tant que technical leader, mon rôle était d’apporter mon expérience en terme de qualité logicielle et de cohérences entres les projets front-office. En tant que Scrum Master, mon rôle était d’organiser et de diriger les sprints de développements, de livraisons et de maintenance, en prenant soin d’avoir une vision concrète et commune avec les Product Owner."},
   { "id": 4,
     "date_de_debut": "01/07",
     "date_de_fin": "04/07",
     "titre": "Développeur via Ideo Technologies chez AGF-AM",
     "resume": "Développement en XP d’une application de gestion de portefeuille monétaire et étude d’un refactoring de code commun dans un framework métier. Mission autant axée développement que collaboration, car beaucoup de codes devaient être mutualisés entre des projets similaires et donc des équipes."},
   { "id": 5,
     "date_de_debut": "10/06",
     "date_de_fin": "01/07",
     "titre": "Développeur via Ideo Technologies chez Cetelem",
     "resume": "Etat de l’art et réalisation d’un prototype basé sur le framework SweetDEV. Cette étude a permis de mettre en avant les avantages apportés par l’utilisation de l’IOC, la rupture de protocole et la taglib offerte par le socle technique. Nous avons profité de cette mission pour réécrire le module de gestion des fichiers de propriétés du framework."},
   { "id": 5,
     "date_de_debut": "06/06",
     "date_de_fin": "10/06",
     "titre": "Développeur via Ideo Technologies chez BNP SIG",
     "resume": "Développement d’une application de gestion de portefeuille client basée sur le framework SweetDEV/Hibernate. Réalisation en partenariat avec une équipe de 3 architectes techniques de Business Objects."},
   { "id": 6,
     "date_de_debut": "03/06",
     "date_de_fin": "06/06",
     "titre": "Développeur via Ideo Technologies chez BNP Banque Privée",
     "resume": "Quickstart et développement d’une application d’analyse de mandat basée sur le framework SweetDEV/Hibernate. Le but était principalement de conforter l’entité Private Bank du bon choix de ce socle technique. Cette mission m’a offert l’opportunité de diriger une petite équipe de deux développeurs et poussé à faire des choix d’architecture."},
   { "id": 7,
     "date_de_debut": "01/06",
     "date_de_fin": "03/06",
     "titre": "Développeur via Ideo Technologies chez Ericsson",
     "resume": "Conception/réalisation d’une application de reporting pour la plateforme de streaming SFR, basée sur le framework SweetDEV/Hibernate. Premier pas en gestion de projet."},
   { "id": 8,
     "date_de_debut": "04/05",
     "date_de_fin": "12/05",
     "titre": "Développeur chez Ideo Technologies",
     "resume": "Développements et maintenances au sein de la R&D des composants techniques du framework SweetDEV. Participation à la mise en place d’outils d’audit de code, de qualité logicielle ainsi que du serveur d’intégration continue. Participation à la conception et au développement du plugin Eclipse SweetDEV-Studio. Plus divers travaux collaboratif avec l’équipe de développement américaine de M7/NitroX."},
   { "id": 9,
     "date_de_debut": "04/01",
     "date_de_fin": "04/05",
     "titre": "Développeur chez XPR",
     "resume": "Développement en Java et sur client embarqué de type PSION/Palm, d’une application d’aide à l’expertise immobilière. Conception/réalisation de l’ensemble des couches applicatives. Puis, développements en Windev et Delphi de modules applicatifs sur d’autres produits axés ressources humaines."},
   { "id": 10,
     "date_de_debut": "07/00",
     "date_de_fin": "04/01",
     "titre": "Développeur chez Techniform",
     "resume": "Développement en Java et sur client embarqué de type PSION, d’une application d’aide à la saisie de menus pour la restauration collective. Réalisation du conduit de synchronisation et optimisations de code."}
];

//////////////////

// Competence
App.Competence = DS.Model.extend({
   langages: DS.attr('string'),
   frameworks: DS.attr('string'),
   librairies: DS.attr('string'),
   outils: DS.attr('string'),
   serveurs: DS.attr('string'),
   donnees: DS.attr('string'),
   ide: DS.attr('string'),
   os: DS.attr('string')
});

App.Competence.FIXTURES = [
   { "id": 1,
     "langages":
    	 ["Java",
    	  "XML",
    	  "SQL",
    	  "JavaScript/JQuery",
    	  "Shell",
    	  "Ruby",
    	  "AOP/Aspect",
    	  "Lisp/Clojure",
    	  "C",
    	  "Delphi"],
     "frameworks":
    	 ["Java EE 6/JSP/JSTL/Servlet API/EJB3/JPA",
    	  "Spring MVC",
    	  "Stuts2",
    	  "Tapestry 5",
    	  "Playframework",
    	  "SweetDEV",
    	  "Spring Security",
    	  "REST/Jersey",
    	  "SOAP/CXF",
    	  "Spring Core",
    	  "Hibernate Core/Search",
    	  "Lucene"],
     "librairies":
    	 ["Java SE 6/Swing/JPDA/JMX/RMI/JAXP/JDBC/JNI",
    	  ", GUAVA",
    	  ", SwingX",
    	  ", Velocity",
    	  ", DHTMLX",
    	  ", Amcharts",
    	  ", BIRT",
    	  ", Freemarker",
    	  ", Log4J",
    	  ", XStream",
    	  ", JUnit",
    	  ", TestNG",
    	  ", Mockito",
    	  ", Selenium",
    	  ", Commons",
    	  ", C3P0"],
     "outils":
    	 ["DDD",
    	  ", GIT",
    	  ", SVN",
    	  ", CVS",
    	  ", Cygwin",
    	  ", Maven",
    	  ", Ant",
    	  ", TeamCity",
    	  ", Hudson",
    	  ", Cruisecontrol",
    	  ", Nexus",
    	  ", Sonar",
    	  ", VisualVM",
    	  ", JMeter",
    	  ", Firebug",
    	  ", Regex"],
     "serveurs":
    	 ["Tomcat 6",
    	  "Jetty 6",
    	  "JBoss 5",
    	  "Weblogic 8",
    	  "WAS 6"],
     "donnees":
    	 ["MySQL 5",
    	  "SQLite 3",
          "H2",
          "Derby",
          "Firebird"],
     "ide":
    	 ["IntelliJ 12",
    	  "Eclipse 3",
    	  "Netbeans 5",
    	  "eTextEditor",
    	  "RubyMine"],
     "os":
    	 ["Windows/XP",
    	  "Linux/Ubuntu",
    	  "MaxOSX",
    	  "Open Solaris"]
   }
];

//////////////////

// Formation
App.Formation = DS.Model.extend({
   organisme: DS.attr('string'),
   diplome: DS.attr('string'),
   intitule: DS.attr('string'),
   option: DS.attr('string')
});

App.Formation.FIXTURES = [
   { "id": 1,
     "organisme": "AFORP",
     "intitule": "Bac Systèmes Mécaniques Automatisés" },
   { "id": 2,
     "organisme": "Paris 8",
     "intitule": "DEUG MASS" },
   { "id": 3,
     "organisme": "Paris 8",
     "intitule": "Licence Informatique"},
   { "id": 4,
     "organisme": "Paris 8",
     "intitule": "Maitrise Informatique",
     "option": "niveau" },
   { "id": 5,
     "organisme": "Ideo Technologies",
     "intitule": "SweetDEV Framework" },
   { "id": 6,
     "organisme": "Ideo Technologies",
     "intitule": "Hibernate" },
   { "id": 7,
     "organisme": "BEA",
     "intitule": "JSF" },
   { "id": 8,
     "organisme": "Valtech",
     "intitule": "Hardocre Java" },
   { "id": 9,
     "organisme": "Xebia",
     "intitule": "Java Performance Tuning",
     "option": "(KP)" }
];

/**
 * CONTROLEURS
 */
App.profilController = Ember.ArrayController.create({
	content: App.store.findAll(App.Profil)
});

//////////////////

App.experienceController = Ember.ArrayController.create({
    content: App.store.findAll(App.Experience)
});

//////////////////

App.competenceController = Ember.ArrayController.create({
	content: App.store.findAll(App.Competence)
});

App.formationController = Ember.ArrayController.create({
	content: App.store.findAll(App.Formation).toArray().reverse()
});
