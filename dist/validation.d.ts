import { z } from 'zod';
export declare const personaNameSchema: z.ZodString;
export declare const personaContentSchema: z.ZodString;
export declare const createPersonaSchema: z.ZodObject<{
    name: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    content: string;
}, {
    name: string;
    content: string;
}>;
export declare const updatePersonaSchema: z.ZodObject<{
    name: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    content: string;
}, {
    name: string;
    content: string;
}>;
export declare const deletePersonaSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const suggestPersonaSchema: z.ZodObject<{
    context: z.ZodString;
}, "strip", z.ZodTypeAny, {
    context: string;
}, {
    context: string;
}>;
export declare const chainPersonasSchema: z.ZodObject<{
    personas: z.ZodArray<z.ZodString, "many">;
    initialInput: z.ZodString;
}, "strip", z.ZodTypeAny, {
    personas: string[];
    initialInput: string;
}, {
    personas: string[];
    initialInput: string;
}>;
export declare const browseCommunitySchema: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    category?: string | undefined;
}, {
    category?: string | undefined;
}>;
export declare const installCommunityPersonaSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare function validatePersonaName(name: unknown): string;
export declare function validatePersonaContent(content: unknown): string;
//# sourceMappingURL=validation.d.ts.map