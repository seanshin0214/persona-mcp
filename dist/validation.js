import { z } from 'zod';
// 파일명 검증 스키마 - 경로 순회 공격 방지
export const personaNameSchema = z
    .string()
    .min(1, 'Persona name cannot be empty')
    .max(50, 'Persona name too long (max 50 characters)')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Persona name can only contain letters, numbers, hyphens, and underscores');
// 컨텐츠 크기 제한 - DoS 방지
export const personaContentSchema = z
    .string()
    .min(10, 'Persona content too short (min 10 characters)')
    .max(50000, 'Persona content too large (max 50KB)');
// Tool 스키마 정의
export const createPersonaSchema = z.object({
    name: personaNameSchema,
    content: personaContentSchema,
});
export const updatePersonaSchema = z.object({
    name: personaNameSchema,
    content: personaContentSchema,
});
export const deletePersonaSchema = z.object({
    name: personaNameSchema,
});
export const suggestPersonaSchema = z.object({
    context: z.string().min(1).max(10000),
});
export const chainPersonasSchema = z.object({
    personas: z.array(personaNameSchema).min(1).max(10),
    initialInput: z.string().min(1).max(10000),
});
export const browseCommunitySchema = z.object({
    category: z.string().optional(),
});
export const installCommunityPersonaSchema = z.object({
    name: personaNameSchema,
});
// 검증 헬퍼 함수
export function validatePersonaName(name) {
    return personaNameSchema.parse(name);
}
export function validatePersonaContent(content) {
    return personaContentSchema.parse(content);
}
//# sourceMappingURL=validation.js.map