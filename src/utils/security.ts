
import CryptoJS from 'crypto-js';

// Encryption key for local storage (in production, this should be derived from user session)
const ENCRYPTION_KEY = 'nutrition-app-key-2024';

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
};

export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption failed');
    return '';
  }
};

export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove potentially dangerous characters and HTML
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
    .slice(0, 1000); // Limit input length
};

export const validateNumericInput = (value: string, min = 0, max = 1000): number => {
  const num = parseFloat(value);
  if (isNaN(num) || num < min || num > max) {
    throw new Error(`Invalid numeric input. Must be between ${min} and ${max}`);
  }
  return num;
};

export const validateApiKey = (apiKey: string): boolean => {
  if (!apiKey || typeof apiKey !== 'string') return false;
  // Basic API key format validation (adjust based on actual Groq API key format)
  return apiKey.length >= 20 && /^[A-Za-z0-9_-]+$/.test(apiKey);
};

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limit: number;
  private windowMs: number;

  constructor(limit = 10, windowMs = 60000) { // 10 requests per minute by default
    this.limit = limit;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove expired requests
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.limit) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

export const aiChatRateLimiter = new RateLimiter(5, 60000); // 5 requests per minute
