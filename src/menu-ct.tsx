import { hide } from "@popperjs/core"

export const managementMenu = {
	category: {
		id: 'category',
		text: 'Quản lý',
		icon: 'Extension',
	},
	reportCategory: {
		id: 'reportCategory',
		text: 'Báo cáo',
		path: 'bao-cao',
		icon: 'Dvr',
		subMenu: {
			synthesisReport: {
				id: 'synthesisReport',
				text: 'Tổng hợp',
				path: 'bao-cao/tong-hop',
				icon: 'Article',
			},
			growthReport: {
				id: 'growthReport',
				text: 'Tăng trưởng',
				path: 'bao-cao/tang-truong',
				icon: 'Article',
			},
			hrPerformanceReports: {
				id: 'hrPerformanceReports',
				text: 'Hiệu suất nhân sự',
				path: 'bao-cao/hieu-suat-nhan-su',
				icon: 'Article',
			},
			studentReports: {
				id: 'studentReports',
				text: 'Chi tiết học viên',
				path: 'bao-cao/chi-tiet-hoc-vien',
				icon: 'Article',
			},
		},
	},
	studentCategory: {
		id: 'studentCategory',
		text: 'Học viên',
		path: 'hoc-vien',
		icon: 'SupervisorAccount',
		subMenu: {
			penddingType: {
				id: 'penddingType',
				text: 'Đang chờ',
				path: 'hoc-vien/dang-cho',
				icon: 'AccountCircle',
			},
			freeType: {
				id: 'freeType',
				text: 'Miễn phí',
				path: 'hoc-vien/mien-phi',
				icon: 'AccountCircle',
			},
			boughtType: {
				id: 'boughtType',
				text: 'Mua vé',
				path: 'hoc-vien/mua-ve',
				icon: 'AccountCircle',
			},
			jouney: {
				id: 'jouney',
				text: 'Hành trình',
				path: 'hoc-vien/hanh-trinh',
				icon: 'AccountCircle',
			},
		},
	},
	speakerCategory: {
		id: 'speakerCategory',
		text: 'Diễn giả',
		path: 'dien-gia',
		icon: 'Attribution',
		subMenu: {
			communityOwner: {
				id: 'communityOwner',
				text: 'Chủ cộng đồng',
				path: 'dien-gia/chu-cong-dong',
				icon: 'AccountCircle',
			},
			individual: {
				id: 'individual',
				text: 'Cá nhân',
				path: 'dien-gia/ca-nhan',
				icon: 'AccountCircle',
			},
			insideCommunity: {
				id: 'insideCommunity',
				text: 'Thuộc cộng đồng',
				path: 'dien-gia/thuoc-cong-dong',
				icon: 'AccountCircle',
			},
		},
	},
	permission: {
		id: 'permission',
		text: 'Phân quyền',
		path: 'phan-quyen',
		icon: 'AccountTree',
	},
	permissionAdd: {
		id: 'permissionAdd',
		text: 'Thêm mới nhóm quyền',
		path: 'phan-quyen/them-moi',
		hide: true,
	},
}

export const developmentMenu = {
	category: {
		id: 'category',
		text: 'Phát triển',
		icon: 'BrokenImage',
	},
	featureCategory: {
		id: 'featureCategory',
		text: 'Tính năng',
		path: 'tinh-nang',
		icon: 'Build',
		subMenu: {
			signUpAccountFeature: {
				id: 'signUpAccountFeature',
				text: 'Đăng ký tài khoản',
				path: 'tinh-nang/dang-ky-tai-khoan',
				icon: 'AccountCircle',
			},
			portFeature: {
				id: 'portFeature',
				text: 'Đấu nối tên miền riêng',
				path: 'tinh-nang/dau-noi-ten-mien-rieng',
				icon: 'Cable',
			},
			rentHostingFeature: {
				id: 'rentHostingFeature',
				text: 'Thuê hosting',
				path: 'tinh-nang/thue-hosting',
				icon: 'Computer',
			},
			designInterfaceFeature: {
				id: 'designInterfaceFeature',
				text: 'Thiết kế giao diện',
				path: 'tinh-nang/thiet-ke-giao-dien',
				icon: 'DesignServices',
			},
			createFormsFeature: {
				id: 'createFormsFeature',
				text: 'Tạo form đăng ký',
				path: 'tinh-nang/tao-form-dang-ky',
				icon: 'Create',
			},
			referralFeature: {
				id: 'referralFeature',
				text: 'Referral',
				path: 'tinh-nang/referral',
				icon: 'SocialDistance',
			},
			marketingEmailFeature: {
				id: 'marketingEmailFeature',
				text: 'Email marketing',
				path: 'tinh-nang/email-marketing',
				icon: 'Email',
			},
			marketingSMSFeature: {
				id: 'marketingSMSFeature',
				text: 'SMS marketing',
				path: 'tinh-nang/sms-marketing',
				icon: 'Sms',
			},
			chatFeature: {
				id: 'chatFeature',
				text: 'Chat',
				path: 'tinh-nang/chat',
				icon: 'Chat',
			},
			attendanceFeature: {
				id: 'attendanceFeature',
				text: 'Điểm danh',
				path: 'tinh-nang/diem-danh',
				icon: 'AccountCircle',
			},
			exerciseFeature: {
				id: 'exerciseFeature',
				text: 'Bài tập',
				path: 'tinh-nang/bai-tap',
				icon: 'CollectionsBookmark',
			},
			studentManagementFeature: {
				id: 'studentManagementFeature',
				text: 'Quản lý học viên',
				path: 'tinh-nang/quan-ly-hoc-vien',
				icon: 'People',
			},
			staffManagementFeature: {
				id: 'staffManagementFeature',
				text: 'Quản lý nhân sự',
				path: 'tinh-nang/quan-ly-nhan-su',
				icon: 'People',
			},
			elearningFeature: {
				id: 'elearningFeature',
				text: 'E-Learning',
				path: 'tinh-nang/elearning',
				icon: 'MenuBook',
			},
			recruitmentAgencyFeature: {
				id: 'recruitmentAgencyFeature',
				text: 'Tuyển dụng đại lý',
				path: 'tinh-nang/tuyen-dung-dai-ly',
				icon: 'People',
			},
			saleManagementFeature: {
				id: 'saleManagementFeature',
				text: 'Quản lý bán hàng',
				path: 'tinh-nang/quan-ly-ban-hang',
				icon: 'PointOfSale',
			},
		},
	},

	utilCategory: {
		id: 'utilCategory',
		text: 'Tiện ích',
		path: 'tien-ich',
		icon: 'Category',
		subMenu: {
			numerologyUtil: {
				id: 'numerologyUtil',
				text: 'Thần số học',
				path: 'tien-ich/than-so-hoc',
				icon: 'RemoveRedEye',
			},
			checkDISCUtil: {
				id: 'checkDISCUtil',
				text: 'Kiểm tra DISC',
				path: 'tien-ich/kiem-tra-disc',
				icon: 'RemoveRedEye',
			},
		},
	},
}
