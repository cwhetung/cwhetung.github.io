var results = [];
var toDos = [];

function checkCode() {
  var drawFunction = draw.toString();

  var classCalls = drawFunction.match(/new\s+Tree\(\s*\d+\s*,\s*\d+\s*\)/g);
  if (classCalls.length > 1) {
    results.push("✓ Multiple trees instantiated");
  } else {
    results.push("✗ You must instantiate multiples trees ");
  }

  var variableSaves = drawFunction.match(
    /[a-zA-Z_$][a-zA-Z_$0-9]*\s*=\s*new\s+Tree\(\s*\d+\s*,\s*\d+\s*\)/g
  );

  if (variableSaves.length > 1) {
    results.push("✓ Multiple tree instances saved to variables");
  } else {
    results.push("✗ You must save your Tree instances to variables");
  }

  var drawCalls = variableSaves.map((m) => {
    var varName = m.match(
      /([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=\s*new\s+Tree\(\s*\d+\s*,\s*\d+\s*\)/
    )[1];
    var matcher = new RegExp(`${varName}.draw\\(\\)`);

    return matcher.exec(drawFunction) && matcher.exec(drawFunction)[0];
  });

  if (drawCalls.filter((n) => n).length >= variableSaves.length) {
    results.push("✓ All trees are drawn.");
  } else {
    results.push("✗ not all trees are drawn.");
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