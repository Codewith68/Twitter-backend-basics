export const createTweetmanually = (req, res,next) => { 
    const { tweet } = req.body;
    if (!tweet) {
        return res.status(400).json({
            message: 'tweet is required'
        });
    }
    next();
};

// export const createTweetmanuallyController = (req, res) => {
    return res.status(201).json({
        message: 'tweet created successfully'
    });
