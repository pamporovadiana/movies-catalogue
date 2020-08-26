class RegisterService {
    registerUser(data) {
        const url = "https://movies-catalogue-register.firebaseio.com/.json";
        const settings = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

        fetch(url, settings);
    }
}

export default RegisterService;