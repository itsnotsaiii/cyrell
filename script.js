const keysLayout = [
      ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Delete', 'Backspace'],
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Enter'],
      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
      ['Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'Menu', 'Control']
    ];

    const specialKeys = new Set([
      'Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control', 'Alt', 'Meta', 'Escape', 'Delete', 'Space', 'Menu'
    ]);

    const keySpans = {
      'Backspace': 2,
      'Tab': 1.5,
      'CapsLock': 2,
      'Enter': 2.5,
      'Shift': 2.5,
      'Control': 1.5,
      'Alt': 1.5,
      'Meta': 1.5,
      'Space': 5,
      'Escape': 1.5,
      'Delete': 1.5,
      'F1': 1, 'F2': 1, 'F3': 1, 'F4': 1, 'F5': 1,
      'F6': 1, 'F7': 1, 'F8': 1, 'F9': 1, 'F10': 1, 'F11': 1, 'F12': 1,
      'Menu': 1.5,
    };