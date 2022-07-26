const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        id: data.get('id'),
        password: data.get('password'),
        password_validation: data.get('password_validation')
      });

    let url = 'server.com/api/signup';
    let body = {
      id: data.get('id'),
      password: data.get('password'),
      password_validation: data.get('password_validation')
    }
    let response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    });
    let result = await response.json();
    console.log(result);
};

export {handleSignUpSubmit};