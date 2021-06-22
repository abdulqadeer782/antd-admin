

export const loggedIn = () =>
{
    return sessionStorage.getItem('token') || null
}   