document.addEventListener('DOMContentLoaded', () => {
  console.log("BewerbungsHub – Farbpaletten-Logik geladen!");

  // Palette-Daten (mit neuen Bildpfaden)
  const paletteData = {
    warmesblau: {
      themeClass: 'theme-warmesblau',
      images: [
        '/images/warmesblue/warmesblue1.png',
        '/images/warmesblue/warmesblue2.png',
        '/images/warmesblue/warmesblue3.png',
        '/images/warmesblue/warmesblue4.png'
      ]
    },
    blaugruen: {
      themeClass: 'theme-blaugruen',
      images: [
        '/images/blaugruen/blaugruen1.png',
        '/images/blaugruen/blaugruen2.png',
        '/images/blaugruen/blaugruen3.png',
        '/images/blaugruen/blaugruen4.png'
      ]
    },
    gruen: {
      themeClass: 'theme-gruen',
      images: [
        '/images/gruen/gruen1.png',
        '/images/gruen/gruen2.png',
        '/images/gruen/gruen3.png',
        '/images/gruen/gruen4.png'
      ]
    },
    blau: {
      themeClass: 'theme-blau',
      images: [
        '/images/blue/blue1.png',
        '/images/blue/blue2.png',
        '/images/blue/blue3.png',
        '/images/blue/blue4.png'
      ]
    },
    orange: {
      themeClass: 'theme-orange',
      images: [
        '/images/orange/orange1.png',
        '/images/orange/orange2.png',
        '/images/orange/orange3.png',
        '/images/orange/orange4.png'
      ]
    },
    rot: {
      themeClass: 'theme-rot',
      images: [
        '/images/rot/rot1.png',
        '/images/rot/rot2.png',
        '/images/rot/rot3.png',
        '/images/rot/rot4.png'
      ]
    },
    violett: {
      themeClass: 'theme-violett',
      images: [
        '/images/violett/violett1.png',
        '/images/violett/violett2.png',
        '/images/violett/violett3.png',
        '/images/violett/violett4.png'
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
