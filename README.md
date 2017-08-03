# marketplace-backend
Backend for marketplace with nodejs


## Auth

### Auth Register

#### Request

```
POST
```

```
http://localhost:3000/auth/register
```

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
POST
```

```
http://localhost:3000/auth/login
```

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

## Users

### Get All Users

Role : Super Admin dan Admin

#### Request

```
GET
```

```
http://localhost:3000/users
```

```
AJAX Settings:

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users",
  "method": "GET",
  "headers": {
    "token": "token genarate alsjdlaslhskfhsdflsd",
    "cache-control": "no-cache",
    "postman-token": "f356f704-7353-bbcc-9e40-77c8a378d17c"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

#### Response

```
[
	{
		"id":1,
		"name":"name",
		"email":"email@email.com"
		.....
	},
	{
		"id":1,
		"name":"name",
		"email":"email@email.com"
		.....
	}
]
```

### Get Users By Id

Role : All Role (Super Admin, Admin, User)

#### Request

```
GET
```

```
http://localhost:3000/users/:id
```

```
AJAX Settings:

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users/1",
  "method": "GET",
  "headers": {
    "token": "token genarate alsjdlaslhskfhsdflsd",
    "cache-control": "no-cache",
    "postman-token": "f356f704-7353-bbcc-9e40-77c8a378d17c"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

#### Response

```
{
    "id": 1,
    "name": "name",
    "phone_number": "1234567890",
    "username": "email",
    "password": "79818fa9e65f33dc2622e1bbd8f89779:252035b5cbb3b043a379e91d850d291f",
    "email": "email@email.com",
    "urlImg": "urlImg",
    "gender": "gender",
    "address": "address",
    "city": "city",
    "postal_code": "postal_code",
    "role_id": 3,
    "createdAt": "2017-08-03T14:25:18.092Z",
    "updatedAt": "2017-08-03T14:25:18.092Z",
    "Role": {
        "id": 3,
        "type": "User",
        "createdAt": "2017-05-04T19:43:48.271Z",
        "updatedAt": "2017-05-04T19:43:48.271Z"
    }
}
```


### Create User

Role : Super Admin

#### Request

```
POST
```

```
http://localhost:3000/users
```

```
{
	"name":"name",
	"email":"email@email.com",
	"password":"password",
	"phone_number":"1234567890",
	"role_id":2
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