# marketplace-backend
Backend for marketplace with nodejs


## Auth

### Auth Register

#### Request

```
{
	"name":"name",
	"email":"email@email.com",
	"password":"password",
	"phone_number":"1234567890"
}
```

#### Response

```
{
    "id": 13,
    "name": "name",
    "username": "email",
    "email": "email@email.com",
    "phone_number": "1234567890",
    "success": true,
    "message": "New User is Created"
}
```

### Auth Login

#### Request

```
{
	"email":"email@email.com",
	"password":"password"
}
```

#### Response

```
{
    "id": 13,
    "name": "name",
    "username": "email",
    "email": "email@email.com",
    "urlImg": null,
    "gender": null,
    "address": null,
    "city": null,
    "postal_code": null,
    "createdAt": "2017-08-03T14:59:06.873Z",
    "updatedAt": "2017-08-03T14:59:06.873Z",
    "role": "User",
    "token": "genarate token xlalshuajsn",
    "success": true,
    "message": "Login Success"
}
```