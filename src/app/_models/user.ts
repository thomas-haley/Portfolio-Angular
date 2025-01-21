export interface User {
    id: number;
    username: string;
    token: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface Register {
    email: string;
    username: string;
    password: string;
}