import { z } from "zod";

// signup inpput 
export const signupInput = z.object({
    username: z.string(),
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6).max(20),
})

// sigin input
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
})

// create post input
export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
})

// update Post Input
export const updatePostInput = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreatePostInput = z.infer<typeof createPostInput>
export type UpdatePostInput = z.infer<typeof updatePostInput>