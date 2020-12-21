export class IPersonalUsers{
    id: string;
    name: string;
    source: string;
    description: string;
    author: {
        avatar: string;
        _id: string;
        username: string
    };
}
