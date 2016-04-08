export default class User {

    constructor( userDetails , fromStore=false ) {
        this.fromStore = fromStore;
        this.details = userDetails;
    }

    save() {
        if ( !this.fromStore ) {
            if ( users[this.details.user] ) {
                throw 'Overwritting existing user';
            }
        }
        users[this.details.user] = this.details;
        return true;
    }

    checkPassword( password ) {
        if ( password !== this.details.password ) {
            throw 'Wrong Password';
        }
        return true;
    }

    static findByUsername( user ) {
        if ( users[user] ) {
            return  new User(users[user],true);
        }
        throw 'User don\'t exists';
    }
}

const users = {
    admin : {
        password : 'admin'
    }
};
