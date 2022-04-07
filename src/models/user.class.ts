export class User {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.mobileNumber = obj ? obj.mobileNumber : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() { // firebase
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobileNumber: this.mobileNumber,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        };
    }
}