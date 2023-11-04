** API LIST**


## like nha hang
api/restaurant/likeRes

## get danh sach like theo nha hang
api/restaurant/likes/restaurant/restaurant_id

## get danh sach like theo user 
api/restaurant/likes/user/:user_id

## danh gia nha hang
/api/restaurant/rate/rateRes

## get danh sach rate theo nha hang
api/restaurant/rate/user/:restaurant_id

## get danh sach rate theo user
api/restaurant/rate/user/:user_id

## unlike nha hang 
/api/restaurant/unlikeRes?user_id&res_id

## tao order
/api/order/create-order
body: {
    "user_id":int ,
    "amount": int,
    "food_id":int 
}

