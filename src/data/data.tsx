const data: {
	id: number;
    lecturer: string;
    website: string;
    status: boolean;
    feature: number[];
}[] = [
    {
        id: 1,
        lecturer: 'Nguyễn Văn A',
        website: 'https://thichladuoc.vn/nguyenvana',
        status: true,
        feature: [1, 2, 3, 4],
    },
    {
        id: 2,
        lecturer: 'Nguyễn Văn B',
        website: 'https://thichladuoc.vn/nguyenvanb',
        status: true,
        feature: [],
    },
    {
        id: 3,
        lecturer: 'Nguyễn Văn C',
        website: 'https://thichladuoc.vn/nguyenvanc',
        status: false,
        feature: [1,2,3],
    },
    {
        id: 4,
        lecturer: 'Nguyễn Văn D',
        website: 'https://thichladuoc.vn/nguyenvand',
        status: true,
        feature: [],
    },
    {
        id: 5,
        lecturer: 'Nguyễn Văn E',
        website: 'https://thichladuoc.vn/nguyenvane',
        status: false,
        feature: [],
    },
];

export default data;
