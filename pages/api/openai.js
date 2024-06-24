const axios = require('axios');

const OpenAI = async (req, res) => {
    const input = req.body.input;
    const token = process.env.GPT_KEY;
    const model = process.env.GPT_MODEL;
    const org = process.env.GPT_ORG;
    const roleContent = process.env.GPT_ROLE_CONTENT;
    const temp = process.env.GPT_TEMPERATURE; 

    try {
        const response = await axios.post(`${process.env.GPT_ROOT}/v1/chat/completions`, 
            {
                "model": model,
                "messages": [
                    {
                        "role": "system",
                        "content": roleContent
                    },
                    {
                        "role": "user",
                        "content": input
                    }
                ],
                "temperature": parseInt(temp)
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'OpenAI-Organization': org,
                    'Content-Type': 'application/json'
                }
            }
        );

        return res.json({
            statusCode: response.status,
            data: response.data.choices[0].message.content
        });

    } catch (err) {
        return res.json({
            statusCode: err.response?.status || 500,
            data: err.message
        })
    }
}

export default OpenAI;