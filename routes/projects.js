var express = require("express");
var router = express.Router();

/* GET projects listing. */
router.get("/", function (req, res, next) {
  // projects data object
  res.render("projects", {
    projects: [
      {
        projectName: "Image Gallery Application",
        projectDescription:
          "A web-app based on HTML, CSS and JS which have beautiful graphics to show flowers.",
        projectImage: "/images/laptop-g07bca914f_1280.png",
        link: "https://64b083a25ad959520e4cdd95--papaya-froyo-0cf997.netlify.app/",
      },
      {
        projectName: "ToDo Web app",
        projectDescription:
          "A web-app based on Express and React which stores the tasks you have todo.",
        projectImage: "/images/laptop-g07bca914f_1280.png",
        link: "https://64cc26d720393422cda4aa78--sparkly-chaja-8923f5.netlify.app/",
      },
      {
        projectName: "IOT Project",
        projectDescription:
          "Arduino based project: Room Temperature indicator and regulator",
        projectImage: "/images/laptop-g07bca914f_1280.png",
        link: "https://www.tinkercad.com/things/3NDR1lch29g-final-project",
      },
      {
        projectName: "Pizza Website",
        projectDescription:
          "A ecommer-app based on HTML, CSS and JS. Themed on Pizza orders and pizza website. ",
        projectImage: "/images/laptop-g07bca914f_1280.png",
        link: "https://diyapatel190.github.io/COMP1002/",
      },
    ],
  });
});

module.exports = router;
