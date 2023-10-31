import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

const likeRes = async (req, res) => {

    try {
        const data = req.body
        const result = await prisma.like_res.create({
            data: {
                ...data,
                date_like: Date.now()
            }
        }
        )
        res.status(201).send("Da like", result)

    } catch (err) {


        res.send(err)
    }
}


export { likeRes }
