const getAIAnswer = (req, res) => {
    res.set('content-type', 'application/json');
    res.json({message: "Here is your AI answer."});
}

export default getAIAnswer;