define(["JS"], function(JS) {
  var loader = JS.getLoader();

  function css(file) {
    return "assets/css/" + file + ".css";
  }

  console.log(loader);

  loader.addConfig({
    // External Configured Object
    "#moveable": {
      extensions: ["extensions/mainDemo"],
      styles: [css("main"), {
        href: css("moreStyles"),
        media: "all"
      }],
      callback: function (mainDemo) {
        console.log(arguments)
      }
    },
    
    // Multiple Callbacks, Extensions optional if code is very small
    "#otherElement": [{
      extensions: [],
      callback: function() {
        console.log("notMain loaded");
      }
    }, {
      extensions: [],
      callback: function() {
        console.log("notMain loaded");
      }
    }]
  }).addConfig({
    
    // Extends Config from above, callback optional
    "#otherElement": {
      extensions: [],
      callback: function() {
        console.log("This extends the given config");
      }
    }
    
    // Load your Configuration whenever you want
  }).load();
  
  // Bonus: The Extensionloader is instanciable, so you can load another codeblock whenever you need it in you app
});