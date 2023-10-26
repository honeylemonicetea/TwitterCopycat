import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI)

mongoose.Promise = global.Promise

const tweetSchema = new Schema(
    {
        "id": Number,
        "text": String,
        "authorHandler":String,
        "authorID":Number,
        "likes":Number,
        "views":Number,
        "media":String,
    },
    {
        timestamps: true,
    }
)

const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", tweetSchema)

export default Tweet