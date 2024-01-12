import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	managementMenu,
	developmentMenu,
} from '../menu-ct';
import Login from '../pages/presentation/auth/Login';

// Khai bao component can su dung
const MANAGEMENT = {
	DASHBOARD: lazy(() => import('../pages/custom/synthesis_report')),
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

const documentation: RouteProps[] = [
	
]

const contents = [...presentation, ...documentation];

export default contents;
