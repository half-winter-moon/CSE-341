displayQuote = (req, res) => {
    const data = 
    'Do or do not, there is no try';
    res.status(200).send(data);
};

module.exports = {
    displayQuote,
};