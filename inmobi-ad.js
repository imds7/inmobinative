(function () {
  var adDiv = document.getElementById("inmobi-ad");

  window._inmobi = window._inmobi || [];
  _inmobi.push({
    siteid: "10000148622", // Your Ad Unit ID
    slot: "inmobi-ad",
    success: function () {
      console.log("InMobi Native Ad Loaded Successfully");
    },
    failure: function () {
      console.log("Failed to Load InMobi Native Ad");
    }
  });

  var script = document.createElement("script");
  script.src = "https://sdk.inmobi.com/native/banner.js";
  document.body.appendChild(script);
})();
