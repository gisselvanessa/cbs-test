export interface User {
    Id: string;
    personId: string;   
    officeId: number;    
    departmentId: number;      
    ipAddress: string;   
    userName: string;    
}
export interface UserPreLogin {
    userId: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    description: string;
}

