let n = 7; // height

for (let row = 0; row < n; row++) {
  let line = "";

  // ===== A =====
  for (let col = 0; col < n; col++) {
    if (
      (row === 0 && col > 0 && col < n - 1) || // top line
      row === Math.floor(n / 2) ||             // middle line
      col === 0 && row > 0 || col === n - 1 && row > 0
    ) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "   "; // gap

  // ===== T =====
  for (let col = 0; col < n; col++) {
    if (row === 0 || col === Math.floor(n / 2)) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "   "; // gap

  // ===== I =====
  for (let col = 0; col < n; col++) {
    if (row === 0 || row === n - 1 || col === Math.floor(n / 2)) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "   "; // gap

  // ===== Y =====
  for (let col = 0; col < n; col++) {
    if (
      (row < Math.floor(n / 2) && (col === row || col === n - 1 - row)) ||
      (row >= Math.floor(n / 2) && col === Math.floor(n / 2))
    ) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "   "; // gap

  // ===== A =====
  for (let col = 0; col < n; col++) {
    if (
      (row === 0 && col > 0 && col < n - 1) || // top line
      row === Math.floor(n / 2) ||             // middle line
      col === 0 && row > 0 || col === n - 1 && row > 0
    ) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  console.log(line);
}
