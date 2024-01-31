import React, { useState } from 'react';
import { Badge, Dropdown, Table } from 'antd';
import type { MenuProps, TableColumnsType } from 'antd';

const WaitingStudent = () => {
	const data: DataType[] = [
		{
			id: '1',
			registrationDate: '28/01/2024',
			ticket: 'Free',
			studentName: 'Hùng Nguyễn',
			phoneNumber: '0123456789',
			email: 'ht811@gmail.com',
			studentCode: 'ht811',
			presenter: 'Linh Nguyễn',
			creatorName: 'Linh Nguyễn',
			courseName: 'Khóa front-end',
			scores: '10',
			emailStatus: 'valid',
			userStatus: 'valid',
		},
		{
			id: '2',
			registrationDate: '28/01/2024',
			ticket: 'Vip',
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
			ticket: 'Vip',
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
		},
		{
			id: '4',
			registrationDate: '28/01/2024',
			ticket: 'Vip',
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
		ticket: 'Free' | 'Vip' | 'Premium',
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
		},
		{
			title: 'Loại vé',
			width: 100,
			dataIndex: 'ticket',
			align: 'center' as const,
			key: 'ticket',
		},
		{
			title: 'Tên học viên',
			width: 180,
			dataIndex: 'studentName',
			key: 'studentName',
		},
		{
			title: 'Số điện thoại',
			width: 120,
			dataIndex: 'phoneNumber',
			key: 'phoneNumber',
		},
		{
			title: 'Email',
			width: 150,
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Mã học viên',
			width: 100,
			dataIndex: 'studentCode',
			key: 'studentCode',
			align: 'center' as const,
		},
		{
			title: 'Người giới thiệu',
			width: 180,
			dataIndex: 'presenter',
			key: 'presenter',
		},
		{
			title: 'Tên diễn giả',
			width: 180,
			dataIndex: 'creatorName',
			key: 'creatorName',
		},
		{
			title: 'Tên khóa học',
			width: 180,
			dataIndex: 'courseName',
			key: 'courseName',
		},
		{
			title: 'Số điểm',
			width: 100,
			dataIndex: 'scores',
			key: 'scores',
			align: 'center' as const,
		},
		{
			title: 'Xác thực email',
			width: 180,
			dataIndex: 'emailStatus',
			key: 'emailStatus',
			render: (item) => <Badge status={item === 'valid' ? 'success' : 'error'} text={item === 'valid' ? 'Đã xác thực' : 'Chưa xác thực'} />,
		},
		{
			title: 'Trạng thái',
			width: 180,
			dataIndex: 'userStatus',
			key: 'userStatus',
			render: (item) => <Badge status={item === 'valid' ? 'success' : 'error'} text={item === 'valid' ? 'Có tài khoản' : 'Chưa có tài khoản'} />
		},
		{
			title: 'Chức năng',
			width: 180,
			key: 'operation',
			fixed: 'right',
			render: () => <div>
				<span className='mr-5 cursor-pointer hover:text-blue-600'>Chi tiết</span>
				<Dropdown menu={{items}}>
					<span className='cursor-pointer hover:text-blue-600'>
						Chăm sóc 
					</span>
            	</Dropdown>
			</div>,
		}
	]

	return (
		<div style={{
			margin: '1rem 1.5rem',
			display: 'flex',
			justifyContent: 'center',
			width: '97%'
		}}>
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
