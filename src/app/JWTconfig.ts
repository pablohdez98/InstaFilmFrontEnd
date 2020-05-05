export function tokenGetter() {
  const user: any = JSON.parse(localStorage.getItem('user'));

  if (!user){
    return ""
  }

  return user.access_token;
}

export const jwtConfig = {
  tokenGetter, whitelistedDomains: ['localhost:5000']
}
