export const getTweets = (req, res) => {
    return res.json({
        message: 'tweets from v1'
    });
};

export const getTweetId = (req, res) => {
    const { id } = req.params;
    return res.json({
        message: `tweet from v1 id ${id}`
    });
};
export const createTweet = (req, res) => {  
    return res.json({
        message: 'tweet created'
    });
};  