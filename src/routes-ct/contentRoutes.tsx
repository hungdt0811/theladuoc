import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
} from '../menu-ct';

// Khai bao component can su dung
const MANAGEMENT = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report')),
	PERMISSION: {
		LIST: lazy(() => import('../pages/custom/permission/PermissionList')),
		ADD: lazy(() => import('../pages/custom/permission/PermissionAdd')),
		EDIT: lazy(() => import('../pages/custom/permission/PermissionEdit')),
	},
	STUDENT: {
		LIST: lazy(() => import('../pages/custom/student/StudentList')),
	}
}

const DEVELOPMENT = {
	FORM: lazy(() => import('../pages/custom/form')),
}

const presentation: RouteProps[] = [
	{
		path: managementMenu.reportCategory.subMenu.synthesisReport.path,
		element: <MANAGEMENT.DASHBOARD />
	},


	// Development
	{
		path: developmentMenu.featureCategory.subMenu.signUpAccountFeature.path,
		element: <DEVELOPMENT.FORM />
	}
]

const management: RouteProps[] = [
	{
		path: managementMenu.permission.path,
		element: <MANAGEMENT.PERMISSION.LIST />
	},
	{
		path: managementMenu.permission.subPath.permissionAdd.path,
		element: <MANAGEMENT.PERMISSION.ADD />
	},
	{
		path: `${managementMenu.permission.subPath.permissionEdit.path}/:id`,
		element: <MANAGEMENT.PERMISSION.EDIT />
	},
	{
		path: managementMenu.studentCategory.subMenu.penddingType.path,
		element: <MANAGEMENT.STUDENT.LIST />
	},
	{
		path: managementMenu.studentCategory.subMenu.freeType.path,
		element: <MANAGEMENT.STUDENT.LIST />
	},
]

const feature: RouteProps[] = [
	
]

const contents = [...presentation, ...management, ...feature];

export default contents;
