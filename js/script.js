var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      time: 0,
      testo_COPYRIGHT: 'COPYRIGHT 2012-2015 AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS',
      // percorsi logo
      logo_nav: 'img/logo.png',
      logo_footer: 'img/logo-footer.png',
      // fine percorsi logo
      // struttra header e footer
      navbar: [
        {
          label: "HOME",
          numAncor: "_1",
        },
        {
          label: "ABOUT",
          numAncor: "_2",
        },
        {
          label: "SERVICES",
          numAncor: "_3",
        },
        {
          label: "WORK",
          numAncor: "_4",
        },
        {
          label: "ARTICLES",
          numAncor: "_5",
        },
      ],
      nav_btn: [
        {
          label: "GET QUOTE",
          numAncor: null,
        },
      ],
      footer: [
        {
          order: '1',
          title: null,
        },
        {
          order: '2',
          title: 'LATEST TWEETS',
        },
        {
          order: '3',
          title: 'CONTACT US TODAY',
        },
        {
          order: '4',
          title: 'FIND US',
        },
      ],
      // fine struttura header e footer
      // APi "inventate"
      tweet: [
        {
          numberID: null,
          icon: 'social-icon',
          name: 'ThemeFusion',
          account: '@Theme_Fusion',
          socialIcon: 'fab fa-twitter',
          postText: 'Do you need sublime WordPress hosting for your next website? Take advantage of exlusive partners offers that we have secured just for you, & laucnh your site in seconds with #avada on WP Engine hosting & get 30% Off this Black Friday bit.ly/3kjLLE2 #BlackFriday2020',
          postImg: 'social-post',
          like: 'far fa-heart',
          retweet: 'far fa-share-square',
          ora: '22h',
        },
      ],
      contact: [
        {
          icon: 'fas fa-globe',
          info: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA',
        },
        {
          icon: 'fas fa-home',
          info: 'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA',
        },
        {
          icon: 'fas fa-phone',
          info: '1.800.458.556 / 1.800.532.2112',
        },
        {
          icon: 'far fa-envelope',
          info: 'info@your-domain.com',
        },
        {
          icon: 'far fa-clock',
          info: 'Monday - Friday: 9:00 AM - 6:00 PM',
        },
        {
          icon: 'far fa-clock',
          info: 'Monday - Friday: 9:00 AM - 12:00 PM',
        },
      ],
      maps: [
        {
          city: 'Notting Hill',
          linkMaps: 'linkGoogle',
          img: 'map.png-Notti',
        }
      ],
      social: [
        {
          name: 'facebook',
          icon: 'fa-facebook-f',
          link: 'https://it-it.facebook.com/',
        },
        {
          name: 'twitter',
          icon: 'fa-twitter',
          link: 'https://twitter.com/?lang=it',
        },
        {
          name: 'youtube',
          icon: 'fa-youtube',
          link: 'hhttps://www.youtube.com/',
        },
        {
          name: 'instagram',
          icon: 'fa-instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      // fine APi "inventate"
    },
    // -------------------------------------------------------------------------
    methods: {
      timeUp: function() {
        setTimeout(()=>
         {
          this.time = 1;
        },300
        );
      },
      timeDown: function() {
        setTimeout(()=>
         {
          this.time = 0;
        },300
        );
      },
    },
    // -------------------------------------------------------------------------
  }
);
