import React, { useEffect, useState } from 'react';
import { Badge, Collapse, Dropdown, Table, Tag } from 'antd';
import type { MenuProps, TableColumnsType } from 'antd';
import moment from 'moment';
import '../../../styles/components/_student.scss'
import FilterTable from './common/FilterTable';
import axios from 'axios';
import axiosClient from '../../../httpClient/axiosClient';
import { error } from 'console';

const WaitingStudent = () => {
	
	const data: DataType[] = [
		{
			id: '1',
			registrationDate: '17/01/2024',
			ticket: 'free',
			studentName: 'Hùng Nguyễn',
			phoneNumber: '0123456789',
			email: 'ht811@gmail.com',
			studentCode: 'ht811',
			presenter: 'Linh Nguyễn',
			creatorName: 'Linh Nguyễn',
			courseName: 'Khóa front-end',
			scores: '9',
			emailStatus: 'valid',
			userStatus: 'valid',
		},
		{
			id: '2',
			registrationDate: '24/01/2024',
			ticket: 'vip',
			studentName: 'Long Nguyễn',
			phoneNumber: '0123456789',
			email: 'long@gmail.com',
			studentCode: 'nnlong',
			presenter: 'Linh Nguyễn',
			creatorName: 'Linh Nguyễn',
			courseName: 'Khóa front-end',
			scores: '10',
			emailStatus: 'invalid',
			userStatus: 'valid',
		},
		{
			id:' 3',
			registrationDate: '28/01/2024',
			ticket: 'vip',
			studentName: 'Long Nguyễn',
			phoneNumber: '0123456789',
			email: 'long@gmail.com',
			studentCode: 'nnlong',
			presenter: 'Linh Nguyễn',
			creatorName: 'Linh Nguyễn',
			courseName: 'Khóa front-end',
			scores: '8',
			emailStatus: 'invalid',
			userStatus: 'invalid',
		},
		{
			id: '4',
			registrationDate: '10/01/2024',
			ticket: 'premium',
			studentName: 'Long Nguyễn',
			phoneNumber: '0123456789',
			email: 'long@gmail.com',
			studentCode: 'nnlong',
			presenter: 'Linh Nguyễn',
			creatorName: 'Linh Nguyễn',
			courseName: 'Khóa front-end',
			scores: '10',
			emailStatus: 'invalid',
			userStatus: 'invalid',
		}
	];

	const items:  MenuProps['items']= [
		{ key: '0', label: 'Nhận',  },
		{ key: '1', label: 'Không nhận' },
	  ];

	interface DataType {
		id: string,
		registrationDate: string,
		ticket: 'free' | 'vip' | 'premium',
		studentName: string,
		phoneNumber: string,
		email: string,
		studentCode: string,
		presenter: string,
		creatorName: string,
		courseName: string,
		scores: string,
		emailStatus: 'valid' | 'invalid',
		userStatus: 'valid' | 'invalid',
	  }

	const columns: TableColumnsType<DataType> = [
		{
			title: 'STT',
			width: 80,
			dataIndex: 'registrationDate',
			key: 'stt',
			fixed: 'left',
			align: 'center' as const,
			render: (item , data, index) => <span>{index + 1}</span>
		},
		{
			title: 'Ngày đăng ký',
			width: 150,
			dataIndex: 'registrationDate',
			key: 'registrationDate',
			align: 'center',
			// sorter: (a, b) => {
			// 	return 0
			// }
		},
		{
			title: 'Loại vé',
			width: 100,
			dataIndex: 'ticket',
			align: 'center',
			key: 'ticket',
			render: (item ) => <span>
				{item === 'free' && (
					<Tag color="blue">FREE</Tag>
				)}
				{item === 'vip' && (
					<Tag color="red">VIP</Tag>
				)}
				{item === 'premium' && (
					<Tag color="gold">PREMIUM</Tag>
				)}
			</span>
		},
		{
			title: 'Tên học viên',
			width: 180,
			dataIndex: 'studentName',
			key: 'studentName',
			align: 'center',
		},
		{
			title: 'Số điện thoại',
			width: 120,
			dataIndex: 'phoneNumber',
			key: 'phoneNumber',
			align: 'center',
		},
		{
			title: 'Email',
			width: 150,
			dataIndex: 'email',
			key: 'email',
			align: 'center',
		},
		{
			title: 'Mã học viên',
			width: 100,
			dataIndex: 'studentCode',
			key: 'studentCode',
			align: 'center',
		},
		{
			title: 'Người giới thiệu',
			width: 180,
			dataIndex: 'presenter',
			align: 'center',
			key: 'presenter',
		},
		{
			title: 'Tên diễn giả',
			width: 180,
			dataIndex: 'creatorName',
			key: 'creatorName',
			align: 'center',
		},
		{
			title: 'Tên khóa học',
			width: 180,
			dataIndex: 'courseName',
			key: 'courseName',
			align: 'center',
		},
		{
			title: 'Số điểm',
			width: 130,
			dataIndex: 'scores',
			key: 'scores',
			align: 'center',
			sorter: {
				compare: (a, b) => Number(a.scores) - Number(b.scores),
			  }
		},
		{
			title: 'Xác thực email',
			width: 180,
			dataIndex: 'emailStatus',
			key: 'emailStatus',
			align: 'center',
			render: (item) => {
				return (item === 'valid' ? <span className='text-valid'>Đã xác thực</span> : <span className='text-invalid'>Chưa xác thực</span>)
			}
			// <Badge status={item === 'valid' ? 'success' : 'error'} text={item === 'valid' ? 'Đã xác thực' : 'Chưa xác thực'} />
		},
		{
			title: 'Trạng thái',
			width: 180,
			dataIndex: 'userStatus',
			key: 'userStatus',
			align: 'center',
			render: (item) => {
				return (item === 'valid' ? <span className='text-valid'>Có tài khoản</span> : <span className='text-invalid'>Chưa có tài khoản</span>)
			}
			// <Badge status={item === 'valid' ? 'success' : 'error'} text={item === 'valid' ? 'Có tài khoản' : 'Chưa có tài khoản'} />
			
		},
		{
			title: 'Chức năng',
			width: 180,
			key: 'operation',
			fixed: 'right',
			align: 'center',
			render: () => <div>
				<span className='margin-r custom-action'>Chi tiết</span>
				<Dropdown menu={{items}}>
					<span className='custom-action'>
						Chăm sóc 
					</span>
            	</Dropdown>
			</div>,
		}
	]

	const getStudent = () => {
		let response = axiosClient.get('User').then(res => {
			console.log(res)
		}).catch(error => {
			console.log(error)
		})
	}

	useEffect(() => {
		getStudent();
	},[]);

	const [isOpen, setIsOpen] = useState<boolean>(false);


	return (
		<div className='page-layout'>
			<Collapse 
				className={`filter-data ${isOpen? 'expand' : ''}`}
				onChange={(event)=> {
					if (event.length === 0) {
						setIsOpen(false)
					} else {
						setIsOpen(true)
					}
				}}
				items={[{ key: '1', label: 'Lọc', children: <FilterTable />}]}
			/>
			
			<Table 
				bordered = {true}
				columns={columns} 
				dataSource={data} 
				scroll={{ x: 800, y: 300 }} 
			/>
		</div>
	)
}
export default WaitingStudent
