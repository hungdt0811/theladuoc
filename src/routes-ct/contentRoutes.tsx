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

const presentation: RouteProps[] = [
	{
		path: managementMenu.reportCategory.subMenu.synthesisReport.path,
		element: <QUAN_LY.DASHBOARD />
	}

]

const documentation: RouteProps[] = [
	
]

const contents = [...presentation, ...documentation];

export default contents;
