import { Key } from "react";
import { GetServerSideProps } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllPosts(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const posts = await prisma.post.findMany({
        select : {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    console.log (posts)

    return (
        <main>
            <h1>All posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </main>
        
    )
}
 