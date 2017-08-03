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


### Update User

Role : All (SuperAdmin, Admin, User)

#### Request

```
PUT
```

```
http://localhost:3000/users/:id
```

```
Ajax Settings :

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users/9",
  "method": "PUT",
  "headers": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJ1c2VybmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AZW1haWwuY29tIiwidXJsSW1nIjoiaHR0cDovL2ltZy5jb20iLCJnZW5kZXIiOiJNYW4iLCJhZGRyZXNzIjoibm4iLCJjaXR5Ijoibm4iLCJwb3N0YWxfY29kZSI6IjEyMzQ1IiwiY3JlYXRlZEF0IjoiMjAxNy0wOC0wM1QxNzowNToyNS41NjRaIiwidXBkYXRlZEF0IjoiMjAxNy0wOC0wM1QxNzowNToyNS41NjRaIiwicm9sZSI6IlN1cGVyQWRtaW4iLCJpYXQiOjE1MDE3ODAwOTl9.R18h0Jj7PwqJLgYh_SgM908zTCHxrZUEQ9WeBlitO1Q",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "4a05dd32-b446-16f1-d45e-55cb46b5628e"
  },
  "processData": false,
  "data": "{\n\t\"name\":\"nama 1\",\n\t\"email\":\"email5@email.com\",\n\t\"password\":\"password\",\n\t\"phone_number\":\"1234567890\",\n\t\"role_id\":2\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

#### Response

```
{
    "id": 9,
    "name": "",
    "username": "email5",
    "email": "email5@email.com",
    "phone_number": "1234567890",
    "urlImg": null,
    "gender": null,
    "address": null,
    "city": null,
    "postal_code": null,
    "updatedAt": "2017-08-03T17:26:31.127Z",
    "role": "Admin",
    "success": true,
    "message": "User has been updated"
}
```

### Delete User

Role : Admin

#### Request

```
DELETE
```

```
http://localhost:3000/users/:id
```

```
AJAX Settings:

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users/9",
  "method": "DELETE",
  "headers": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImFkbWluMTIiLCJ1c2VybmFtZSI6ImFkbWluMTIiLCJlbWFpbCI6ImFkbWluMTJAZW1haWwuY29tIiwidXJsSW1nIjoiaHR0cDovL2ltZy5jb20iLCJnZW5kZXIiOiJNYW4iLCJhZGRyZXNzIjoibm4iLCJjaXR5Ijoibm4iLCJwb3N0YWxfY29kZSI6IjEyMzQ1IiwiY3JlYXRlZEF0IjoiMjAxNy0wOC0wM1QxNzowNToyNS41NjRaIiwidXBkYXRlZEF0IjoiMjAxNy0wOC0wM1QxNzowNToyNS41NjRaIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNTAxNzgxMzIwfQ.PaG-iy9unR-shAVZ44LZ14u6_j3LClDY8RerzR5czMw",
    "cache-control": "no-cache",
    "postman-token": "9bc1a22f-1c51-bd7f-fc28-c54b3e32e2e6"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

#### Response

```
{
    "id": "9",
    "success": true,
    "message": "User has been Delete"
}
```