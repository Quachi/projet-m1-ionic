import {Commentary} from '../models/comment';

const MOCK_COMMENTARY: Array<Commentary> = [
    {
        _id: '123',
        text: 'nouveau commentaire',
        createDate: 1234567654321,
        user: {
            '_id': '12343423',
            'name': 'Kevin Quach',
            'email': 'kquach@lecko.fr'
        },
        title: 'ENCORE'
    },
    {
        _id: '123',
        text: 'AEZRTHGFDSQ',
        createDate: 1234567654321,
        user: {
            '_id': '12343423',
            'name': 'Kevin Quach',
            'email': 'kquach@lecko.fr'
        },
        title: 'ENCORE'
    },
    {
        _id: '123',
        text: 'nouveau commentaire 2',
        createDate: 1234567654321,
        user: {
            '_id': '12343423',
            'name': 'Kevin Quach',
            'email': 'kquach@lecko.fr'
        },
        title: 'ENCORE'
    },
    {
        _id: '123',
        text: 'nouveau commentaire 3',
        createDate: 1234567654321,
        user: {
            '_id': '12343423',
            'name': 'Kevin Quach',
            'email': 'kquach@lecko.fr'
        },
        title: 'ENCORE'
    },
    {
        _id: '123',
        text: 'nouveau commentaire 4',
        createDate: 1234567654321,
        user: {
            '_id': '12343423',
            'name': 'Kevin Quach',
            'email': 'kquach@lecko.fr'
        },
        title: 'ENCORE'
    },
];
export default MOCK_COMMENTARY;

