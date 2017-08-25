# API Design

## SOAP

SOAP is a messaging protocol that allows computers to communicate using Hypertext Transfer Protocol (HTTP) and Extensible Markup Language (XML) messages. SOAP  was created by Microsoft, to replace DCOM and CORBA, which relied on binary messaging instead. Though SOAP is known to communicate over HTTP, it can be used with out protocols. SOAP is still heavily used by Salesforce and PayPal.

SOAP is not widely used because :
1. It is slower than other types of messaging protocos, including some that it was supposed to replace like CORBA
2. SOAP has different levels of support based on the programming language ( Python and PHP do not have strong support)
3. There tends to be a firewall latency when using HTTP, becuase firewalls cant tell the difference between HTTP in a Web broswer and HTTP within SOAP


## Web Authentication (optional)

Authentication: When a server needs to know who is accessing the application/site. User has to prove identification using a username and password, retina scans, finger prints and etc

Authorization: When a server determines if the user as permission to access certain files and resources. Usually used with Authentication, so the server can pair identites with permisions.


### OAuth2
OAuth2 is an authorization framework that provides authorization flows for web desktop and mobile applications. Everyday OAuth2 examples: GitHub and Facebook.

OAuth2 Roles:

1. Resource Owner : grants access to a protected resource
2. Client : the application requesting access to the protected resource on behalf of the resource owner
3. Resource Server : the server hosting the protected resource
4. Authorization Server : the server that is issuing access tokens to the client

Grant Types:

#### 1. Authorization Code:

First, the Client will redirect the user to the Authorization Server with the following parameters:

`response type`
`client_id`
`redirect_uri`
`scope`

The format will look something like:
`https://microsoft.com/v1/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=CALLBACK_URL&scope=read`

Once these parameters are validated by the Authorization Server, the user will login and approve the the client.  Once the client is approved, the user is redirected back to the redirect URI with a authorization code. Like this:
`https://microbook.com/callback?code=AUTHORIZATION_CODE`

The Client will not do a POST request to the authorization server with the following parameters:

`grant type` 
`client_id`
`client_secret`
`redirect_uri`
`code` (authorization code from earlier)

`https://microsoft.com/v1/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=CALLBACK_URL`

The Authorization Server will respond with a JSON object containing:

`token_type`
`expires_in`
`access_token`
`refresh_token`

```
{
    "access_token":"ACCESS_TOKEN",
    "token_type":"bearer",
    "expires_in":2592000,
    "refresh_token":"REFRESH_TOKEN",
    "scope":"read",
    "uid":100101,
    "info":
        {
            "name":"Mark E. Mark",
            "email":"mark@thefunkybunch.com"
        }
}
```
![Diagram](https://assets.digitalocean.com/articles/oauth/auth_code_flow.png)

#### 2. Implicit:

The Implicit Grant is very similar to the Authorization Code grant except two differences:
1. It does not store a client secret because storage of single page web apps are more accessible
2. The Authorization Server returns the access token, rather than an authorization code

First, the Client will redirct the user to the Authorization server with the following parameters:


`response type`
`client_id`
`redirect_uri`
`scope`

The format will look something like:
`https://microsoft.com/v1/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=CALLBACK_URL&scope=read`

Once these parameters are validated by the Authorization Server, the user will login and approve the the client.  Once the client is approved, the user is redirected back to the Authorization server witht he following parameters:

`token_type`
`expires_in`
`access_token`

In the backend, there will be a script running that will extract the access token from the URI and passes it to the web application for full authorization.

![Diagram](https://assets.digitalocean.com/articles/oauth/implicit_flow.png)

#### 3. Resource Owner Password Credentials

The Client will ask the user for their authorization credentials (ex. username & password). This should only be used if the application is owned by a service or a desktop application.

The Client will send a POST request to the Authorization Server with the following parameters:
`grant_type`
`client_id`
`client_secret`
`username`
`password`

`https://microsoft.com/token?grant_type=password&username=USERNAME&password=PASSWORD&client_id=CLIENT_ID`

If the username and password are correct, the authorization server responds with a JSON object:

```
{
    "access_token":"ACCESS_TOKEN",
    "token_type":"bearer",
    "expires_in":2592000,
    "refresh_token":"REFRESH_TOKEN"
}

```

And the Client is authorized!

#### 4. Client Credentials 

The Client Credentials grant is the simplest is usually only good for machine to machine authentication or giving an application access to its own services.

The Client sends a POST request to the Authorization Server with the following parameters:
`grant_type`
`client_id`
`client_secret`

`https://microsoft.com/token?grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET`

If the client id and client secret are correct, the Authorization Server will respond with a JSON object:

```
{
    "access_token":"ACCESS_TOKEN",
    "token_type":"bearer",
    "expires_in":2592000,
}

```

And the Client is authorized!

### JSON Web Token

Definition:
    A JSON Web Token (JWT) is a JSON object that is defined in RFC 7519 as a safe way to represent a set of information between two parties. The token is composed of a header, a payload, and a signature.
    `header.payload.signature`

Example on usage:
![JWT](https://cdn-images-1.medium.com/max/1600/1*SSXUQJ1dWjiUrDoKaaiGLA.png)

#### Header of a JWT:
Contains the information on how JWT signature should be computed
typ: specifies object is a JWT and alg specifies hasing algorithm

```
{
    "typ": "JWT",
    "alg": "HS256"
}
```

#### Payload of the JWT:
Stores the data of the JWT, i.e. user information. You can put as many values as you would like in the payload

```
{
    "userId": "b08f86af-35da-48f2-8fab-cef3904660bd"
}
```

#### Signature of the JWT:
The signature is created with the following code:

```
data = base64urlEncode( header ) + “.” + base64urlEncode( payload )
signature = Hash( data, secret );
```

It encodes the header and the payload and then adds the secret. The application server receives the secret key from the authentication server when the application sets up its authentication process. How the values are encoded and the secret is added is based on the hashing algorithm named in the header.



An example of a JWT:

```
// JWT Token
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ.-xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM
```

#### Warning

JWT is not to secure data but rather to prove that data was sent.

## REST
REST: Representational State Transfer
In 2000, Roy Fielding defined REST in his PhD dissertation at UC Irvine.

Favorite definition:
    REST is any interface between systems using HTTP to obtain data and generate operations on those data in all possible formats, such as XML and JSON

### Basic concepts of REST

- All objects are manipulated through an URI. The URI is the only way to access resources using REST.
- Each time a request is made to a server, the server will return a response. Based off the HATEOAS (Hypermedia As The Engine Of Application State) principle 

#### Request Types:
POST (create)
GET (read)
PUT (edit)
DELETE 

### Good Parts of REST
1. REST is independent of platform and language
2. Stateless -- calls to the server will not be based on previous calls
3. Separation between the client and the server : develpment teams can scale their porducts much easier, change servers and databases at any time as long as the requests stay the same
4. Easy to access/use


### Bad Parts of REST
1. There is no clear versioning -- often times leaving developers with issues on accessing the resources they need
2. Alot of APIs are not well documented

## Swagger

Swagger is an open source tool used to create and document APIs.

Why people like it:

1. Swagger generates an interactive API console for testing and learning
2. Swagger generates the client SDK code needed for implementations on various platforms.
3. Swagger files can be autogenerated from several platforms (Visual Studio is one!)

I sense a demo coming on....


## GraphQL


> overview and a history
> Why do people use GraphQL?
> How does it solve some of the pain points of REST?
> How can people get 

## Technical Challenge

use public api and create graphql frame and they create the resolver for each resoruce
- look for public api with swagger apicreate base repo
include node graphql
do Challenge
> Link to Challenge after you give your presentation (Maybe ask every team to make a GraphQL API using Azure, then can then test it using GraphQL tester, remember you need to come up with a scenario cool enough for people to wanna build the API)