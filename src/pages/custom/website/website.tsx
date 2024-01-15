import React, { useState } from 'react';
import dayjs from 'dayjs';
import { FormikHelpers, useFormik } from 'formik';
import classNames from 'classnames';
import { Calendar as DatePicker } from 'react-date-range';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Card, {
    CardActions,
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../../components/bootstrap/Card';
import { priceFormat } from '../../../helpers/helpers';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../components/bootstrap/Modal';
import OffCanvas, {
    OffCanvasBody,
    OffCanvasHeader,
    OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Checks from '../../../components/bootstrap/forms/Checks';
import Popovers from '../../../components/bootstrap/Popovers';
// import data from '../../../common/data/dummyEventsData';
import data from '../../../data/data';
import USERS from '../../../common/data/userDummyData';
import { demoPagesMenu } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';
import Label from '../../../components/bootstrap/forms/Label';
import { ChecksGroup } from '../../../components/bootstrap/forms/Checks';

const Websitepage = () => {
    const { themeStatus, darkModeStatus } = useDarkMode();
    const [date, setDate] = useState<Date>(new Date());

    // BEGIN :: Upcoming Events
    const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState<boolean>(false);
    const handleUpcomingDetails = () => {
        setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
    };

    const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState<boolean>(false);
    const handleUpcomingEdit = () => {
        setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
    };
    // END :: Upcoming Events

    const formik = useFormik({
        onSubmit<Values>(
            values: Values,
            formikHelpers: FormikHelpers<Values>,
        ): void | Promise<any> {
            return undefined;
        },
        initialValues: {
            customerName: 'Alison Berry',
            service: 'Exercise Bike',
            employee: `${USERS.GRACE.name} ${USERS.GRACE.surname}`,
            location: 'Maryland',
            date: dayjs().add(1, 'days').format('YYYY-MM-DD'),
            time: '10:30',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisi odio. Nam sit amet pharetra enim. Nulla facilisi. Nunc dictum felis id massa mattis pretium. Mauris at blandit orci. Nunc vulputate vulputate turpis vitae cursus. In sit amet turpis tincidunt, interdum ex vitae, sollicitudin massa. Maecenas eget dui molestie, ullamcorper ante vel, tincidunt nisi. Donec vitae pulvinar risus. In ultricies nisl ac massa malesuada, vel tempus neque placerat.',
            notify: true,
            checkOne: true,
            feature1: true,
            feature2: true,
            feature3: true,
        },
    });
    return (
        <PageWrapper title={demoPagesMenu.editPages.subMenu.editInModal.text}>
            <Page container='fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Card>
                            <CardHeader borderSize={1}>
                                <CardLabel icon='Web' iconColor='info'>
                                    <CardTitle tag='div' className='h5'>
                                        Danh sách các website
                                    </CardTitle>
                                </CardLabel>
                                <CardActions>
                                    <Button
                                        color='info'
                                        icon='CloudDownload'
                                        isLight
                                        tag='a'
                                        to='/somefile.txt'
                                        target='_blank'
                                        download>
                                        Xuất file
                                    </Button>
                                </CardActions>
                            </CardHeader>
                            <CardBody className='table-responsive'>
                                <table className='table table-modern'>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Diễn giả</th>
                                            <th>Website</th>
                                            <th>Trạng thái</th>
                                            <th>Chức năng</th>
                                            <th aria-labelledby='Actions' />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((web, i) => (
                                            <tr key={web.id}>
                                                <td>
                                                    {i + 1}
                                                </td>
                                                <td className=''>
                                                    {web.lecturer}
                                                </td>
                                                <td className=''>
                                                    {web.website}
                                                </td>
                                                <td className=''>
                                                    {web.status ? <h2>True</h2> : <h2>False</h2>}
                                                </td>
                                                <td className=''>
                                                    {web.feature.length}
                                                </td>
                                                <td>
                                                    <Button
														isOutline={!darkModeStatus}
														color='dark'
														isLight={darkModeStatus}
														className={classNames('text-nowrap', {
															'border-light': !darkModeStatus,
														})}
														icon='Edit'
														onClick={handleUpcomingEdit}>
														Sửa
													</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>

                        {/* <OffCanvas
							setOpen={setUpcomingEventsInfoOffcanvas}
							isOpen={upcomingEventsInfoOffcanvas}
							titleId='upcomingDetails'
							isModalStyle
							isBackdrop={false}>
							<OffCanvasHeader setOpen={setUpcomingEventsInfoOffcanvas}>
								<OffCanvasTitle id='upcomingDetails'>
									URL
								</OffCanvasTitle>
							</OffCanvasHeader>
							<OffCanvasBody>
								<Card>
									<CardBody>
										<div className='row g-4'>
											<div className='col-12'>
												<FormGroup id='dateInfo' label='Date/Time'>
													<Input
														value={dayjs(
															// @ts-ignore
															`${data.find((e) => e.id === 1).date} ${
																// @ts-ignore
																data.find((e) => e.id === 1).time
															}`,
														).format('MMM Do YYYY, h:mm a')}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup id='noteInfo' label='Note'>
													<Textarea
														value={formik.values.note}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
							</OffCanvasBody>
						</OffCanvas> */}

                        <Modal
                            setIsOpen={setUpcomingEventsEditOffcanvas}
                            isOpen={upcomingEventsEditOffcanvas}
                            titleId='upcomingEdit'
                            isCentered
                            isScrollable
                            size='lg'>
                            <ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
                                <OffCanvasTitle id='upcomingEdit'>Chỉnh sửa</OffCanvasTitle>
                            </ModalHeader>
                            <ModalBody>
                                <div className='row g-4'>
                                    <div className='col-12'>
                                        <FormGroup id='lecturer' label='Giảng viên' isFloating>
                                            <Input
                                                placeholder='Giảng viên'
                                                onChange={formik.handleChange}
                                                value='Nguyễn Văn A'
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className='col-12'>
                                        <FormGroup id='customerName' label='Domain' isFloating>
                                            <Input
                                                placeholder='theladuoc.vn'
                                                onChange={formik.handleChange}
                                                value="theladuoc.vn"
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className='col-12'>
                                        <FormGroup id='status' label='Trạng thái'>
											<ChecksGroup>
												<Checks
													type='switch'
													id='inlineCheckOne'
													label='Kích hoạt'
													name='checkOne'
													onChange={formik.handleChange}
													checked={formik.values.checkOne}
												/>
											</ChecksGroup>
										</FormGroup>
                                    </div>
                                    <div className='col-12'>
                                        <div className='row g4'>
                                            <div className='col-4'>
                                                <FormGroup id='feature' label='Chức năng'>
                                                    <ChecksGroup>
                                                        <Checks
                                                            type='switch'
                                                            id='inlineCheckFeature1'
                                                            label='Chức năng 1'
                                                            name='feature1'
                                                            onChange={formik.handleChange}
                                                            checked={formik.values.feature1}
                                                        />
                                                        <Checks
                                                            type='switch'
                                                            id='inlineCheckFeature2'
                                                            label='Chức năng 2'
                                                            name='feature2'
                                                            onChange={formik.handleChange}
                                                            checked={formik.values.feature2}
                                                        />
                                                        <Checks
                                                            type='switch'
                                                            id='inlineCheckFeature3'
                                                            label='Chức năng 3'
                                                            name='feature3'
                                                            onChange={formik.handleChange}
                                                            checked={formik.values.feature3}
                                                        />
                                                    </ChecksGroup>
                                                </FormGroup>    
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </ModalBody>
                            <ModalFooter className='bg-transparent'>
                                <Button
                                    color='info'
                                    className='w-100'
                                    onClick={() => setUpcomingEventsEditOffcanvas(false)}>
                                    Lưu lại
                                </Button>
                                <Button
                                    color='danger'
                                    className='w-100'
                                    onClick={() => setUpcomingEventsEditOffcanvas(false)}>
                                    Xóa
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};

export default Websitepage;
