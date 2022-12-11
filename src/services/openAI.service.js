import RestService from "./wrapper/restService";

const openAIService = () => {
  
  const _serverUr = process.env.REACT_APP_NODE_ENV === "dev" ? 
    process.env.REACT_APP_DEV_SERVER_URL : process.env.REACT_APP_SERVER_URL;

  const _generateImage = async ({ prompt, size }) => {
    try {
      const endpoint = _serverUr + "/public/api/v1/AI/image";
      const config = { data: { prompt, size } };
      const response = await RestService().post(endpoint, config);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  return {
    generateImage: _generateImage,
  }
}

export default openAIService;

