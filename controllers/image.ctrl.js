const openai = require("../openai-config");

const createImageCtrl = async (req, res) => {
    const { prompt, n, size } = req.body;
    
    try {
        const response = await openai.createImage({
            prompt,
            n,
            size,
          });
    
        res.status(200).json(response.data.data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    createImageCtrl,
}