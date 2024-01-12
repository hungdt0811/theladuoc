import React from 'react';
import { useFormik } from 'formik';
import { demoPagesMenu } from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { developmentMenu } from '../../../menu-ct';

import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from '../../../components/bootstrap/Card';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Checks from '../../../components/bootstrap/forms/Checks';

interface IValues {
    namePermission: string;
    notePermission: string;
}

const validate = (values: IValues) => {
    const errors = {
        namePermission: '',
        notePermission: '',
    };

    if (!values.namePermission) {
        errors.namePermission = 'Tên nhóm quyền không được để trống!';
    } else if (values.namePermission.length < 3) {
        errors.namePermission = 'Tên nhóm quyền quá ngắn!';
    } else if (values.namePermission.length > 50) {
        errors.namePermission = 'Tên nhóm quyền quá dài!';
    }

    if (values.notePermission.length > 250) {
        errors.notePermission = 'Nội dung mô tả nhóm quyền quá dài!'
    }

    return errors;
};

const FeaturePermissionList = () => {
    const formik = useFormik({
        initialValues: {
            namePermission: '',
            notePermission: '',
        },
        validate,
        onSubmit: (values) => {
            // setAdd(false);
        },
    });

    const flexChecks = useFormik({
        initialValues: {
            Check1: false,
            Check1_1: false,
            Check1_2: false,
            Check1_3: false,
            Check1_4: false,
            Check2: false,
            Check2_1: false,
            Check2_2: false,
            Check2_3: false,
            Check2_4: false,
            Check2_5: false,
        },
        onSubmit: () => { },
    });

    return (
        <PageWrapper title={developmentMenu.featureCategory.subMenu.permissionFeatureAdd.text}>
            {/* <SubHeader>
                <SubHeaderLeft>
                    <span className='h4 mb-0 fw-bold'>Thêm mới nhóm quyền</span>
                </SubHeaderLeft>
            </SubHeader> */}
            <Page container='fluid'>
                <Card>
                    <CardBody>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <FormGroup
                                    className='mb-3'
                                    id='namePermission'
                                    label='Tên nhóm quyền'>
                                    <Input
                                        type='text'
                                        name='namePermission'
                                        value={formik.values.namePermission}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isValid={formik.isValid}
                                        isTouched={formik.touched.namePermission}
                                        invalidFeedback={formik.errors.namePermission}
                                    />
                                </FormGroup>
                            </div>
                            <div className='col-sm-6'>
                                <FormGroup
                                    className='mb-3'
                                    id='notePermission'
                                    label='Mô tả nhóm quyền'>
                                    <Textarea
                                        className='col'
                                        name='notePermission'
                                        value={formik.values.notePermission}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isValid={formik.isValid}
                                        isTouched={formik.touched.notePermission}
                                        invalidFeedback={formik.errors.notePermission}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-sm-6'>
                                <Card isCompact shadow='none' className='mb-0'>
                                    <CardHeader>
                                        <CardLabel>
                                            <CardTitle>
                                                <FormGroup className='cursor-pointer custom-form-check'>
                                                    <Checks
                                                        id='flexCheckChecked1.0'
                                                        label='Danh mục'
                                                        name='Check1'
                                                        onChange={flexChecks.handleChange}
                                                        checked={flexChecks.values.Check1}
                                                    />
                                                </FormGroup>
                                            </CardTitle>
                                        </CardLabel>
                                    </CardHeader>
                                    <CardBody>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked1'
                                                label='Xem danh sách'
                                                name='Check1_1'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check1_1}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked2'
                                                label='Thêm mới'
                                                name='Check1_2'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check1_2}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked3'
                                                label='Chỉnh sửa'
                                                name='Check1_3'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check1_3}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked4'
                                                label='Xoá'
                                                name='Check1_4'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check1_4}
                                            />
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className='col-lg-3 col-sm-6'>
                                <Card isCompact shadow='none' className='mb-0'>
                                    <CardHeader>
                                        <CardLabel>
                                            <CardTitle>
                                                <FormGroup className='cursor-pointer custom-form-check'>
                                                    <Checks
                                                        id='flexCheckChecked2.0'
                                                        label='Học viên'
                                                        name='Check2'
                                                        onChange={flexChecks.handleChange}
                                                        checked={flexChecks.values.Check2}
                                                    />
                                                </FormGroup>
                                            </CardTitle>
                                        </CardLabel>
                                    </CardHeader>
                                    <CardBody>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked5'
                                                label='Xem danh sách học viên đang chờ'
                                                name='Check2_1'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check2_1}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked6'
                                                label='Xem danh sách học viên miễn phí'
                                                name='Check2_2'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check2_2}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked7'
                                                label='Xem danh sách học viên mu vé'
                                                name='Check2_3'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check2_3}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked8'
                                                label='Xem hành trình học viên'
                                                name='Check2_4'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check2_4}
                                            />
                                        </FormGroup>
                                        <FormGroup className='cursor-pointer'>
                                            <Checks
                                                id='flexCheckChecked9'
                                                label='...'
                                                name='Check2_5'
                                                onChange={flexChecks.handleChange}
                                                checked={flexChecks.values.Check2_5}
                                            />
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Page>
        </PageWrapper>
    );
};

export default FeaturePermissionList;
