document.addEventListener('DOMContentLoaded', () => {
  console.log("BewerbungsHub – Farbpaletten-Logik geladen!");

  // Palette-Daten (ohne Office, Graustufe und Gelb)
  const paletteData = {
    warmesblau: {
      themeClass: 'theme-warmesblau',
      images: [
        '/src/assets/images/warmesblau1.png',
        '/src/assets/images/warmesblau2.png',
        '/src/assets/images/warmesblau3.png',
        '/src/assets/images/warmesblau4.png'
      ]
    },
    blaugruen: {
      themeClass: 'theme-blaugruen',
      images: [
        '/src/assets/images/blaugruen1.png',
        '/src/assets/images/blaugruen2.png',
        '/src/assets/images/blaugruen3.png',
        '/src/assets/images/blaugruen4.png'
      ]
    },
    gruen: {
      themeClass: 'theme-gruen',
      images: [
        '/src/assets/images/gruen1.png',
        '/src/assets/images/gruen2.png',
        '/src/assets/images/gruen3.png',
        '/src/assets/images/gruen4.png'
      ]
    },
    blau: {
      themeClass: 'theme-blau',
      images: [
        '/src/assets/images/blau1.png',
        '/src/assets/images/blau2.png',
        '/src/assets/images/blau3.png',
        '/src/assets/images/blau4.png'
      ]
    },
    orange: {
      themeClass: 'theme-orange',
      images: [
        '/src/assets/images/orange1.png',
        '/src/assets/images/orange2.png',
        '/src/assets/images/orange3.png',
        '/src/assets/images/orange4.png'
      ]
    },
    rot: {
      themeClass: 'theme-rot',
      images: [
        '/src/assets/images/rot1.png',
        '/src/assets/images/rot2.png',
        '/src/assets/images/rot3.png',
        '/src/assets/images/rot4.png'
      ]
    },
    violett: {
      themeClass: 'theme-violett',
      images: [
        '/src/assets/images/violett1.png',
        '/src/assets/images/violett2.png',
        '/src/assets/images/violett3.png',
        '/src/assets/images/violett4.png'
      ]
    }
  };

  const paletteSelect = document.getElementById('paletteSelect');
  const bodyElement = document.body;
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  const img4 = document.getElementById('img4');

  function removeAllThemeClasses() {
    bodyElement.classList.remove(
      'theme-warmesblau',
      'theme-blaugruen',
      'theme-gruen',
      'theme-blau',
      'theme-orange',
      'theme-rot',
      'theme-violett'
    );
  }

  paletteSelect.addEventListener('change', (e) => {
    const selectedPalette = paletteData[e.target.value];
    removeAllThemeClasses();
    if (selectedPalette) {
      bodyElement.classList.add(selectedPalette.themeClass);
      img1.src = selectedPalette.images[0];
      img2.src = selectedPalette.images[1];
      img3.src = selectedPalette.images[2];
      img4.src = selectedPalette.images[3];
    }
  });
});
