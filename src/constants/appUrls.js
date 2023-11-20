class APP_URL{
    constructor(){
        this.API = `${process.env.REACT_APP_URL}`
    }

    get _GET_ALL(){
        return `${this.API}/users`;
    }

    get _ADD_USER(){
        return `${this.API}/users`
    }

    _DELETE_USER(id){
        return `${this.API}/users/${id}`
    }

    _UPDATE_USER(id){
        return `${this.API}/users/${id}`
    }

}

const URL = new APP_URL();
export default URL;