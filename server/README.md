# API

## Tasks

```
GET /api/tasks
GET /api/tasks/1
POST /api/tasks
{
  "desc": "By some beer"
}
PATCH /api/tasks
{
  "completed": true
}
DELETE /api/tasks/122
```

## Users

```
GET /api/users
GET /api/users/12
GET /api/users?page=0&pageSize=10
DELETE /api/users/12
POST /api/users
{
  "firstName": "peter",
  "lastName": "cosemans",
  "age": 52,
  "email": "peter.cosemans@gmail.com",
  "role": "admin"
}

PUT /api/users/12
{
  "firstName": "peter",
  "lastName": "cosemans",
  "age": 52,
  "email": "peter.cosemans@gmail.com",
  "role": "admin"
}
```

## Products

```
GET /api/products
GET /api/products?page=0&pageSize=10
GET /api/products?sort=price
GET /api/products?sort=-price

GET /api/products/1

DELETE /api/products/12

POST /api/products
{
  "title": "my new product",
  "price": 9.99,
  "stocked": true,
  "desc": "just some text",
  "image": "https://dummyimage.com/300x300.jpg"
}

PUT /api/products/12
{
  "title": "my new product",
  "price": 9.99,
  "stocked": true,
  "desc": "just some text",
  "image": "https://dummyimage.com/300x300.jpg"
}
```

## Basket

```
GET /api/basket

DELETE /api/basket
DELETE /api/basket/product/46

POST /api/basket/product/1
{
  "quantity": 2
}

PATCH /api/basket/product/1
{
  "quantity": 10
}
```
