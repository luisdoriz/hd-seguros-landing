import axios from "axios";
//require("dotenv").config();

//const { REACT_APP_API_URL } = process.env;

const getForm = async (id) => {
  try {
    const url = 'http://localhost:5000/survey'
    //const url = REACT_APP_API_URL + `/persons/visitors?query=${query}`;
    const { data } = await axios.get(url);
    return data;
  } catch ({ response }) {
    return response;
  }
};

const postForm = async (body) => {
  try {
    const url = 'http://localhost:5000/survey/answers'
    //const url = REACT_APP_API_URL + `/persons/visitor`;
    const { data } = await axios.post(url, body);
    return data;
  } catch ({ response }) {
    return response;
  }
};

export { getForm, postForm };

export default getForm;