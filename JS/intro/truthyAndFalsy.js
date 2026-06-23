/*truthy or falsey
 if sth is not falsey; then its truthy
 
 falsies
 
 1. false
 2. 0
 3. -0
 4. null
 5. undefined
 6. ''--> empty string
 
 Anything that is not falsey is truthy
 */

 let userName1= 'Joe Mwangi'
 let userName2= 0
 let activeUserName=userName2 || userName1
 console.log(activeUserName)

 let bothUserNameOk=userName1 && userName2
 console.log(bothUserNameOk)  // truthy or falsey