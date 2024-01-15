import React from 'react';
import { useFormik } from 'formik';
import { demoPagesMenu } from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { managementMenu } from '../../../menu-ct';

import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Card, { CardBody, CardFooter, CardFooterLeft, CardFooterRight, CardHeader, CardLabel, CardTitle } from '../../../components/bootstrap/Card';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import { Label } from '../../../components/icon/material-icons';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Select from '../../../components/bootstrap/forms/Select';

interface IValues {
	roleName: string;
	roleDescription: string;
}

const validate = (values: IValues) => {
	const errors = {
		roleName: '',
		roleDescription: '',
	};

	if (!values.roleName) {
		errors.roleName = 'Tên nhóm quyền không được để trống!';
	} else if (values.roleName.length < 3) {
		errors.roleName = 'Tên nhóm quyền quá ngắn!';
	} else if (values.roleName.length > 50) {
		errors.roleName = 'Tên nhóm quyền quá dài!';
	}

	if (values.roleDescription.length > 250) {
		errors.roleDescription = 'Nội dung mô tả nhóm quyền quá dài!'
	}

	return errors;
};

const PermissionAdd = () => {
	const formik = useFormik({
		initialValues: {
			roleName: '',
			roleDescription: '',
			permissionGroups: [
				{
					id: 1,
					label: 'Danh mục',
					permissions: [
						{ id: 2, label: 'Xem danh sách', isChecked: false },
						{ id: 3, label: 'Thêm mới', isChecked: false },
						{ id: 4, label: 'Chỉnh sửa', isChecked: false },
						{ id: 5, label: 'Xoá', isChecked: false },
					],
				},
				{
					id: 10,
					label: 'Tài khoản',
					name: 'permisstion2',
					permissions: [
						{ id: 11, label: 'Permission 10', isChecked: false },
						{ id: 12, label: 'Permission 11', isChecked: false },
						{ id: 13, label: 'Permission 12', isChecked: false },
						{ id: 14, label: 'Permission 13', isChecked: false },
					],
				},
			],
		},
		validate,
		onSubmit: (values) => {
			console.log('isValid:', formik.isValid);
			console.log('submitCount:', formik.submitCount);
		},
	});

	const handleCheckAll = (groupId: number) => {
		const updatedGroups = formik.values.permissionGroups.map((group) => {
			if (group.id === groupId) {
				const updatedPermissions = group.permissions.map((permission) => ({
					...permission,
					isChecked: !group.permissions.every((perm) => perm.isChecked),
				}));
				return {
					...group,
					permissions: updatedPermissions,
				};
			}
			return group;
		});

		formik.setValues({
			...formik.values,
			permissionGroups: updatedGroups,
		});
	};

	const handleCheckboxChange = (groupId: number, permissionId: number) => {
		const updatedGroups = formik.values.permissionGroups.map((group) => {
			if (group.id === groupId) {
				const updatedPermissions = group.permissions.map((permission) =>
					permission.id === permissionId
						? { ...permission, isChecked: !permission.isChecked }
						: permission
				);
				return {
					...group,
					permissions: updatedPermissions,
				};
			}
			return group;
		});

		formik.setValues({
			...formik.values,
			permissionGroups: updatedGroups,
		});
	};

	return (
		<PageWrapper title={managementMenu.permissionAdd.text}>
			<Page container='fluid'>
				<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
					<CardHeader>
						<h3>{managementMenu.permissionAdd.text}</h3>
					</CardHeader>
					<CardBody>
						<div className='row'>
							<div className='col-sm-6'>
								<FormGroup className='mb-3' id='roleName' label='Tên nhóm quyền'>
									<Input
										type='text'
										name='roleName'
										value={formik.values.roleName}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.roleName}
										invalidFeedback={formik.errors.roleName}
									/>
								</FormGroup>
								<FormGroup
									className='mb-3'
									id='roleDescription'
									label='Mô tả nhóm quyền'>
									<Textarea
										className='col'
										name='roleDescription'
										value={formik.values.roleDescription}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.roleDescription}
										invalidFeedback={formik.errors.roleDescription}
									/>
								</FormGroup>
							</div>
						</div>
						<div className='row'>
							{formik.values.permissionGroups.map((group) => (
								<div className='col-lg-3 col-sm-6' key={group.id}>
									<Card isCompact shadow='none' className='mb-0'>
										<CardHeader>
											<CardLabel>
												<CardTitle>
													<FormGroup className='cursor-pointer custom-form-check'>
														<Checks
															id={`checkbox-${group.id}`}
															label={group.label}
															name='permisstions[]'
															checked={group.permissions.every((permission) => permission.isChecked)}
															onChange={() => handleCheckAll(group.id)}
														/>
													</FormGroup>
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											{group.permissions.map((permission) => (
												<FormGroup className='cursor-pointer' key={permission.id}>
													<Checks
														id={`checkbox-${group.id}-${permission.id}`}
														label={permission.label}
														name='permisstions[]'
														checked={permission.isChecked}
														onChange={() => handleCheckboxChange(group.id, permission.id)}
													/>
												</FormGroup>
											))}
										</CardBody>
									</Card>
								</div>
							))}
						</div>
					</CardBody>
					<CardFooter>
						<CardFooterLeft>
							<Button type='reset' color='info' isOutline onClick={formik.resetForm}>
								Đặt lại
							</Button>
						</CardFooterLeft>
						<CardFooterRight>
							<Button
								type='submit'
								color='success'
								isDisable={!formik.isValid && !!formik.submitCount}>
								{`Thêm mới ${formik.isValid}`}
							</Button>
						</CardFooterRight>
					</CardFooter>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default PermissionAdd;
