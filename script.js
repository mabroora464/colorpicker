(() => {
    const colorPicker = document.getElementById('colorPicker');
    const colorCode = document.getElementById('colorCode');
    const infoText = document.getElementById('infoText');

    function updateDisplay(color) {
      colorCode.textContent = color.toUpperCase();
      colorCode.classList.remove('visible');
      infoText.classList.remove('visible');
      // Trigger fade-in animation by reapplying class after short delay
      setTimeout(() => {
        colorCode.classList.add('visible');
        infoText.classList.add('visible');
      }, 20);
    }

    colorPicker.addEventListener('input', e => {
      updateDisplay(e.target.value);
    });

    // Initialize display
    updateDisplay(colorPicker.value);
  })();