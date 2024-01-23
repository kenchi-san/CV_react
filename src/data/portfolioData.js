export const portfolioData = [

    {
        id: 1,
        name: 'chalet & caviar',
        languages: ['wordpress'],
        languagesIcons: ['fab fa-wordpress'],
        // source: '',
        site: 'https://www.chalet.hugo-charon.fr/',
        info: [{
            version:'',
            resume: 'site wordpress de vente ou de location de châlet de luxe'
        }],
        picture: './media/chalet_wordpress.jpg'
    },
    {
        id: 2,
        name: 'snowtricks',
        languages: ['php','javascript', 'symfony', 'bootstrap'],
        languagesIcons: ['fab fa-js', 'fab fa-css3-alt', 'fab fa-symfony', 'fab fa-bootstrap'],
        source: 'https://github.com/kenchi-san/snowTricks',
        site: 'https://snowtricks.hugo-charon.fr/',
        info: [{
            version: [' symfony 5.4 ', ' javascript ES6 ', ' bootstrap 5 '],
            resume: 'création d\'un annuaire des figures de snowboard avec leurs gestions et un espace de discussion commun à toutes '
            }],
        picture: './media/snowtricks.jpg'
    },
    {
        id: 3,
        name: 'swahilisa',
        languages: ['php','symfony', 'bootstrap'],
        languagesIcons: ['fab fa-symfony', 'fab fa-bootstrap', 'fab fa-php'],
        source: 'https://github.com/kenchi-san/association',
        site: 'https://swahilisa.hugo-charon.fr/',
        info: [{

            version: [' Symfony 4.4 ',' bootstrap 4 '],
            resume: 'création d\'un site pour une association entièrement modifiable dans le back-office'
        }],
        picture: './media/association_swahilisa.jpg'
    },
    {
        id: 4,
        name: 'billetterie du louvre',
        languages: ['symfony', 'bootstrap'],
        languagesIcons: ['fab fa-php', 'fab fa-css3-alt', 'fab fa-symfony', 'fab fa-bootstrap'],
        source: 'https://github.com/kenchi-san/louvre-version-s',
        site: 'https://louvre.hugo-charon.fr/',
        info: [{

            version: ['Symfony 3.4 ',' bootstrap 4'],
            resume: 'gestion des tarifs (tarif préférentiel selon l\'âge), ' +
                ' une mise en place de contraintes personnalisées (jours fériers, week-end, limite de place etc..., ' +
                ' gestion de strype, ' +
                ' et l\'envoi d\'un mail de confirmation pour la réservation'
        }],
        picture: './media/musee_du_louvre.jpg',
    },
    {
        id: 5,
        name: 'blog',
        languages: ['php', 'bootstrap'],
        languagesIcons: ['fab fa-php', 'fab fa-bootstrap'],
        source: 'https://github.com/kenchi-san/blog-pro',
        site: 'http://blog.hugo-charon.fr/',
        info: [{

            version: [' php 5.6',' bootstrap 4'],
            resume: 'création d\'un blog avec la notion de CRUD, un back-office et d\'un repporting'
        }],
        picture: './media/blog.jpg'
    },
    {
        id: 6,
        name: 'CV',
        languages: ['scss', 'react'],
        languagesIcons: ['fab fa-js', 'fab fa-css3-alt', "fab fa-react"],
        info: [{

            version: ' version 16 de react',
            resume: 'utilisation des hooks (usestate et useEffect)',
        }],

        picture: './media/cv_react.jpg'
    },

    // {
    //   id: 7,
    //   name: '',
    //   languages: ['wordpress'],
    //   languagesIcons: ['fab fa-wordpress'],
    //   source: '',
    //   site: 'provins.hugo-charon.fr',
    //   info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    //   picture: './media/chalet_wordpress.jpg'
    // },
]