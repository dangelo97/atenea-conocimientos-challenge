/**
 * Generates a random email address with the domain @dangeloferrieri.com
 * @returns {string} - A random email address
 */
export const generateRandomEmail = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let emailLocalPart = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      emailLocalPart += characters[randomIndex];
    }
  
    return `${emailLocalPart}@dangeloferrieri.com`;
  };

export const generateName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let emailLocalPart = '';
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      emailLocalPart += characters[randomIndex];
    }
  
    return `Dangelo ${emailLocalPart}`;
  };  