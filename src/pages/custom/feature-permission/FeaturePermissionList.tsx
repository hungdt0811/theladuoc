import React from 'react';
import { demoPagesMenu } from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';

import { developmentMenu } from '../../../menu-ct';
import CommonPermissionAlert from './common/CommonPermissionAlert';
import CommenPermissionTable from './common/CommonPermissionTable';
import Button from '../../../components/bootstrap/Button';

const FeaturePermissionList = () => {
	return (
		<PageWrapper title={demoPagesMenu.sales.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Danh sách nhóm quyền</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						tag='a'
						to={`../${developmentMenu.featureCategory.subMenu.permissionFeatureAdd.path}`}
						color='success'
						isLight>
						Thêm mới
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12 d-none'>
						<CommonPermissionAlert />
					</div>
					<div className='col-12'>
						<CommenPermissionTable />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default FeaturePermissionList;