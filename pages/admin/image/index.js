import { Admin } from "../../../components/templates"
import { AdminImageList as Images, ImageForm } from "../../../components/organisms"

const Index = () => {
	return(
		<Admin>
			<ImageForm />
			<Images />
		</Admin>
	)
}

export default Index