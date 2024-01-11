import React from 'react';
import Alert, { AlertHeading } from '../../../../components/bootstrap/Alert';

const CommonPermissionAlert = () => {
	return (
		<Alert
			icon='Verified'
			isLight
			color='primary'
			borderWidth={0}
			className='shadow-3d-primary'
			isDismissible>
			<AlertHeading tag='h2' className='h4'>
				Thành công! 🎉
			</AlertHeading>
			<span>Tạo thành công nhóm quyền mới.</span>
		</Alert>
	);
};

export default CommonPermissionAlert;
