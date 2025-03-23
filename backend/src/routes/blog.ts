import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

type jwtPayload = {
    id: string
}

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string,
    },
    Variables: {
        userId: string,

    }
}>();


blogRouter.use("/*", async (c, next) => {
    const AuthHeader = c.req.header("Authorization") || "";

    try {
        const token = await verify(AuthHeader, c.env.JWT_SECRET) as jwtPayload;

        if (token) {
            c.set("userId", token.id);
            return next();
        }

        return c.json({ message: "Unauthorized" }, 401);

    } catch (err) {
        return c.json({ message: "Invalid or expired token" }, 401);
    }
});


blogRouter.post("/create-post", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {

        const body = await c.req.json();
        const autherId = c.get("userId");
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(autherId)
            }
        })

        return c.json({
            message: "Blog created successfully",
            data: blog,
        }, 201)

    }
    catch (err) {
        return c.json({
            message: "Error creating blog",
        }, 500)
    }
})


blogRouter.put("/update-post", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {

        const body = await c.req.json();
        const autherId = c.get("userId");
        const blog = await prisma.post.update({
            where: {
                id: body.id
            },

            data: {
                title: body.title,
                content: body.content,
                authorId: Number(autherId)
            }
        })

        return c.json({
            message: "Blog updated successfully",
            data: blog
        }, 202)

    }
    catch (err) {
        return c.json({
            message: "Error updating blog",
        }, 500)
    }
})

blogRouter.get("/all-post", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.post.findMany({})
        return c.json({
            message: "All blogs",
            data: blogs
        })
    }
    catch (err) {

        return c.json({
            message: "Error while feching all blogs"
        })

    }
})


blogRouter.get("/single-post/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const id = c.req.param("id");
        const blog = await prisma.post.findFirst({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            message : "Fetched blog by autherId",
            data : blog
        })
    }
    catch(err){
        message : "Error while feching blog"
    }
})