interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "user" | "admin";
}
export default IUser;
