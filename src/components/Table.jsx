import { Image, Table, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
	},
	{
		title: 'Id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
		filters: [
			{
				text: 'Few address take for special development white career.',
				value: 'Few address take for special development white career.',
			},
			{
				text: 'Million recently economic way short again share bill suggest short son natural.',
				value:
					'Million recently economic way short again share bill suggest short son natural.',
			},
			{
				text: 'Much technology how within rather him lay why part actually system increase feel.',
				value:
					'Much technology how within rather him lay why part actually system increase feel.',
			},
		],
		onFilter: (value, item) => item.description.includes(value),
	},
	{
		title: 'UserID',
		dataIndex: 'user',
		key: 'user',
		sorter: (a, b) => a.user - b.user,
	},
	{
		title: 'Image',
		dataIndex: 'url',
		key: 'url',
		render: (url) => <Image src={url} alt='photo' width={300} />,
	},
]

export const TableComponent = ({ rows = 10 }) => {
	const [photos, setPhotos] = useState(null)

	useEffect(() => {
		fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=50')
			.then((response) => response.json())
			.then((data) => {
				const dataSource = data.photos.map((photo) => ({
					...photo,
					key: photo.id,
				}))
				setPhotos(dataSource)
			})
			.catch(() => {})
	}, [photos])

	return (
		<Table
			dataSource={photos}
			columns={columns}
			pagination={{
				pageSize: rows,
				// defaultPageSize: '5',
				// showSizeChanger: true,
				// pageSizeOptions: [5, 10, 15, 20],
			}}
		/>
	)
}

TableComponent.propTypes = {
	rows: PropTypes.number,
}
