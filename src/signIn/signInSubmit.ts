const handleSignInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        id: data.get('id'),
        password: data.get('pw'),
      });
};

export {handleSignInSubmit};