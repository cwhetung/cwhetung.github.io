function checkCode() {
  var results = [];
  var classCode = Coin.toString();
  var constructorMatch = classCode.match(/constructor\s*\(.*\)/g);
  if (constructorMatch) {
    results.push("✓ Constructor function added");
  } else {
    results.push("✗ You must add a constructor() to Coin ");
  }
  var constructorArgumentMatch = classCode.match(
    /constructor\s*\(\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*,\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*,\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*,\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*\)/g
  );

  if (constructorArgumentMatch) {
    results.push("✓ Constructor function has 4 inputs");
  } else {
    results.push("✗ Your constructor should have four inputs ");
  }

  var testCoin = new Coin(178, 479, "purple", 381);
  if (testCoin.x == 178) {
    results.push("✓ x Property is set correctly");
  } else {
    results.push(
      "✗ x property is not set correctly. Set it in the constructor using this.x = x"
    );
  }

  if (testCoin.y == 479) {
    results.push("✓ y Property is set correctly");
  } else {
    results.push(
      "✗ y property is not set correctly. Set it in the constructor using this.y = y"
    );
  }

  if (testCoin.color == "purple") {
    results.push("✓ color Property is set correctly");
  } else {
    results.push(
      "✗ color property is not set correctly. Set it in the constructor using this.color = color"
    );
  }
  if (testCoin.value == 381) {
    results.push("✓ value Property is set correctly");
  } else {
    results.push(
      "✗ value property is not set correctly. Set it in the constructor using this.value = value"
    );
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
