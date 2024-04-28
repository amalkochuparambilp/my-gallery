import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import UploadForm from "../components/UploadForm";

const Home = () => {

    return (
        <div className="max-w-4xl mx-auto">
            <NavBar />
            <UploadForm />
            <ImageGallery />
        </div>
    );
};

export default Home;