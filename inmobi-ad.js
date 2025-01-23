<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>InMobi Native Ad Test</title>
</head>
<body>
  <h1>InMobi Native Ad Test</h1>
  <div id="inmobi-ad-container" style="width: 100%; max-width: 320px; margin: auto;"></div>
  
  <script>
    // InMobi ad setup
    window._inmobi = window._inmobi || [];
    _inmobi.push({
      siteid: "10000148622", // Replace with your InMobi Ad Unit ID
      slot: "inmobi-ad-container", // The div container where the ad will render
      success: function () {
        console.log("InMobi Native Ad Loaded Successfully");
      },
      failure: function (err) {
        console.error("InMobi Native Ad Failed to Load", err);
      }
    });

    // Load the InMobi SDK
    var script = document.createElement("script");
    script.src = "https://sdk.inmobi.com/native/banner.js";
    script.async = true;
    document.head.appendChild(script);
  </script>
</body>
</html>
