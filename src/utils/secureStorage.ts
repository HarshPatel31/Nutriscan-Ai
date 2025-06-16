
import { encryptData, decryptData } from './security';

export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const encryptedValue = encryptData(value);
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Failed to store data securely');
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) return null;
      return decryptData(encryptedValue);
    } catch (error) {
      console.error('Failed to retrieve data securely');
      return null;
    }
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  }
};
