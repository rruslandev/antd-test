import { PageHeader } from '@ant-design/pro-layout'
import { Divider } from 'antd'

export const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<PageHeader title='AntDesign Demo' />
			<Divider />
		</div>
	)
}
