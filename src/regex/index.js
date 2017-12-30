export const usernameRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//min 8 characters, 1 number, 1 lowercase, 1 uppercase, 1 special
export const passwordRe = /(?=.*([0-9]{1,}))(?=.*([A-Z]{1,}))(?=.*([a-z]{1,}))(?=.*([!@#$%^&*()_+=\-`~?.]{1,}))[A-Za-z0-9!@#$%^&*()_+=\-`~?.]{8,}/g