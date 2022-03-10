const urlRegister = "http://localhost:4000/api/auth/register"
export async function registerMethod(data) {
  const response = await fetch(urlRegister, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response.json()
}


const urlGetUser = "/api/auth/getuser"
export async function getLoggedUser() {
  const response = await fetch(urlGetUser, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  })

  try {
    const data = await response.json()
    return (data)
  } catch {
    return null
  }
}


const urlLogin = "/api/auth/login"
export async function loginMethod(data) {
  console.log(data)

  const response = await fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return response.json()
}