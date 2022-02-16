function checkCode() {
  var results = [];
  var startX = 190;
  var startY = 50;
  var boat = new Boat(startX, startY, "purple", "orange");
  console.log();
  if (typeof boat.sail === "function") {
    results.push("✓ sail() function added");
    var xChange = 5;
    var yChange = 7;
    boat.sail(xChange, yChange);
    if (boat.x == startX + xChange) {
      results.push("✓ sail() works to the right");
    } else {
      results.push("✗ sail() should change the x position of the boat");
    }
    if (boat.y == startY + yChange) {
      results.push("✓ sail() works downards");
    } else {
      results.push("✗ sail() should change the y position of the boat");
    }
    boat.sail(-xChange, -yChange);
    boat.sail(-xChange, -yChange);

    if (boat.x == startX - xChange) {
      results.push("✓ sail() works to the left");
    } else {
      results.push("✗ sail() should change the x position of the boat");
    }
    if (boat.y == startY - yChange) {
      results.push("✓ sail() works upwards");
    } else {
      results.push("✗ sail() should change the y position of the boat");
    }
  } else {
    results.push("✗ You must add a sail() function to Boat");
  }

  console.log(results);
  document.getElementById("testResults").innerHTML = resultsHTML(results).join(
    "\n"
  );
}

function resultsHTML(results) {
  return results.map((res) => {
    if (res[0] == "✓") {
      return `<p style="background-color:PaleGreen">${res}</p>`;
    } else {
      return `<p style="background-color:LightCoral">${res}</p>`;
    }
  });
}
