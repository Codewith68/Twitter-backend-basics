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
    console.log('createTweet handler invoked');
    return res.json({
        message: 'tweet created '
    });
};  

export const updateTweet = (req, res) => {
    const { id } = req.params;
    console.log('updateTweet handler invoked');
    return res.json({
        message: `tweet updated with id ${id}`  
    });
};