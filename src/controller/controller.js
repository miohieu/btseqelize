import { PrismaClient } from "@prisma/client"
import { orderCode } from "../helper/orderCode.js";


const prisma = new PrismaClient()

const likeRes = async (req, res) => {

    try {
        const body = req.body
        const date = new Date().toISOString();

        const data = {
            ...body,
            date_like: date
        }
        const isLike = await prisma.like_res.findFirst(
            {
                where: {
                    user_id: body.user_id,
                    res_id: body.res_id
                }
            }
        )

        if (isLike) {
            await prisma.like_res.deleteMany({
                where: {
                    user_id: body.user_id,
                    res_id: body.res_id
                }
            })
            res.status(200).send("Unlike thanh cong")
            return

        }
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

const unlikeRes = async (req, res) => {
    const { user_id, res_id } = req.query
    try {
        await prisma.like_res.deleteMany({
            where: {
                user_id: +user_id,
                res_id: +res_id
            }
        })
        res.status(201).send("unliked")
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
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
        const result = await prisma.rate_res.createMany({
            data: data
        }
        )
        res.status(201).send("da tao danh gia")

    } catch (err) {


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

const createOrder = async (req, res) => {
    try {
        const body = req.body

        let isCode = true
        let code = 1
        do {
            code = orderCode(100, 1000)
            isCode = await prisma.orders.findFirst({
                where: {
                    code: code
                }
            })

        } while (isCode);


        const data = {
            ...body,
            code
        }

        const result = await prisma.orders.create(
            { data: data }
        )
        res.send(result)

    } catch (error) {
        res.status(500).send(error)

    }
}
export { likeRes, createOrder, unlikeRes, likeByRes, likeByUser, rateRes, rateByRes, rateByUser }
