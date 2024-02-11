const baseUrl = "http://localhost:9090";
export const submitForm = async (formData) => {
  return (await fetch(`${baseUrl}/api/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })).json();

};