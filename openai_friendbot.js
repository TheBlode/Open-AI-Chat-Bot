(async () => {
    const fs = require("fs");
    const { dirname } = require("path");
    const appDir = dirname(require.main.filename);
    const { Configuration, OpenAIApi } = require("openai");
    var api_key = "";
    const allFileContents = fs.readFileSync(appDir + "/api_key.txt", "utf-8");
    allFileContents.split(/\r?\n/).forEach(line =>  {
        api_key = (`${line}`);
    });

    const configuration = new Configuration({
        apiKey: api_key
    });

    const openai = new OpenAIApi(configuration);

    const question   = process.argv[2];

    var response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: "You: " + question,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
    }).then((res) => {console.log(res.data.choices[0].text)});
})();