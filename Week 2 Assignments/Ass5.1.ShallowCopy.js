
//Given Data
 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// Create shallow copy of user
let copyUser={...user}

// Changes:
//i. name in copyUser
copyUser.name='Hari'

//ii. preferences.theme in the copied object
copyUser.preferences.theme='light'

//iii. .Log both original and copied objects
console.log(user)
console.log(copyUser)

//iv. Observe what changes and what doesn’t
/*

{
  id: 101,
  name: 'Ravi',
  preferences: { theme: 'light', language: 'en' }
}
{
  id: 101,
  name: 'Hari',
  preferences: { theme: 'light', language: 'en' }
}

We can see the theme is changed in both as theme:'light'
Also name: is different in copyUser

id: and preferences.language: didnt change

  */