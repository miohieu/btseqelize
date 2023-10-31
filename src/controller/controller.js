import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

const likeRes = async (req, res) => {

    try {
        const body = req.body
        const date = new Date().toISOString();

        const data = {
            ...body,
            date_like: date
        }
        console.log(data)
        const result = await prisma.like_res.createMany({
            data: data
        }
        )
        res.status(201).send(result)

    } catch (err) {

        console.log(err)

        res.status(500).send(err)
    }
}


export { likeRes }
