function generatePassword() {
  const passwordLength = document.getElementById("slider")
  const characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let password = ""

  for (let i = 1; i <= passwordLength.value; i++) {
      const randomPassword = Math.floor(Math.random() * characters.length)
      password += characters.substring(randomPassword, randomPassword + 1)
  }
  
  return password
}

function renderPassword() {
  document.getElementById("password-one").value = generatePassword()
  document.getElementById("password-two").value = generatePassword()
}

