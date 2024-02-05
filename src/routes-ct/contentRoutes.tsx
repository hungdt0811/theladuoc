import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
	customsMenu,
} from '../menu-ct';

// Khai bao component can su dung
const MANAGEMENT = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report/synthesis_report')),
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
	// SIGN_UP_MEMBER_LIST: lazy(() => import('../pages/custom/sign_up_member/main_content')),
	// FEATURE_PERMISSION: {
	// 	LIST: lazy(() => import('../pages/custom/feature-permission/FeaturePermissionList')),
		
	// }
	WEBSITE: {
		LIST: lazy(() => import('../pages/custom/website/website'))
	},
	E_LEARNING: {
		LIST: lazy(() => import('../pages/custom/e_learning/e_learning'))
	},
	STUDENT: {
		WATTING: lazy(() => import('../pages/custom/student/WaitingStudent'))
	}

}

const management: RouteProps[] = [
	{
		path: managementMenu.reportCategory.subMenu.synthesisReport.path,
		element: <MANAGEMENT.DASHBOARD />
	},
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
		element: <DEVELOPMENT.STUDENT.WATTING />
	},
	{
		path: managementMenu.studentCategory.subMenu.freeType.path,
		element: <MANAGEMENT.STUDENT.LIST />
	},
	{
		path: customsMenu.student.subMenu.waiting.path,
		element: <DEVELOPMENT.STUDENT.WATTING />,
	},
]
const feature: RouteProps[] = [
	// {
	// 	path: developmentMenu.featureCategory.subMenu.permissionFeature.path,
	// 	element: <DEVELOPMENT.FEATURE_PERMISSION.LIST />
	// },
	// {
	// 	path: developmentMenu.featureCategory.subMenu.signUpAccountFeature.path,
	// 	element: <DEVELOPMENT.SIGN_UP_MEMBER_LIST />
	// }
	{
		path: developmentMenu.featureCategory.subMenu.elearningFeature.path,
		element: <DEVELOPMENT.E_LEARNING.LIST />
	},
	{
		path: developmentMenu.featureCategory.subMenu.websiteFeature.path,
		element: <DEVELOPMENT.WEBSITE.LIST />
	}
	
]


const contents = [...management, ...feature];

export default contents;
