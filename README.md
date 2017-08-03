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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJEeWFuIEthc3R1dGFyYSIsInVzZXJuYW1lIjoiZHlhbmthc3R1dGFyYTE5MiIsImVtYWlsIjoiZHlhbmthc3R1dGFyYTE5MkBnbWFpbC5jb20iLCJ1cmxJbWciOm51bGwsImdlbmRlciI6bnVsbCwiYWRkcmVzcyI6bnVsbCwiY2l0eSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMTctMDgtMDNUMTQ6NTk6MDYuODczWiIsInVwZGF0ZWRBdCI6IjIwMTctMDgtMDNUMTQ6NTk6MDYuODczWiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNTAxNzczNTgzfQ.s1_FNvJ3YVVw84yJP--SJpd_fr254hgnyKjBFYpyQew",
    "cache-control": "no-cache",
    "postman-token": "f356f704-7353-bbcc-9e40-77c8a378d17c"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```