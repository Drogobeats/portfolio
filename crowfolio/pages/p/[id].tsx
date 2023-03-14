import { PrismaClient } from "@prisma/client"
import { GetServerSideProps } from "next"

const prisma = new PrismaClient()

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const post = await prisma.post.findUnique({
        where: {
        id: Number(params?.id),
        },
    })
    return {
        props: { post },
    }
    }