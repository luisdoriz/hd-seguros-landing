import { useEffect, useState } from "react";
import { getForm, postForm } from "../../data/forms";
import { notification } from 'antd';

const openNotification = (type, title, message) =>
  notification[type]({
    message: title,
    description: message,
  });

export const useForms = (idForm) => {
  const [form, setForm] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForm = async () => {
      const response = await getForm(idForm);
      setForm(response.data);
      setQuestions(response.data.Questions);
      setLoading(false);
    };
    if (questions.length === 0 && loading) {
      fetchForm();
    }
  }, [questions, loading, idForm]);

  const saveForm = async (body) => {
    const status = await postForm({idSurvey: body.idSurvey, answers: body.answers});
    if (status.status === 409) {
      openNotification(
        "error",
        "Error",
        "Intente más tarde"
      );
    }
    else {
      openNotification(
        "success",
        "Éxito",
        "Datos capturados con éxitoo"
      );
      setLoading(true);
      setQuestions([]);
    }

  }

  return {
    form,
    loading,
    saveForm,
    questions
  };
};

export default useForms;