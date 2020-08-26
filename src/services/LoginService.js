class LoginService {
    validate(res) {
        if (res.status >= 400) {
            throw new Error(res.status);
        } return res;
    }

    toJson(rawRes) {
        return rawRes.json();
    }

    toArray(rawObj) {
        return Object.keys(rawObj)
            .map(k => {
                // const currObj = rawObj[k];
                // currObj.key = k;
                return { key: k, ...rawObj[k] };
            });
    }

    logErr(err) {
        console.log(err);
    }

    getUsersCredentials(data) {
        return data.map(user => {
            const username = user.username;
            const password = user.password;

            return { username, password };
        });
    }

    checkUser(username, password, usersCredentials) {
        usersCredentials.forEach(user => {
            if (user.username === username && user.password === password) {
                console.log('success');
            }
        });
    }

    logIn(username, password) {
        const url = "https://movies-catalogue-register.firebaseio.com/.json";

        return fetch(url)
            .then(this.validate)
            .then(this.toJson)
            .then(this.toArray)
            .then(this.getUsersCredentials)
            .catch(this.logErr);
    }
}

export default LoginService;
