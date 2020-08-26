import { isNumber, isPositiveNumber } from "../utils/validation";

const DB_BASE_URL = 'https://movies-catalogue.firebaseio.com/';

class MoviesService {
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

    paginate(data, page, pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        
        // No need to check if start and end indexes are out of range
        // Slice will take care of that
        return {
            count: data.length,
            data: data.slice(startIndex, endIndex)
        }
    }

    logErr(err) {
        console.log(err);
    }

    // With promises
    getMovies(page, pageSize) {
        return fetch(`${DB_BASE_URL}.json`)
            .then(this.validate)
            .then(this.toJson)
            .then(this.toArray)
            .then(data => isNumber(page) && isPositiveNumber(page) ? this.paginate(data, page, pageSize) : { count: data.length, data })
            .catch(this.logErr);
    }
    
    // With async await
    // async getMovies() {
    //     try {
    //         const rawRes = await fetch(DB_URL);
    //         this.validate(rawRes);
    //         return this.toJson(rawRes);
    //     } catch (error) {
    //         this.logErr();
    //     }
    // }

    getMovieById(id) {
        return this.getMovies()
            .then(movies => {
                return movies.data.find((m) => m.key === id);
            });
    }
}

export default MoviesService;
