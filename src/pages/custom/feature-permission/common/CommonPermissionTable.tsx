import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Card, {
	CardBody
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import data from '../../../../common/data/dummyEventsData';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../../components/PaginationButtons';
import useSortableData from '../../../../hooks/useSortableData';
import useDarkMode from '../../../../hooks/useDarkMode';

interface ICommonPermissionTableProps {
	isFluid?: boolean;
}
const CommonPermissionTable: FC<ICommonPermissionTableProps> = ({ isFluid }) => {
	const { darkModeStatus } = useDarkMode();

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items } = useSortableData(data);

	return (
		<Card stretch={isFluid}>
			<CardBody className='table-responsive' isScrollable={isFluid}>
				<table className='table table-modern table-permis-feature'>
					<thead>
						<tr>
							<th className='text-center'>STT</th>
							<th className='mw-colname'>Tên nhóm quyền</th>
							<th>Mô tả chi tiết</th>
							<td aria-labelledby='Actions' />
						</tr>
					</thead>
					<tbody>
						{dataPagination(items, currentPage, perPage).map((item, index) => (
							<tr key={item.id}>
								<td className='text-center'>{index + 1}</td>
								<td>
									<div>
										<div>{item.customer.name}</div>
									</div>
								</td>
								<td>
									<div>{item.service.name}</div>
								</td>
								<td>
									<div className='text-end d-flex'>
										<Button
											isOutline={!darkModeStatus}
											color='dark'
											isLight={darkModeStatus}
											className={classNames('text-nowrap me-1', {
												'border-light': !darkModeStatus,
											})}
											icon='Edit'
											aria-label='Chỉnh sửa'
										/>
										<Button
											isOutline={!darkModeStatus}
											color='danger'
											isLight={darkModeStatus}
											className={classNames('text-nowrap', {
												'border-light': !darkModeStatus,
											})}
											icon='Delete'
											aria-label='Chỉnh sửa'
										/>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardBody>
			<PaginationButtons
				data={items}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</Card>
	);
};
CommonPermissionTable.defaultProps = {
	isFluid: false,
};

export default CommonPermissionTable;
