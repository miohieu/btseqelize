export const orderCode = (max, min) => {
    return "ORD" + Math.floor(Math.random() * (max - min + 1))
}
