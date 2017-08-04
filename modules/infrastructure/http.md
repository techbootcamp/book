# HTTP

## Introduction

HTTP (HyperText Transfer Protocol) is the protocol for the Internet. HTTP allows you to request an asset and then returns a response.

## History of HTTP
> What's the first server?
> Who wrote the first spec?

## HTTP Request
### Method
(GET, POST, PUT, DELETE, PATCH)
(Only GET and POST available in HTML Form)

### Parts of an common URL
`scheme:[//host[/path][?query][#fragment]`
1. **Scheme**
(http and https)
2. **Host** (Fully Qualified Domain Name - FQDN)
    * Sub-domain
        `www` in `www.example.com` is the sub-domain
    * domain name

    * Top Level Domain

3. **URI**

4. **Query String**

5. **Fragment**

### Header
Header is the meta data of the request.

**Common Header to know**
* `Content-Type`
* `Authorization`
* `Referer`

### Request Body
GET Method does not have a request body

## HTTP Response

### Response Code
2xx: Successful  
3xx: Redirect  
4xx: Error, Users' fault  
5xx: Error, Server's fault  

**Common Status Code**
* 200 - OK
* 404 - Resource Not Found

### Header
* `Content-Type`
* `Content-Length`

## Acknowledgement Seqence

## DNS Lookup

## HTTP2
> A little history of HTTP2
> What's different from HTTP1?
> What are some cool features?
> How can we play with it?

## HTTP Server
### Compare contrast IIS, Apache, and Nginx

### How to Spin up a HTTP Server?
> on Windows
> Using Python
> Using NodeJS
> Maybe do a quick demo on NodeJS

## Tools to Debug an HTTP endpoint

## Technical Challenge
> Link to challenge after you give your presentation?

## Resources
* [Awesome Presentation](https://robrich.org/slides/anatomy_of_a_web_request/)