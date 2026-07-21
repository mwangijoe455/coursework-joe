/*
REST API  =>> Stands for:
    Representational State Transfer Application Programming Interface
    it allows different devices/application to communicate
     over the internet via hypertext transfer protocol htttp or https

Guidelines & rules
i. what type of applications can be interfaced.
    - the client device must be running a http client
    - http runs on a client device
    - client device is hardware that can connect to the internet.
    
    1. laptop
    2. mobile phone
    3. smart phone
    4. IOT devices

ii. HTTP Clients
    - browser
    - curl
    - POSTMAN
      etc

iii. communication
        it is a one way communication. server & client.
        client makes the request and server responds

iv. How to make a request.

    1. url => universal resource locator
    2. Method[ GET, POST, PATCH, DELETE]
    3. Headers: security necessarydepends on ap
    4. body: form, image, json

v.  http response:(wait for response)

        status code:
        1. 100-199: informational state codes
        2. 200-299: success status code
        3. 300-399: re-directional status code
        4. 400-499: syntax error on client's side
        5. 500-599: server error

vi. REST API Protocols.
        GET => reads data
        POST => creates a brand new resource
        PUT => updates/replaces
        PATCH => partial update
        DELETE => delete a resource
*/