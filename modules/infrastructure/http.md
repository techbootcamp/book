# HTTP
[Tim Berners-Lee]: https://en.wikipedia.org/wiki/Tim_Berners-Lee
[World Wide Web]: https://en.wikipedia.org/wiki/World_Wide_Web
[W3C]: https://www.w3.org/
[CERN]: https://en.wikipedia.org/wiki/CERN
## Introduction
Applications running on the internet offer browsing websites, sending and receiving emails, watching audio/video, etc. All these applications rely on client-server communication which require a predefined set of application-level protocols to communicate data efficiently.

Hyper Text Transfer Protocol (HTTP) is a popular client-server network protocol that is a convenient way to quickly and reliably transfer data over the internet. HTTP allows you to request an asset and then return a response.

- HTTP is connectionless: After making the request, the client disconnects from the server and only reconnects when the response is ready to be delivered.
- HTTP is stateless: Every client/server connection is treated as first time request with no dependencies on previous connections.
- HTTP is non-dependent on the data type being sent.


## History of HTTP
[Tim Berners-Lee], known as the inventor of the [World Wide Web] and director of World Wide Web Consortium ([W3C]), is credited for inventing the original HTTP. The first version of HTTP only had a GET method to request pages from a server. Since 1990, HTTP was mainly used for servers to fetch HTML documents and send to the requesting client.

CERN httpd, implemented in C, and developed on a NeXT Computer was the first web server software developed at [CERN] in 1990.

![NeXT Computer, first web server](https://upload.wikimedia.org/wikipedia/commons/d/d1/First_Web_Server.jpg)
This NeXT Computer used by Tim Berners-Lee at CERN became the world's first web server.

## TCP/IP
### Brief Overview
(Transmission Control Protocol / Internet Protocol) is a suite of communication protocols used to interconnect network devices. TCP/IP specifies how end to end communication is achieved and identifies how broken packets are addressed, transmitted and routed.

| Layer         | Description     |
| ------------- | --------------- |
| Application   | Abstraction that specifies the shared protocols and interface: HTTP, FTP, SMTP.   |
| Transport     | Provides host-to-host communication. Data is broken into packets.       |
| Internet      | Attaches origin and destination addresses to packets for specific routing.        |
| Network       | Provides means of transferring packets from origin to destination.                |

HTTP is a specific application-level protocol which uses TCP/IP as a means of communicating from client-to server and server-to-client. There are other protocols such as FTP (File Transfer Protocol) and SMTP (Simple Mail Transfer Protocol).

## HTTP Request
### Method
Request methods define the action to be performed for a given resource.

**Idempotent**: Repeating multiple same calls will produce the same result (side effects) as a single request. Refers to the state of the system after the request has completed.

**Safe**: Resources are not modified. Method can be cached and prefetched **without** any repercussions.

| Method    | Idempotent    | Safe  | Description     |
| --------- | :-----------: | :---: | --------------- |
| GET   | yes   | yes   | Requests a specific resource that should be retrieved by the server.   |
| POST  | no    | no    | Submits an entity to a specific resource (unknown URI) that will cause a change of state on the server.  |
| PUT   | yes   | no    | Replaces the current state of a specific resource (known URI) with the request payload.  |
| DELETE| yes   | no    | Remove the specified resource from the server.  |
| PATCH | no    | no    | Apply a set of changes to the specified resource.  |

> Only GET and POST available in HTML Form

#### Why is PUT idempotent and not POST?
Since the PUT method ensures you know the exact Uniform Resource Identifier (URI) of the resource you are adding/updating, you can be certain that only that specific resource will be modified. Any subsequent calls will not alter any other resource.
```
PUT http://example.com/message/resource1.xml
<message>Hello World</message>
```

In POST methods, you do not know the specific URI of the resource, so the server will assign a URI on your behalf. You can **not** be ensured that multiple POST requests will result in multiple resources with the same data.
```
POST http://example.com/action/add-message
<message>Hello World</message>
```

#### Why is PATCH not idempotent?
This method can be idempotent, but not necessarily ensured. Patching a property from A 'to B' or 'to C' is idempotent, because no matter how many request you make, the state will change to either B or C.
```
PATCH /employee/123
{ "salary": "200" }
```
'to B'
```
PATCH /employee/123
{ "salary": "300" }
```
'to C'

Patching a property from 'A to B' or 'A to C' will **not** be idempotent because once one method is called, the state will either become B or C. Any following calls will result in an error and the state will remain, since it is no longer "from A".
```
PATCH /employee/123
{ "change": "salary", "from": "100", "to": "200" }
```
'A to B'

It is recommended you describe the change when using PATCH

### Parts of an common URL
[List of network protocols]: https://en.wikipedia.org/wiki/Lists_of_network_protocols
[Domain Name System]: https://en.wikipedia.org/wiki/Domain_Name_System
`scheme:[//host[:port][/path][?query][parameters][#fragment]]`
1. **Scheme** (Protocol)
  * Declares how a web browser should communicate with the web server. Two most common are:
  * http and https (secure: browser encrypts any information so it will not be understood if intercepted).
  * [List of network protocols].

2. **Host** (Fully Qualified Domain Name - FQDN)
    * Sub-domain
      * Sub-division of the main domain name.
      * `www` in `www.example.com` is the sub-domain.
    * Domain name
      * A unique reference that identifies a website on the internet.
    * Top Level Domain (TLD)
      * Highest level in the hierarchical [Domain Name System] (DNS).
      * DNS is a system for naming computers, services and any resource connected to the internet.
      * Directory Service for domain names.

3. **URI**
  * Reference to a specific file or resource in a server. This path can point to a specific resource `https://example.com/user/index.html` or non specific `https://example.user/` (in which case the server will search for predefined files).

4. **Query String**
  * Used by dynamic pages that are generated from a database with user content based on the parameters.
  * Represented by a `?` and followed by one or more parameters seperated by `&`.
  * `https://www.google.com/search?source=hp&q=http&oq=http`.

5. **Fragment**
  * Internal page reference which refers to a specific section within a page.
  * Begins with a `#` followed by an identifier.

### Header
Header is the meta data of the request which allows additional information to be sent so both the client and server know what to expect and how to behave.

Find full list of header categories [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

**Common Header to know**
* `Authorization`: contains credentials to authenticate a user agent with a server
* `Content-Type`: Indicates the media type of the resource
* `Content-Encoding`: Specify compression algorithm
* `Referer`: Address of previous web page where the request came from
* `Location`: URL to redirect page to

### Request Body
The data containing the payload being expected by the server as defined in the request method and headers. The body is transmitted following the request headers that contains the specifications and type of the payload.
> GET Method does not have a request body

## HTTP Response
After recieving and interpreting a request message, the server responds with an HTTP response message.

### Response Code

| Status Code | Reason | Description  |
| :---------: | ------ | ------------ |
| 1xx | Informational | Request received, continuing process            |
| 2xx | Successful    | Action was received, understood and accepted    |
| 3xx | Redirect      | Further action must be taken to complete request|
| 4xx | Client Error  | Bad syntax or cannot be fulfilled               |
| 5xx | Server Error  | Server failed to fulfill a valid request        |

**Common Status Code**
* 200 - OK
* 201 - Created
* 202 - Accepted
* 400 - Bad Request
* 401 - Unauthorized
* 403 - Forbidden
* 404 - Resource Not Found
* 500 - Internal server error
* 501 - Bad gateway

### Header
* `Content-Type`: Indicates the media type of the resource
* `Content-Length`: Indicates size of entity-body

## Acknowledgement Sequence
TCP three-way handshake is used by TCP to set up a TCP/IP connection. There are three messages transmitted by TCP to start a session. This handshake is designed so that two computers (client-server) can negotiate parameters and setup a connection before sending any data (such as HTTP requests).

An important design element ensures that both computers initiate separate TCP socket connections simultaneously, which allows bi-directional and multiple streams of traffic.

### SYNC, SYN-ACK, ACK (Synchronize and Acknowledgement)
```graph
sequenceDiagram
    participant Client
    participant Server
    Note over Client, Server: Both connections are closed
    loop Listening
        Server-->Server: Wait for Client
    end
    Note over Client: Create and send SYN packet
    Client->>Server: SYN
    Note over Client: Waiting for SYN-ACK
    Note over Server: Receive SYN, send back SYN-ACK
    Server->>Client: SYN-ACK
    Note over Server: Waiting for ACK
    Note over Client: Receive SYN-ACK, send back ACK
    Client->>Server: ACK
    Note over Client: Connection Established
    Note over Server: Received ACK
    Note over Server: Connection Established
    Note over Client, Server: HTTP messages over TCP/IP
```

1. [Computer A] sends a TCP `SYN` packet to [Computer B]
2. [Computer B] receives `SYN`
3. [Computer B] sends a `SYN-ACK` to [Computer A]
4. [Computer A] receives `SYN-ACK`
5. [Computer A] sends `ACK` to [Computer B]
6. [Computer B] receives `ACK`
7. **TCP socket connection is established**


> User Datagram Protocol (UDP) does not establish a connection like TCP, it is connectionless. UDP sends data without acknowledgement of a connection being established. Often called 'unreliable protocol'.

## DNS Lookup
### Root Name Server

![Root Name Server Example](https://www.netnod.se/sites/default/files/i-root/dns_hierarchy_map_i_root_example.png)

Servers at the root of the DNS hierarchy. DNS is a hierarchy of a set of authorized servers which contain different pieces of information. "Parts of the internet". For each top level domains, the root zone contains the numeric addresses of the name servers.

Each domain name is first resolved into which root server it belongs to. For example domain `www.example.com`, the DNS must first find where `.com` lives, then it can find `example.com`, then finally `www.example.com`. Once this is found, it can translate this domain name into a unique IP address.

* There are more than 300 root servers around the world.
* Root servers are operated by 12 unique organizations (13 total)
* They are reachable using 13 numeric IP addresses.

### Local DNS Server
This is a 'name resolution service', which resolves domain names into IP addresses and vise-versa. Local DNS Servers performs domain name lookups for all devices connected to the network. For most personal computers, the DNS Server is your Internet Service Provider (ISP). Most companies and educational institutions will have their own local DNS server on-premise which allows the computers in the network to communicate with each other while staying on-premise.

## HTTP/2
The primary goals are to reduce latency within applications. HTTP/2 does not modify the application-layer protocol of HTTP. The core concepts of HTTP such as methods, status codes, headers, and URIs are unchanged. Instead, HTTP/2 changes how the request and response data is formatted and transported between the client and server. These changes are abstracted from the individual applications using HTTP or HTTP/2.

### History
[SPDY]: https://en.wikipedia.org/wiki/SPDY

HTTP/2 (originally named HTTP/2.0) was derived from an experimental protocol developed by Google named [SPDY]. There are several charter goals of this protocol:
1. Allow clients and servers to elect to use any HTTP protocol (1.1 or 2.0)
2. Maintain complete compatibility with HTTP/1.1
3. Decrease latency to improve page loading

### HTTP/2 Features
* Binary instead of textual: more compact payloads
* Multiplexed: enable sending multiple requests in parallel over a single connection. Higher support for async file downloads from server.
* Servers can 'push' responses: proactive client caches instead of waiting

## HTTP Server
A computer system that processes incoming traffic requests in the form of HTTP, the most common basic network protocol used on the internet.

### Popular Web Servers
## Apache 
38% of all sites / 52% of active sites

**Enabling**: 
* HTTP/2 requires Apache HTTP 2.4.17 or later versions
* Compile Apache HTTP with http2 and ssl modules
* `.configure --enable-ssl --enable-so --enable-http2`
  * Secure socket layer, shared object, HTTP/2.0
* Once installed, load modules
* `LoadModule http2_module modules/mod_http2.so`
* Add protocol directives
* `Protocols h2 h2c http/1.1`
  * h2 (HTTP/2 over SSL/TLS)
  * h2c (HTTP/2 over TCP)
  * http/1.1 (If client doesn't accept HTTP/2, default)

**Advantage**
- Open Source, free
- Flexible with a modular approach
- Security is seen as biggest advantage (most attacks are on Windows based machines)
- UNIX, Windows, Linux, Mac OS

**Disadvantage**
- Process-based server: each simultaneous connection requires its own thread

## Microsoft IIS
31% of all sites / 11% of active sites

**Enabling**: 
* Most recent IIS is preconfigured to support HTTP/2.0 by default

**Advantage**
- Supported by Microsoft
- Compatible to .NET Framework and ASPX scripts
- Integrates easily with Microsoft services (Azure AD, SQL Server, ASP, etc..)

**Disadvantage**
- Not as customizable as other open source web servers

## NGINX
15% of all sites / 14% of active sites

**Enabling**:
* Nginx 1.9.5 or higher supports HTTP/2.0
* Add `http2` parameter in listen directive
```
server {
        listen       443 http2 ssl chandan.io;
        …....
}
```
* HTTP/2 is supported only over HTTPS, can only be added to server with SSL configuration

**Advantage**
- Open Source, free
- Known for speed and being a reverse-proxy server (more control on traffic flow after firewall)
- Event-based server which enables scale
- Quality Virtual Private Server (VPS) environment

## Tools to Debug an HTTP endpoint
* [Postman](https://www.getpostman.com/)
* [Fiddler](https://www.telerik.com/download/fiddler)
* [Wireshark](https://www.wireshark.org/)

## Resources
* [Awesome Presentation](https://robrich.org/slides/anatomy_of_a_web_request/)
* [HTTP/2 on IIS](https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-10/http2-on-iis)
* [HTTP/2 on Apache and NGINX](https://geekflare.com/http2-implementation-apache-nginx/)