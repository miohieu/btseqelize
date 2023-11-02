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
        res.status(201).send("Like thanh cong")

    } catch (err) {

        console.log(err)

        res.status(500).send(err)
    }
}


const likeByRes = async (req, res) => {

    const resId = +req.params.resID

    try {
        const result = await prisma.like_res.findMany({
            where: {
                res_id: resId
            }
        })
        if (result.length === 0) {
            throw new Error("Nha hang chua duoc like")
        }
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
}

const likeByUser = async (req, res) => {

    const uID = +req.params.userID

    try {
        const result = await prisma.like_res.findMany({
            where: {
                user_id: uID
            }
        })
        if (result.length === 0) {
            throw new Error("Khong tim thay user")
        }
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send("Loi")

    }
}

const rateRes = async (req, res) => {
    try {
        const body = req.body
        const date = new Date().toISOString();

        const data = {
            ...body,
            date_rate: date
        }
        console.log(data)
        const result = await prisma.rate_res.createMany({
            data: data
        }
        )
        res.status(201).send("da tao danh gia")

    } catch (err) {

        console.log(err)

        res.status(500).send(err)
    }
}

const rateByRes = async (req, res) => {

    const resId = +req.params.res_id

    try {
        const result = await prisma.rate_res.findMany({
            where: {
                res_id: resId
            }
        })
        if (result.length === 0) {
            throw new Error("Nha hang chua duoc danh gia")
        }
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
}

const rateByUser = async (req, res) => {

    const uid = +req.params.user_id

    try {
        const result = await prisma.rate_res.findMany({
            where: {
                user_id: uid
            }
        })
        if (result.length === 0) {
            throw new Error("Khong tim thay user")
        }
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
}
export { likeRes, likeByRes, likeByUser, rateRes , rateByRes, rateByUser}
