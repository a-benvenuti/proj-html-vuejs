var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
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
      nav_logo: 'logo',
    },
    // -------------------------------------------------------------------------
    methods: {

    },
    // -------------------------------------------------------------------------
  }
);
