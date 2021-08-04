import { TopBar } from '../organisms'
import Head from "next/head"

const AdminTemplate = ({ children }) => {
	return (
		<>
			<style>{`
						html,body{
						overflow: visible !important;
					}
					`}
			</style>
			<TopBar />
			<div className="admin-content">
				{children}
			</div>
		</>
	)
}

export default AdminTemplate