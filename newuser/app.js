//idk if this was the right way to go about it, but this way the user is able to create their account?
function userCreate(form){
    const create = {
        name: form.get('name'),
        password: form.get('password'),
    };

    return create;
}

export default userCreate;