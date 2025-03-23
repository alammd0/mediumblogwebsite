import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@mkadevs/common";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();


userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();

        // validate input
        const { success } = signupInput.safeParse(body);

        if (!success) {
            return c.json({
                message: "Invalid input",
                error: signupInput.safeParse(body).error
            }, 400)
        }

        const user = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                name: body.name,
                password: body.password
            }
        });

        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET)


        return c.json({
            message: "User created successfully",
            data: user,
            jwt: token
        }, 200)
    }

    catch (err) {
        return c.json({
            message: "User not created",
            error: err
        }, 400)
    }
})


userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {

        const body = await c.req.json();

        // input validation
        const { success } = signinInput.safeParse(body);

        if (!success) {
            return c.json({
                message: "Invalid input",
                error: signinInput.safeParse(body).error
            }, 403)
        }

        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        })


        if (!user) {
            return c.json({
                message: "User not found",
            }, 403)
        }

        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET)


        return c.json({
            message: "User logged in successfully",
            data: user,
            jwt: token
        }, 200)
    }
    catch (err) {
        return c.json({
            message: "User not logged in",
            error: err
        }, 400)
    }
})