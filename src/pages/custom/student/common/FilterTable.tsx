import { Button, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { DatePicker} from 'antd';
import '../../../../styles/components/_student.scss'
import PhoneInput from './PhoneInput';
import { useFormik} from 'formik';
import dayjs from 'dayjs';

const FilterTable = () => {
    const { RangePicker } = DatePicker;

    const formik = useFormik({
        initialValues: {
            studentName: '',
            email: '',
            ticket: '',
            presenter: '',
            studentCode: '',
            phoneNumber: '',
            creatorName: '',
            courseName: '',
            startDate: null,
            endDate: null,
        },
        onSubmit: values => {
          console.log(values)
        },
    });
    
    return (
        <>
            <Form onFinish={() => formik.handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Tên học viên </span>
                        </Col>
                            <Input id='studentName' name="studentName"  value={formik.values.studentName}
                                onChange={formik.handleChange}
                                style={{ width: 200 }} placeholder="Nhập tên học viên" autoFocus={true}
                            />
                        </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Email</span>
                        </Col>
                        <Input id='email' style={{ width: 200 }} placeholder="Nhập email" type='email' value={formik.values.email} onChange={formik.handleChange}/>
                    </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Người giới thiệu</span>
                        </Col>
                        <Input id='presenter' style={{ width: 200 }} placeholder="Nhập tên người giới thiệu" value={formik.values.presenter} onChange={formik.handleChange}/>
                    </Col>

                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Mã học viên</span>
                        </Col>
                            <Input id='studentCode' style={{ width: 200 }} placeholder="Nhập mã học viên" value={formik.values.studentCode} onChange={formik.handleChange}/>
                        </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Số điện thoại</span>
                        </Col>
                        <PhoneInput 
                            id='phoneNumber' style={{ width: 200 }}  
                            value={formik.values.phoneNumber} onChange={(event) => {formik.setFieldValue('phoneNumber', event)}}
                        />
                    </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Tên diễn giả</span>
                        </Col>
                        <Input id='creatorName' style={{ width: 200 }} placeholder="Nhập tên diễn giả" value={formik.values.creatorName} onChange={formik.handleChange}/>
                    </Col>

                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Loại vé</span>
                        </Col>
                        <Select
                            id='ticket'
                            placeholder="Chọn loại vé"
                            style={{ width: 200 }}
                            value={formik.values.ticket}
                            onChange={(event) => {
                                formik.setFieldValue('ticket', event)
                            }}
                            options={[
                                { value: 'free', label: 'Free' },
                                { value: 'vip', label: 'Vip' },
                                { value: 'premium', label: 'Premium' },
                            ]}
                        />
                    </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Ngày đăng ký</span>
                        </Col>
                        <RangePicker format={'DD/MM/YYYY'} value={[formik.values.startDate, formik.values.endDate]} 
                            onChange={(event) => {
                                formik.setFieldValue('startDate', event?.[0])
                                formik.setFieldValue('endDate', event?.[1])
                            }}
                        />
                    </Col>
                    <Col span={8} className='flex-center'>
                        <Col span={6} className='text-end'>
                            <span>Tên khóa học</span>
                        </Col>
                        <Input id='courseName' style={{ width: 200 }} placeholder="Nhập tên khóa học" value={formik.values.courseName} onChange={formik.handleChange}/>
                    </Col>
                </Row>
                <Row className='btn-form'>
                    <Col span={6} offset={19}>
                        <Button type="primary" className='btn-custom' htmlType='submit' 
                            onClick={() => {
                                ///handle event submit here
                                console.log(formik.values)
                            }}
                        >Gửi</Button>
                        <Button className='btn-custom' onClick={() => formik.resetForm()}>Clear</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default FilterTable