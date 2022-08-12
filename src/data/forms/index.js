import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const getForm = async (id) => {
  try {
    const url = REACT_APP_API_URL + `survey/${id}`;
    const { data } = await axios.get(url);
    return data;
  } catch ({ response }) {
    return response;
  }
};

const postForm = async (body) => {
  try {
    const url = REACT_APP_API_URL + 'survey/answers';
    const { data } = await axios.post(url, body);
    return data;
  } catch ({ response }) {
    return response;
  }
};

export { getForm, postForm };

export default getForm;