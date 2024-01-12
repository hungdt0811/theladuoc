import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
} from '../menu-ct';

// Khai bao component can su dung
const MANAGEMENT = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report')),
}
const FEATURE_PERMISSION = {
	LIST: lazy(() => import('../pages/custom/feature-permission/FeaturePermissionList')),
	ADD: lazy(() => import('../pages/custom/feature-permission/FeaturePermissionAdd')),
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

const feature: RouteProps[] = [
	{
		path: developmentMenu.featureCategory.subMenu.permissionFeature.path,
		element: <FEATURE_PERMISSION.LIST />
	},
	{
		path: developmentMenu.featureCategory.subMenu.permissionFeatureAdd.path,
		element: <FEATURE_PERMISSION.ADD />
	}
]

const contents = [...presentation, ...feature];

export default contents;
