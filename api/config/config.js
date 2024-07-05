import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import dotenv from 'dotenv'
dotenv.config()

export const DATABASE_LOCAL = "mongodb://127.0.0.1/apnaghar"


export const DATABASE_CLOUD = process.env.MONGODB_ATLAS

export const EMAIL_FROM = process.env.EMAIL_FROM
export const REPLY_TO = process.env.REPLY_TO

export const AWS_REGION=  process.env.AWS_REGION
export const AWS_API_VERSION=  process.env.AWS_API_VERSION


export const CLIENT_URL = process.env.CLIENT_URL
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

//// twilio 

// export the Twilio client so that it can be used elsewhere in our code
// export const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)