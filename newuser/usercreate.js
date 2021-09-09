//idk if this was the right way to go about it, but this way the user is able to create their account?
function userCreate(form){
    const create = {
        username: form.get('username'),
        password: form.get('password'),
        todos:[]
    };

    return create;
}

export default userCreate;