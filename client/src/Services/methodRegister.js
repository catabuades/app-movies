const urlRegister = "http://localhost:4000/api/auth/register"

export default async function register(data) {
  const response = await fetch(urlRegister, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  console.log(response)

  return response.json()
}