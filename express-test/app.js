let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

let alexaVerifier = require('alexa-verifier');

function requestVerifier(req, res, next) {
    alexaVerifier(
        req.headers.signaturecertchainurl,
        req.headers.signature,
        req.rawBody,
        function verificationCallback(err) {
            if (err) {
                res.status(401).json({ message: 'Verification Failure', error: err });
            } else {
                next();
            }
        }
    );
}

// "session": {
//     "sessionId": "SessionId.6a4789.....",
//     "application": { "applicationId": "amzn1.ask.skill.2ec93....." },
//     "attributes": { /* Any persisted session data... */ },
//     "user": { "userId": "amzn1.ask.account.AFP3ZWK564FDOQ6....." },
//     "new": true
// };



app.use(bodyParser.json({
    verify: function getRawBody(req, res, buf) {
        req.rawBody = buf.toString();
    }
}));


app.post('/forecast', requestVerifier, function(req, res) {
    // We'll fill this out later!
    res.json({ hello: 'world' });
});
app.listen(3000);