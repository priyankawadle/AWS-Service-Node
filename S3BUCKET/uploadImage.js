const path = require('path');
const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const s3 = new AWS.S3({ region: process.env.AWS_REGION, accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY })

function uploadImage(filename){
const fileContent = fs.readFileSync(filename);
const params = {
    Bucket: 'reactappbucketmy',
    ACL: 'private',
    Key: filename,
    Body: fileContent
};
s3.putObject(params, function (err, data) {
    if (err) {  
        console.log(err);
    } else {
        console.log(data);
    }
})
}
uploadImage('bucketimage.jpg')
