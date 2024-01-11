import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
} from '../menu-ct';
import Login from '../pages/presentation/auth/Login';

// Khai bao component can su dung
const QUAN_LY = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report')),
}
const FEATURE_PERMISSION = {
	LIST: lazy(() => import('../pages/custom/feature-permission/FeaturePermissionList')),
}

const presentation: RouteProps[] = [
	{
		path: managementMenu.reportCategory.subMenu.synthesisReport.path,
		element: <QUAN_LY.DASHBOARD />
	}
]

const feature: RouteProps[] = [
	{
		path: developmentMenu.featureCategory.subMenu.permissionFeature.path,
		element: <FEATURE_PERMISSION.LIST />
	}
]

const contents = [...presentation, ...feature];

export default contents;
