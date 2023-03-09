<pre>
AWS access key and secret key need to be added to ./server/dbSetup.js for a connection to occur to dynamoDB.

Local usage:
-Server: node server.js
-Client: npm run dev

It should not work since its not plugged to an AWS account with the required dynamoDB tables.

API:
 GET    /article/:articleId       -Get specific article

 GET    /comment/comments         -Get all comments
 GET    /comment/:mediaId/        -Get comments of a specific media (article in this case)
 POST   /comment/:mediaId/        -Comment specific media
 PUT    /comment/:commentId/rate  -Rate specific comment
 PUT    /comment/:commentId/reply -Reply to specific comment
 DELETE /comment/:commentId       -Delete specific comment

DynamoDB:

articles: {
    articleId: string,
    author: string,
    content: string,
    headline: string,
}

comments: {
    commentId: string,
    mediaId: string,
    author: string,
    comment: string,
    replies: array({
        author: string,
        text:  string,
    }),
    rating: number
}

</pre>
