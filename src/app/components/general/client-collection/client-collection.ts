export class Client {
    id: number;
    title: string;
    date: Date = new Date() ;
    src: string;
}

export const Clients: Client[] = [
    {
        id: 0,
        title: 'N',
        date: new Date(2013, 11, 20),
        src: 'https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559__340.jpg',
    },
    {
        id: 1,
        title: 'C',
        date: new Date('2019-01-17'),
        src: 'https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785__340.jpg',
    },
    {
        id: 2,
        title: 'A',
        date: new Date('2019-01-20'),
        src: 'https://cdn.pixabay.com/photo/2017/03/13/22/05/forest-path-2141331__340.jpg',
    },
    {
        id: 3,
        title: 'D',
        date: new Date('2019-01-01'),
        src: 'https://cdn.pixabay.com/photo/2019/10/31/09/20/golden-4591457__340.jpg',
    },
    {
        id: 4,
        title: 'B',
        date: new Date('2019-01-05'),
        src: 'https://i.pinimg.com/236x/bd/85/61/bd85616fa1c2ce1c9ca5ece939ef7469.jpg',
    },
    {
        id: 5,
        title: 'E',
        date: new Date('2019-01-12'),
        src: 'https://cdn.pixabay.com/photo/2020/11/23/18/31/child-5770618__340.jpg',
    },
    {
        id: 6,
        title: 'G',
        date: new Date('2019-01-04'),
        src: 'https://cdn.pixabay.com/photo/2020/12/01/21/20/beach-5795560__340.jpg',
    },
    {
        id: 7,
        title: 'F',
        date: new Date('2019-01-03'),
        src: 'https://cdn.pixabay.com/photo/2020/08/30/09/22/people-5528959__340.jpg',
    },
    {
        id: 8,
        title: 'M',
        date: new Date('2019-01-20'),
        src: 'https://cdn.pixabay.com/photo/2020/12/02/00/57/mountain-5795883__340.jpg',
    },
    {
        id: 8,
        title: 'M',
        date: new Date('2019-01-20'),
        src: 'https://cdn.pixabay.com/photo/2020/12/02/00/57/mountain-5795883__340.jpg',
    },
    {
        id: 8,
        title: 'M',
        date: new Date('2019-01-20'),
        src: 'https://cdn.pixabay.com/photo/2020/12/02/00/57/mountain-5795883__340.jpg',
    }
];
