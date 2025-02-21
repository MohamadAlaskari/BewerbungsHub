document.addEventListener('DOMContentLoaded', () => {
  console.log("BewerbungsHub – Farbpaletten-Logik geladen!");

  // Palette-Daten (mit neuen Bildpfaden)
  const paletteData = {
    warmesblau: {
      themeClass: 'theme-warmesblau',
      images: [
        '/images/warmesblau1.png',
        '/images/warmesblau2.png',
        '/images/warmesblau3.png',
        '/images/warmesblau4.png'
      ]
    },
    blaugruen: {
      themeClass: 'theme-blaugruen',
      images: [
        '/images/blaugruen1.png',
        '/images/blaugruen2.png',
        '/images/blaugruen3.png',
        '/images/blaugruen4.png'
      ]
    },
    gruen: {
      themeClass: 'theme-gruen',
      images: [
        '/images/gruen1.png',
        '/images/gruen2.png',
        '/images/gruen3.png',
        '/images/gruen4.png'
      ]
    },
    blau: {
      themeClass: 'theme-blau',
      images: [
        '/images/blau1.png',
        '/images/blau2.png',
        '/images/blau3.png',
        '/images/blau4.png'
      ]
    },
    orange: {
      themeClass: 'theme-orange',
      images: [
        '/images/orange1.png',
        '/images/orange2.png',
        '/images/orange3.png',
        '/images/orange4.png'
      ]
    },
    rot: {
      themeClass: 'theme-rot',
      images: [
        '/images/rot1.png',
        '/images/rot2.png',
        '/images/rot3.png',
        '/images/rot4.png'
      ]
    },
    violett: {
      themeClass: 'theme-violett',
      images: [
        '/images/violett1.png',
        '/images/violett2.png',
        '/images/violett3.png',
        '/images/violett4.png'
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
