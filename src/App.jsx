import { Col, Row, Slider, Typography } from 'antd'
import { useState } from 'react'
import { Header } from './components/Header'
import { TableComponent } from './components/Table'

function App() {
	const [rows, setRows] = useState(10)

	return (
		<>
			<Header />
			<Row>
				<Col xs={24} md={{ span: 18, offset: 3 }}>
					<Typography.Title level={4}>
						Количество фотографий на страницу:
					</Typography.Title>
					<Slider min={1} max={20} defaultValue={rows} onChange={setRows} />
					<TableComponent rows={rows} />
				</Col>
			</Row>
		</>
	)
}

export default App
