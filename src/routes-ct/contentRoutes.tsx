import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
} from '../menu-ct';
import Login from '../pages/presentation/auth/Login';

// Khai bao component can su dung
const MANAGEMENT = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report/synthesis_report')),
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
	}

}

const management: RouteProps[] = [
	{
		path: managementMenu.reportCategory.subMenu.synthesisReport.path,
		element: <MANAGEMENT.DASHBOARD />
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
