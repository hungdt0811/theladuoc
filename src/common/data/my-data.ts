import dayjs from 'dayjs';
import USERS, { IUserProps } from './userDummyData';
import EVENT_STATUS, { IEventStatus } from './enumEventStatus';
import SERVICES, { IServiceProps } from './serviceDummyData';

const data: {
	id: number;
	status: IEventStatus['key'];
	date: string;
	customer: { name: string; email: string };
	assigned: IUserProps;
	phoneNumber: string;
	email: string;
	userID: string;
	type: string;
}[] = [
	{
		id: 1,
		status: EVENT_STATUS.APPROVED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(1, 'days').format('DD'),
		customer: { name: 'Nguyen Van A', email: 'alisonberry@site.com' },
		assigned: USERS.GRACE,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 2,
		status: EVENT_STATUS.APPROVED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(1, 'days').format('DD'),
		customer: { name: 'Diane Bower', email: 'dianebower@site.com' },
		assigned: USERS.JANE,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 3,
		status: EVENT_STATUS.CANCELED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(1, 'days').format('DD'),
		customer: { name: 'Claire Campbell', email: 'clairecampbell@site.com' },
		assigned: USERS.ELLA,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Cộng tác viên'
	},
	{
		id: 4,
		status: EVENT_STATUS.REJECTED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(1, 'days').format('DD'),
		customer: { name: 'Sue Quinn', email: 'suequinn@site.com' },
		assigned: USERS.RYAN,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 5,
		status: EVENT_STATUS.APPROVED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(2, 'days').format('DD'),
		customer: { name: 'Gabrielle Powell', email: 'gabriellepowell@site.com' },
		assigned: USERS.ELLA,
		phoneNumber: "0123 456 789",
		email: 'hungdt0811@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 6,
		status: EVENT_STATUS.REJECTED,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(3, 'days').format('DD'),
		customer: { name: 'Emily Taylor', email: 'emilytaylor@site.com' },
		assigned: USERS.JANE,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 7,
		status: EVENT_STATUS.PENDING,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(3, 'days').format('DD'),
		customer: { name: 'Carolyn Morgan', email: 'carolynmorgan@site.com' },
		assigned: USERS.JANE,
		phoneNumber: "0123 456 789",
		email: 'hungdt0811@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 8,
		status: EVENT_STATUS.PENDING,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(4, 'days').format('DD'),
		customer: { name: 'Penelope North', email: 'penelopenorth@site.com' },
		assigned: USERS.RYAN,
		phoneNumber: "0123 456 789",
		email: 'hungdt0811@gmail.com',
		userID: 'abc123',
		type: 'Diễn giả'
	},
	{
		id: 9,
		status: EVENT_STATUS.PENDING,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(4, 'days').format('DD'),
		customer: { name: 'Alexander Kelly', email: 'alexanderkelly@site.com' },
		assigned: USERS.ELLA,
		phoneNumber: "0123 456 789",
		email: 'abc123@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
	{
		id: 10,
		status: EVENT_STATUS.PENDING,
		date: dayjs().format('YYYY') + dayjs().format('MM') + dayjs().add(4, 'days').format('DD'),
		customer: { name: 'Cameron Hodges', email: 'cameronhodges@site.com' },
		assigned: USERS.GRACE,
		phoneNumber: "0123 456 789",
		email: 'hungdt0811@gmail.com',
		userID: 'abc123',
		type: 'Thành viên'
	},
];

export default data;
