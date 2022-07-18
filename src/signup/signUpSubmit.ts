const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        id: data.get('id'),
        password: data.get('password'),
        password_validation: data.get('password_validation'),
      });
};

export {handleSignUpSubmit};