//array of objects
const quiz =[
    {
        q:'What does REST in REST API stand for?',
        options:['Representational State Tool','Reference State Tool','Representational State Transfer',' Reference State Transfer'],
        answer:2
    },
    {
        q:'Which of the following component of HTTP request is used to indicate HTTP version?',
        options:['VERB','URI','HTTP Version','Request Header'],
        answer:2
    },
    {
        q:' Which of the following is a best practice to create a standard URI for a web service?',
        options:['Maintain Backward Compatibility','Use HTTP Verb','Both of the above.','None of the above.'],
        answer:2
    },
    {
        q:'Which of the following is true about caching in RESTful web service?',
        options:['Caching refers to storing server response in client itself so that a client needs not to make server request for same resource again and again.','A server response should have information about how a caching is to be done so that a client caches response for a period of time or never caches the server response.','Both of the above.','None of the above.'],
        answer:2
    },
    {
        q:'Which of the following directive of Cache Control Header of HTTP response can set the time limit of caching?',
        options:['Public','Private','no-cache/no-store','max-age'],
        answer:3
    },
    {
        q:'Which of the following is a best practice for designing a secure RESTful web service?',
        options:['Validate Malformed XML/JSON - Check for well formed input passed to a web service method.','Throw generic Error Messages - A web service method should use HTTP error messages like 403 to show access forbidden etc.','Both of the above.','None of the above.'],
        answer:2
    },
    {
        q:'Which of the following annotation of JAX RS API is used to annotate a method used to delete resource?',
        options:['@DELETE','@HEAD','@Produces','@Consumes'],
        answer:0
    },
    {
        q:'Which of the following annotation of JAX RS API states the HTTP Request type?',
        options:['@DELETE','@HEAD','@Produces','@Consumes'],
        answer:3
    },
    {
        q:'REST is web standards based architecture and uses HTTP Protocol for data communication.',
        options:['false','true'],
        answer:1
    },
    {
        q:'Purpose of an URI is to do the DNS lookup.',
        options:['false','true'],
        answer:1
    }
]