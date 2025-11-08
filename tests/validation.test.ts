import { describe, it, expect } from 'vitest';
import {
  validatePersonaName,
  validatePersonaContent,
  createPersonaSchema,
  chainPersonasSchema,
} from '../src/validation';

describe('Persona Name Validation', () => {
  describe('Valid names', () => {
    it('should accept alphanumeric names', () => {
      expect(validatePersonaName('professional')).toBe('professional');
      expect(validatePersonaName('coder123')).toBe('coder123');
    });

    it('should accept names with hyphens', () => {
      expect(validatePersonaName('innovation-expert')).toBe('innovation-expert');
    });

    it('should accept names with underscores', () => {
      expect(validatePersonaName('business_mgmt')).toBe('business_mgmt');
    });

    it('should accept mixed case', () => {
      expect(validatePersonaName('MyPersona')).toBe('MyPersona');
    });
  });

  describe('Invalid names - Path Traversal Prevention', () => {
    it('should reject path traversal with ../', () => {
      expect(() => validatePersonaName('../../../etc/passwd')).toThrow();
    });

    it('should reject absolute paths', () => {
      expect(() => validatePersonaName('/etc/passwd')).toThrow();
      expect(() => validatePersonaName('C:\\Windows\\System32')).toThrow();
    });

    it('should reject names with slashes', () => {
      expect(() => validatePersonaName('foo/bar')).toThrow();
      expect(() => validatePersonaName('foo\\bar')).toThrow();
    });

    it('should reject special characters', () => {
      expect(() => validatePersonaName('foo@bar')).toThrow();
      expect(() => validatePersonaName('foo.bar')).toThrow();
      expect(() => validatePersonaName('foo bar')).toThrow();
    });

    it('should reject empty names', () => {
      expect(() => validatePersonaName('')).toThrow('cannot be empty');
    });

    it('should reject names that are too long', () => {
      const longName = 'a'.repeat(51);
      expect(() => validatePersonaName(longName)).toThrow('too long');
    });
  });
});

describe('Persona Content Validation', () => {
  describe('Valid content', () => {
    it('should accept normal persona content', () => {
      const content = 'You are a professional assistant.';
      expect(validatePersonaContent(content)).toBe(content);
    });

    it('should accept multiline content', () => {
      const content = `You are a professional.\nYou speak formally.\nYou are concise.`;
      expect(validatePersonaContent(content)).toBe(content);
    });

    it('should accept content up to 50KB', () => {
      const content = 'a'.repeat(50000);
      expect(validatePersonaContent(content)).toBe(content);
    });
  });

  describe('Invalid content', () => {
    it('should reject content that is too short', () => {
      expect(() => validatePersonaContent('hi')).toThrow('too short');
    });

    it('should reject content larger than 50KB', () => {
      const content = 'a'.repeat(50001);
      expect(() => validatePersonaContent(content)).toThrow('too large');
    });
  });
});

describe('Schema Validation', () => {
  describe('createPersonaSchema', () => {
    it('should validate correct input', () => {
      const input = {
        name: 'professional',
        content: 'You are a professional assistant.',
      };
      const result = createPersonaSchema.parse(input);
      expect(result).toEqual(input);
    });

    it('should reject invalid name', () => {
      const input = {
        name: '../../../etc/passwd',
        content: 'You are a professional assistant.',
      };
      expect(() => createPersonaSchema.parse(input)).toThrow();
    });

    it('should reject missing fields', () => {
      expect(() => createPersonaSchema.parse({ name: 'test' })).toThrow();
      expect(() => createPersonaSchema.parse({ content: 'test' })).toThrow();
    });
  });

  describe('chainPersonasSchema', () => {
    it('should validate correct input', () => {
      const input = {
        personas: ['coder', 'reviewer'],
        initialInput: 'Write a function',
      };
      const result = chainPersonasSchema.parse(input);
      expect(result).toEqual(input);
    });

    it('should reject empty personas array', () => {
      const input = {
        personas: [],
        initialInput: 'test',
      };
      expect(() => chainPersonasSchema.parse(input)).toThrow();
    });

    it('should reject too many personas', () => {
      const input = {
        personas: Array(11).fill('test'),
        initialInput: 'test',
      };
      expect(() => chainPersonasSchema.parse(input)).toThrow();
    });

    it('should reject invalid persona names in array', () => {
      const input = {
        personas: ['coder', '../../../hack'],
        initialInput: 'test',
      };
      expect(() => chainPersonasSchema.parse(input)).toThrow();
    });
  });
});
